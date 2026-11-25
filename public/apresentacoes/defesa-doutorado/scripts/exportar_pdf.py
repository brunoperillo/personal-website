# -*- coding: utf-8 -*-
"""
Exporta a apresentação para PDF (vetorial) com o Chrome, pelo protocolo DevTools.

Requer o servidor local em http://localhost:8020 (python -m http.server 8020,
na pasta da apresentação) e o pacote websocket-client.

Gera:
  defesa_slides.pdf            slides, um por página (estado final dos fragmentos)
  defesa_slides_com_notas.pdf  cada slide seguido da página com as notas do apresentador
"""
import base64, json, os, subprocess, sys, tempfile, time, urllib.request
from pathlib import Path

import websocket

RAIZ = Path(__file__).resolve().parent.parent
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORTA = 9333
BASE = "http://localhost:8020/"


def cdp(ws, metodo, params=None, _id=[0]):
    _id[0] += 1
    ws.send(json.dumps({"id": _id[0], "method": metodo, "params": params or {}}))
    while True:
        r = json.loads(ws.recv())
        if r.get("id") == _id[0]:
            if "error" in r:
                raise RuntimeError(r["error"])
            return r.get("result", {})


def exportar(ws, url, destino):
    cdp(ws, "Page.navigate", {"url": url})
    # espera o reveal montar as páginas de impressão
    for _ in range(60):
        time.sleep(0.5)
        r = cdp(ws, "Runtime.evaluate", {"expression": "document.querySelectorAll('.pdf-page').length",
                                          "returnByValue": True})
        if r["result"].get("value", 0) > 0:
            break
    time.sleep(2.5)
    pdf = cdp(ws, "Page.printToPDF", {"preferCSSPageSize": True, "printBackground": True,
                                      "displayHeaderFooter": False})
    destino.write_bytes(base64.b64decode(pdf["data"]))
    # o modo de impressão do reveal deixa uma página final vazia: retirá-la
    import fitz
    doc = fitz.open(destino)
    def vazia(pg):
        # sem texto, sem imagens e, no máximo, o retângulo branco de fundo
        so_fundo = all(d.get("fill") == (1.0, 1.0, 1.0) for d in pg.get_drawings())
        return not pg.get_text().strip() and not pg.get_images() and so_fundo
    while doc.page_count and vazia(doc[-1]):
        doc.delete_page(-1)
    doc.save(str(destino) + ".tmp")
    doc.close()
    os.replace(str(destino) + ".tmp", destino)
    print("gravado:", destino.name, fitz.open(destino).page_count, "páginas")


def main():
    perfil = tempfile.mkdtemp(prefix="chrome_pdf_")
    proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", f"--remote-debugging-port={PORTA}",
                             "--remote-allow-origins=*", f"--user-data-dir={perfil}", "about:blank"],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(40):
            try:
                alvos = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORTA}/json"))
                pag = [a for a in alvos if a.get("type") == "page"]
                if pag:
                    break
            except Exception:
                pass
            time.sleep(0.25)
        ws = websocket.create_connection(pag[0]["webSocketDebuggerUrl"], timeout=60)
        cdp(ws, "Page.enable")
        exportar(ws, BASE + "?print-pdf", RAIZ / "defesa_slides.pdf")
        exportar(ws, BASE + "?print-pdf&showNotes=separate-page", RAIZ / "defesa_slides_com_notas.pdf")
        ws.close()
    finally:
        proc.terminate()


if __name__ == "__main__":
    main()
