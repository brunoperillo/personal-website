# -*- coding: utf-8 -*-
"""
Figuras da apresentação de defesa.

Redesenha, em estilo de slide (fundo branco, tons de cinza e uma única cor de
destaque), figuras da tese a partir dos MESMOS arquivos de dados que alimentam as
figuras e tabelas da tese. Nenhum valor é digitado: tudo é lido dos arquivos abaixo.
Cada número usado é conferido (assert) contra o valor publicado na tese.

Saída: ../figs/*.svg (texto convertido em curvas, para não depender de fontes).
"""
from __future__ import annotations
import json, math, os, sys
from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager as fm
from scipy.optimize import brentq

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parent
FIGS = RAIZ / "figs"
FIGS.mkdir(exist_ok=True)

# ---------------------------------------------------------------- fontes de dados
A1 = Path(r"C:\Users\Bruno\Desktop\Doutorado\Tese Final\Artigo 1")
A2 = Path(r"C:\Users\Bruno\Desktop\Artigos\Lattes")
REG = pd.read_csv(A1 / "03_resultados" / "REGISTRO_CANONICO.csv", dtype=str)
V = dict(zip(REG["chave"], REG["valor"]))
SER = pd.read_csv(A1 / "03_resultados" / "serie_anual.csv", encoding="utf-8-sig")
FIG4 = pd.read_csv(A1 / "05_figuras" / "_dados_fig4.csv", encoding="utf-8-sig")
FIG5 = pd.read_csv(A1 / "05_figuras" / "_dados_fig5.csv", encoding="utf-8-sig")
DUAL = json.load(open(A2 / "resultados_dual.json", encoding="utf-8"))
VAL = json.load(open(A2 / "validacao_cega_ead_ert" / "resultados_validacao_cega.json",
                     encoding="utf-8"))
MOD = json.load(open(A2 / "resultados_modelo_tempo.json", encoding="utf-8"))
BT = json.load(open(A2 / "bertopic" / "resultados_bertopic_saidas.json", encoding="utf-8"))


def v(k):
    return float(V[k])


# ---------------------------------------------------------------- estilo
for f in ("Roboto-Regular.ttf", "Roboto-Bold.ttf"):
    fm.fontManager.addfont(str(RAIZ / "fonts" / f))
INK, G1, G2, G3, G4 = "#111111", "#4a4a4a", "#8f8f8f", "#c8c8c8", "#ececec"
ACC = "#b8432f"
plt.rcParams.update({
    "font.family": "Roboto", "font.size": 22, "text.color": INK,
    "axes.edgecolor": G2, "axes.linewidth": 1.2, "axes.labelcolor": G1,
    "axes.spines.top": False, "axes.spines.right": False,
    "xtick.color": G1, "ytick.color": G1, "xtick.labelsize": 20, "ytick.labelsize": 20,
    "xtick.major.size": 0, "ytick.major.size": 0, "xtick.major.pad": 10, "ytick.major.pad": 10,
    "svg.fonttype": "path", "figure.facecolor": "white", "axes.facecolor": "white",
    "legend.frameon": False,
})


def br(x, casas=1):
    s = f"{x:,.{casas}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")


def inteiro(x):
    return f"{int(round(x)):,}".replace(",", ".")


def figura(wpx, hpx):
    # 96 px por polegada: o SVG é exibido no tamanho previsto, e 1 pt = 1,333 px
    return plt.figure(figsize=(wpx / 96, hpx / 96))


def legenda(fig, itens, y, x0, gap=0.035, fs=20):
    """Legenda em linha, sem moldura. itens: (tipo, cor, texto); tipo: 'q' quadrado,
    'o' círculo vazado, 'c' círculo cheio. Coordenadas da figura."""
    r = fig.canvas.get_renderer()
    x = x0
    for tipo, cor, txt in itens:
        if tipo == "q":
            fig.patches.append(matplotlib.patches.Rectangle(
                (x, y - 0.022), 0.012, 0.044, color=cor, transform=fig.transFigure, figure=fig))
        else:
            fig.lines.append(matplotlib.lines.Line2D(
                [x + 0.006], [y], marker="o", ms=13, mew=2.4, mec=cor,
                mfc="white" if tipo == "o" else cor, transform=fig.transFigure, figure=fig))
        t = fig.text(x + 0.02, y, txt, fontsize=fs, color=G1 if tipo != "c" else cor, va="center")
        w = t.get_window_extent(renderer=r).width / fig.bbox.width
        x += 0.02 + w + gap


def rotulo_esq(fig, ax, y, txt, x_fig, **kw):
    """Rótulo de linha alinhado à direita em x da figura e y dos dados."""
    tr = matplotlib.transforms.blended_transform_factory(fig.transFigure, ax.transData)
    ax.text(x_fig, y, txt, ha="right", va="center", transform=tr, clip_on=False, **kw)


def salvar(fig, nome):
    fig.savefig(FIGS / f"{nome}.svg")
    if os.environ.get("PREVIA"):
        fig.savefig(FIGS / f"_previa_{nome}.png", dpi=60)
    plt.close(fig)
    print("gravada:", nome)


# ================================================================ ARTIGO 1
# --- Séries anuais (campos utilizados em cada fonte) ---------------------------
anos = SER["ano"].astype(int).tolist()
lat, oa, sc = (SER[f"B_operacional|{f}"].tolist() for f in ("lattes", "openalex", "scielo"))
assert sum(lat) == 14226 and sum(oa) == 13944 and sum(sc) == 804
assert round(v("serie.pearson_dif.A_titulo.lattes_openalex"), 3) == 0.919  # registro lido
fig = figura(1560, 600)
ax = fig.add_axes([0.075, 0.12, 0.9, 0.8])
ax.axvspan(2019.6, 2022.4, color=G4, lw=0, zorder=0)
ax.text(2021, 2950, "período pandêmico", ha="center", va="bottom", color=G2, fontsize=18)
ax.plot(anos, lat, color=INK, lw=3.2, marker="o", ms=8, label="Lattes", zorder=3)
ax.plot(anos, oa, color=ACC, lw=3.2, marker="o", ms=8, label="OpenAlex", zorder=3)
ax.plot(anos, sc, color=G2, lw=3.2, marker="o", ms=8, label="SciELO", zorder=3)
ax.set_xticks(anos)
ax.set_xlim(2014.6, 2025.4)
ax.set_ylim(0, 3100)
ax.set_yticks([0, 1000, 2000, 3000])
ax.set_yticklabels(["0", "1.000", "2.000", "3.000"])
ax.set_ylabel("registros por ano")
ax.grid(axis="y", color=G4, lw=1)
ax.set_axisbelow(True)
ax.legend(loc="upper left", fontsize=21, handlelength=1.6, borderaxespad=0.2)
salvar(fig, "a1_series")

# --- Venn proporcional dos DOIs ------------------------------------------------
reg = dict(zip(FIG5["regiao"], FIG5["n"]))
nL = reg["somente Lattes"] + reg["Lattes e OpenAlex"] + reg["Lattes e SciELO"] + reg["as tres"]
nO = reg["somente OpenAlex"] + reg["Lattes e OpenAlex"] + reg["OpenAlex e SciELO"] + reg["as tres"]
nS = reg["somente SciELO"] + reg["Lattes e SciELO"] + reg["OpenAlex e SciELO"] + reg["as tres"]
iLO = reg["Lattes e OpenAlex"] + reg["as tres"]
iLS = reg["Lattes e SciELO"] + reg["as tres"]
iOS = reg["OpenAlex e SciELO"] + reg["as tres"]
assert (nL, nO, nS, iLO, iLS, iOS, reg["as tres"]) == (7480, 12410, 804, 4364, 331, 579, 271)


def lente(r1, r2, d):
    if d >= r1 + r2:
        return 0.0
    if d <= abs(r1 - r2):
        return math.pi * min(r1, r2) ** 2
    a1 = r1 * r1 * math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1))
    a2 = r2 * r2 * math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2))
    a3 = 0.5 * math.sqrt((-d + r1 + r2) * (d + r1 - r2) * (d - r1 + r2) * (d + r1 + r2))
    return a1 + a2 - a3


def dist(r1, r2, alvo):
    return brentq(lambda d: lente(r1, r2, d) - alvo, abs(r1 - r2) + 1e-9, r1 + r2 - 1e-9)


rL, rO, rS = (math.sqrt(n / math.pi) for n in (nL, nO, nS))
dLO, dLS, dOS = dist(rL, rO, iLO), dist(rL, rS, iLS), dist(rO, rS, iOS)
cL = np.array([0.0, 0.0])
cO = np.array([dLO, 0.0])
xs = (dLS ** 2 - dOS ** 2 + dLO ** 2) / (2 * dLO)
cS = np.array([xs, -math.sqrt(max(dLS ** 2 - xs ** 2, 0))])
# SciELO acima das outras duas (a orientação é livre; as áreas e as interseções
# par a par são proporcionais aos conjuntos de DOI)
cS[1] = -cS[1]
FW, FH = 1300, 640
fig = figura(FW, FH)
ax = fig.add_axes([0, 0, 1, 1])
ax.set_aspect("equal")
ax.axis("off")
for c, r, cor in ((cL, rL, INK), (cO, rO, ACC), (cS, rS, G1)):
    ax.add_patch(plt.Circle(c, r, fill=False, color=cor, lw=3))
gx, gy = np.meshgrid(np.linspace(-rL - 5, dLO + rO + 5, 900), np.linspace(-rO - 5, rO + 25, 900))
inL = (gx - cL[0]) ** 2 + (gy - cL[1]) ** 2 <= rL ** 2
inO = (gx - cO[0]) ** 2 + (gy - cO[1]) ** 2 <= rO ** 2
inS = (gx - cS[0]) ** 2 + (gy - cS[1]) ** 2 <= rS ** 2


def centro(m):
    return np.array([gx[m].mean(), gy[m].mean()])


fs = 26
ax.text(*centro(inL & ~inO & ~inS), inteiro(reg["somente Lattes"]), ha="center", va="center", fontsize=fs)
ax.text(*(centro(inL & inO & ~inS) - [0, 10]), inteiro(reg["Lattes e OpenAlex"]), ha="center",
        va="center", fontsize=fs)
ax.text(*(centro(inO & ~inL & ~inS) + [6, 0]), inteiro(reg["somente OpenAlex"]), ha="center",
        va="center", fontsize=fs)
ax.text(cL[0] - rL * 0.62, -rL * 1.08, "Lattes", ha="center", va="top", fontsize=26, color=INK,
        fontweight="bold")
ax.text(cL[0] - rL * 0.62, -rL * 1.08 - 13, f"{inteiro(nL)} DOIs", ha="center", va="top",
        fontsize=21, color=G1)
ax.text(cO[0] + rO * 0.62, -rO * 0.98, "OpenAlex", ha="center", va="top", fontsize=26, color=ACC,
        fontweight="bold")
ax.text(cO[0] + rO * 0.62, -rO * 0.98 - 13, f"{inteiro(nO)} DOIs", ha="center", va="top",
        fontsize=21, color=ACC)
y0, y1 = -rO - 30, cS[1] + rS + 8
x1 = dLO + rO + 6
x0 = x1 - (y1 - y0) * FW / FH
ax.set_xlim(x0, x1)
ax.set_ylim(y0, y1)
# decomposição do SciELO em texto, à esquerda do círculo
xs0, ys0 = x0 + 4, cS[1] + rS + 2
ax.text(xs0, ys0, f"SciELO   {inteiro(nS)} DOIs", ha="left", va="top", fontsize=24,
        color=G1, fontweight="bold")
lin = [(f"{inteiro(reg['as tres'])} nas três fontes", ACC, "bold"),
       (f"{inteiro(reg['OpenAlex e SciELO'])} também no OpenAlex, não no Lattes", G1, "normal"),
       (f"{inteiro(reg['Lattes e SciELO'])} também no Lattes, não no OpenAlex", G1, "normal"),
       (f"{inteiro(reg['somente SciELO'])} só no SciELO", G1, "normal")]
for i, (t, cor, peso) in enumerate(lin):
    ax.text(xs0, ys0 - 13 - 9.5 * i, t, ha="left", va="top", fontsize=21, color=cor, fontweight=peso)
salvar(fig, "a1_venn")

# --- Campo de busca: exclusivos do OpenAlex declarados no Lattes ----------------
so_res = (v("regrec.openalex.so_resumo.dois"), v("regrec.openalex.so_resumo.declarados"))
com_tit = (v("regrec.openalex.com_titulo.dois"), v("regrec.openalex.com_titulo.declarados"))
assert so_res == (6132, 3851) and com_tit == (1914, 109)
assert v("regrec.openalex.so_resumo.pct_declarados") == 62.8
assert v("regrec.openalex.com_titulo.pct_declarados") == 5.7
fig = figura(1560, 400)
ax = fig.add_axes([0.30, 0.10, 0.62, 0.80])
linhas = [("recuperados só pelo resumo", so_res), ("recuperados pelo título", com_tit)]
for i, (rot, (n, d)) in enumerate(linhas):
    y = 1 - i
    p = d / n
    ax.barh(y, 1, height=0.52, color=G4, lw=0)
    ax.barh(y, p, height=0.52, color=ACC, lw=0)
    ax.text(-0.02, y + 0.06, rot, ha="right", va="bottom", fontsize=24, color=INK)
    ax.text(-0.02, y - 0.06, f"{inteiro(n)} DOIs", ha="right", va="top", fontsize=20, color=G2)
    ax.text(max(p, 0.0) + 0.012, y, f"{br(100 * d / n)}%", ha="left", va="center",
            fontsize=30, fontweight="bold", color=ACC)
ax.set_xlim(0, 1)
ax.set_ylim(-0.55, 1.55)
ax.axis("off")
salvar(fig, "a1_campo")

# --- Recuperação restrita ao título: antes e depois -----------------------------
# coberturas direcionais por DOI: arquivo da Tabela de sobreposição da tese
sob = pd.read_csv(A1 / "03_resultados" / "sobreposicao.csv", encoding="utf-8-sig")
sob = sob.set_index(["cenario", "par"])
lo_b = sob.loc[("B_operacional", "lattes x openalex")]
lo_t = sob.loc[("A_titulo", "lattes x openalex")]
med = [
    ("Jaccard por DOI, Lattes e OpenAlex", lo_b["jaccard"], lo_t["jaccard"], "j"),
    ("DOIs do OpenAlex encontrados no Lattes", lo_b["cobertura_B"], lo_t["cobertura_B"], "p"),
    ("DOIs do Lattes encontrados no OpenAlex", lo_b["cobertura_A"], lo_t["cobertura_A"], "p"),
    ("Títulos do Lattes encontrados no OpenAlex", v("titulo.cobertura_lattes.B_operacional"),
     v("titulo.cobertura_lattes.A_titulo"), "p"),
]
assert (med[0][1], med[0][2]) == (0.2811, 0.464)
assert (med[1][1], med[1][2], med[2][1], med[2][2]) == (35.2, 63.1, 58.3, 63.7)
assert (med[3][1], med[3][2]) == (39.2, 43.5)
fig = figura(1560, 560)
ax = fig.add_axes([0.42, 0.04, 0.50, 0.76])
for i, (rot, a, b, tipo) in enumerate(med):
    y = len(med) - 1 - i
    fa, fb = (a, b) if tipo == "j" else (a / 100, b / 100)
    ax.plot([fa, fb], [y, y], color=G3, lw=3, zorder=1)
    ax.plot(fa, y, "o", ms=15, mfc="white", mec=G1, mew=2.4, zorder=2)
    ax.plot(fb, y, "o", ms=15, color=ACC, zorder=3)
    ta = br(a, 3) if tipo == "j" else f"{br(a)}%"
    tb = br(b, 3) if tipo == "j" else f"{br(b)}%"
    esq, dir_ = (fa, fb) if fa <= fb else (fb, fa)
    ax.text(esq - 0.025, y, ta, ha="right", va="center", fontsize=21, color=G1)
    ax.text(dir_ + 0.025, y, tb, ha="left", va="center", fontsize=21, color=ACC, fontweight="bold")
    rotulo_esq(fig, ax, y, rot, 0.39, fontsize=22, color=INK)
ax.set_xlim(0.2, 0.75)
ax.set_ylim(-0.6, len(med) - 0.4)
ax.axis("off")
legenda(fig, [("o", G1, "campos utilizados em cada fonte"),
              ("c", ACC, "recuperação restrita ao título")], 0.92, 0.42)
salvar(fig, "a1_titulo")

# --- Situação do DOI -----------------------------------------------------------
d4 = FIG4.set_index("fonte")
assert int(d4.loc["Lattes", "com DOI no registro"]) == 7480
assert int(d4.loc["Lattes", "DOI recuperado em outra fonte"]) == 1478
assert round(100 * 1478 / v("doirec.lattes.sem_doi"), 1) == 21.9
cats = [("com DOI no registro", G1, "white"), ("DOI recuperado em outra fonte", ACC, "white"),
        ("mais de um DOI candidato", G2, "white"), ("sem DOI identificável", G4, G1)]
fig = figura(1560, 470)
ax = fig.add_axes([0.13, 0.04, 0.85, 0.72])
fontes = ["Lattes", "OpenAlex", "SciELO"]
for i, f in enumerate(fontes):
    y = len(fontes) - 1 - i
    tot = sum(int(d4.loc[f, c]) for c, _, _ in cats)
    x0 = 0
    for c, cor, tcor in cats:
        p = int(d4.loc[f, c]) / tot
        ax.barh(y, p, left=x0, height=0.62, color=cor, lw=0)
        if p >= 0.07:
            ax.text(x0 + p / 2, y, f"{br(100 * p)}%", ha="center", va="center",
                    fontsize=22, color=tcor, fontweight="bold")
        x0 += p
    ax.text(-0.015, y, f, ha="right", va="center", fontsize=24, color=INK)
ax.set_xlim(0, 1)
ax.set_ylim(-0.5, 2.5)
ax.axis("off")
legenda(fig, [("q", cor, c) for c, cor, _ in cats], 0.9, 0.13, gap=0.022, fs=18)
salvar(fig, "a1_doi")

# --- Sub-universo SciELO: Jaccard no corpus completo e dentro da coleção ----------
pares = [("Lattes e OpenAlex", "lattes_openalex"), ("Lattes e SciELO", "lattes_scielo"),
         ("OpenAlex e SciELO", "openalex_scielo")]
vals = [(r, v(f"doi.jaccard.B_operacional.{k}"), v(f"scl.jaccard.{k}")) for r, k in pares]
assert [round(a, 3) for _, a, _ in vals] == [0.281, 0.042, 0.046]
assert [round(b, 3) for _, _, b in vals] == [0.327, 0.361, 0.540]
fig = figura(1500, 430)
ax = fig.add_axes([0.25, 0.06, 0.68, 0.72])
for i, (rot, a, b) in enumerate(vals):
    y = len(vals) - 1 - i
    ax.plot([a, b], [y, y], color=G3, lw=3, zorder=1)
    ax.plot(a, y, "o", ms=15, mfc="white", mec=G1, mew=2.4, zorder=2)
    ax.plot(b, y, "o", ms=15, color=ACC, zorder=3)
    ax.text(a - 0.012, y, br(a, 3), ha="right", va="center", fontsize=21, color=G1)
    ax.text(b + 0.012, y, br(b, 3), ha="left", va="center", fontsize=21, color=ACC, fontweight="bold")
    rotulo_esq(fig, ax, y, rot, 0.20, fontsize=23, color=INK)
ax.set_xlim(0, 0.62)
ax.set_ylim(-0.6, 2.6)
ax.axis("off")
legenda(fig, [("o", G1, "corpus completo"),
              ("c", ACC, "dentro dos periódicos da coleção scl")], 0.92, 0.25)
salvar(fig, "a1_scielo")

# ================================================================ ARTIGO 2
A, B, E = DUAL["A"], DUAL["B"], DUAL["ERT"]
assert (A["n"], B["n"], E["n"]) == (14890, 9352, 5538)
assert (DUAL["lex_de_only"], DUAL["lex_both"], DUAL["lex_ert_only"]) == (8770, 582, 5538)
assert (B["cagr_2015_2024"], A["cagr_2015_2024"]) == (2.7, 9.5)

# --- Partição do corpus -------------------------------------------------------
fig = figura(1600, 330)
ax = fig.add_axes([0.02, 0.05, 0.96, 0.9])
tot = A["n"]
seg = [(DUAL["lex_de_only"], G1), (DUAL["lex_both"], G2), (DUAL["lex_ert_only"], ACC)]
x0 = 0
pos = []
for n, cor in seg:
    ax.barh(0, n / tot, left=x0, height=0.5, color=cor, lw=0)
    pos.append((x0, x0 + n / tot))
    x0 += n / tot
# chaves superiores: Corpus B e estrato ERT
for (a, b), rot, cor in (((pos[0][0], pos[1][1]), f"Corpus B   {inteiro(B['n'])}   ({br(B['pct_A'])}%)", INK),
                         ((pos[2][0], pos[2][1]), f"Estrato ERT   {inteiro(E['n'])}   ({br(E['pct_A'])}%)", ACC)):
    ax.plot([a + 0.002, a + 0.002, b - 0.002, b - 0.002], [0.36, 0.44, 0.44, 0.36], color=G2, lw=1.4)
    ax.text((a + b) / 2, 0.52, rot, ha="center", va="bottom", fontsize=24, color=cor, fontweight="bold")
# rótulos inferiores
ax.text(pos[0][0], -0.36, f"apenas descritores de EaD   {inteiro(seg[0][0])}", ha="left", va="top",
        fontsize=21, color=G1)
xm = (pos[1][0] + pos[1][1]) / 2
ax.plot([xm, xm], [-0.27, -0.62], color=G2, lw=1.2)
ax.text(xm, -0.66, f"as duas famílias   {inteiro(seg[1][0])}   (fronteira)", ha="center", va="top",
        fontsize=21, color=G1)
ax.text(pos[2][1], -0.36, f"apenas descritores de ERT   {inteiro(seg[2][0])}", ha="right", va="top",
        fontsize=21, color=ACC)
ax.set_xlim(0, 1)
ax.set_ylim(-1.05, 0.95)
ax.axis("off")
salvar(fig, "a2_particao")

# --- Validação humana cega -----------------------------------------------------
M = VAL["matriz_grupo_x_humana"]
assert M["EAD_ONLY"]["EaD institucionalizada"] == 115 and M["ERT_ONLY"]["Ensino Remoto Emergencial"] == 136
assert M["FRONTEIRA"]["Ensino Remoto Emergencial"] == 90 and M["FRONTEIRA"]["Ambos"] == 45
grupos = [("EAD_ONLY", "apenas EaD"), ("ERT_ONLY", "apenas ERT"), ("FRONTEIRA", "fronteira")]
cats = [("EaD institucionalizada", "EaD institucionalizada", G1, "white"),
        ("Ambos", "Ambos", G2, "white"),
        ("Ensino Remoto Emergencial", "ERT", ACC, "white"),
        ("Indeterminado", "Indeterminado", G4, G1)]
fig = figura(1600, 500)
ax = fig.add_axes([0.14, 0.04, 0.84, 0.72])
for i, (g, rot) in enumerate(grupos):
    y = len(grupos) - 1 - i
    tot = sum(M[g].values())
    assert tot == 150
    x0 = 0
    for c, _, cor, tcor in cats:
        n = M[g][c]
        p = n / tot
        if n:
            ax.barh(y, p, left=x0, height=0.62, color=cor, lw=0)
        if p >= 0.05:
            ax.text(x0 + p / 2, y, str(n), ha="center", va="center", fontsize=22,
                    color=tcor, fontweight="bold")
        x0 += p
    ax.text(-0.015, y, rot, ha="right", va="center", fontsize=24, color=INK)
ax.set_xlim(0, 1)
ax.set_ylim(-0.5, 2.5)
ax.axis("off")
legenda(fig, [("q", cor, rot) for _, rot, cor, _ in cats], 0.9, 0.14, gap=0.035, fs=20)
salvar(fig, "a2_validacao")

# --- Produção anual por estrato ------------------------------------------------
anosA = [int(a) for a in B["anual"]]
b = [B["anual"][str(a)] for a in anosA]
e = [E["anual"][str(a)] for a in anosA]
assert [x + y for x, y in zip(b, e)] == [A["anual"][str(a)] for a in anosA]
assert round(100 * E["anual"]["2021"] / A["anual"]["2021"], 1) == DUAL["pico2021_pct_ert"] == 58.8
fig = figura(1560, 620)
ax = fig.add_axes([0.075, 0.1, 0.9, 0.84])
for a, x, y in zip(anosA, b, e):
    alfa = 0.45 if a == 2025 else 1
    ax.bar(a, x, width=0.72, color=G1, alpha=alfa, lw=0)
    ax.bar(a, y, bottom=x, width=0.72, color=ACC, alpha=alfa, lw=0)
ax.set_xticks(anosA)
ax.set_xlim(2014.4, 2025.6)
ax.set_ylim(0, 2800)
ax.set_yticks([0, 500, 1000, 1500, 2000, 2500])
ax.set_yticklabels(["0", "500", "1.000", "1.500", "2.000", "2.500"])
ax.set_ylabel("trabalhos por ano")
ax.grid(axis="y", color=G4, lw=1)
ax.set_axisbelow(True)
legenda(fig, [("q", G1, "EaD institucionalizada (Corpus B)")], 0.9, 0.11, fs=21)
legenda(fig, [("q", ACC, "Estrato ERT")], 0.835, 0.11, fs=21)
ax.text(2021, A["anual"]["2021"] + 40, f"ERT: {br(DUAL['pico2021_pct_ert'])}%", ha="center",
        va="bottom", fontsize=20, color=ACC, fontweight="bold")
ax.text(2025, A["anual"]["2025"] + 40, "indexação\nincompleta", ha="center", va="bottom",
        fontsize=16, color=G2, linespacing=1.1)
salvar(fig, "a2_crescimento")

# --- Associações ajustadas com as citações (IRR, especificação principal) ---------
assert MOD["principal"] == "B"
irr = MOD["especificacoes"]["B"]["irr"]
rot = {"lang_en": "Inglês (vs. outro idioma)", "is_oa": "Acesso aberto (vs. fechado)",
       "log_authors": "log(nº de autores)", "colaboracao_intl": "Colaboração internacional",
       "ert": "Estrato ERT (vs. EaD inst.)", "is_article": "Tipo article (vs. outros)"}
assert round(irr["lang_en"]["est"], 2) == 6.27 and round(irr["is_oa"]["est"], 2) == 3.23
assert round(irr["ert"]["est"], 2) == 0.97
ordem = sorted(rot, key=lambda k: -irr[k]["est"])
fig = figura(1120, 560)
ax = fig.add_axes([0.37, 0.15, 0.37, 0.8])
for i, k in enumerate(ordem):
    y = len(ordem) - 1 - i
    x = irr[k]
    cor = ACC if k == "ert" else INK
    ax.plot([x["lo"], x["hi"]], [y, y], color=cor, lw=3)
    ax.plot(x["est"], y, "o", ms=13, color=cor)
    rotulo_esq(fig, ax, y, rot[k], 0.35, fontsize=21, color=cor,
               fontweight="bold" if k == "ert" else "normal")
    ax.text(1.04, y, f"{br(x['est'], 2)}  [{br(x['lo'], 2)}; {br(x['hi'], 2)}]", ha="left",
            va="center", fontsize=19, color=cor,
            transform=matplotlib.transforms.blended_transform_factory(ax.transAxes, ax.transData))
ax.axvline(1, color=G2, lw=1.4, ls=(0, (4, 4)))
ax.set_xscale("log")
ax.set_xlim(0.45, 8)
ax.set_xticks([0.5, 1, 2, 4, 8])
ax.set_xticklabels(["0,5", "1", "2", "4", "8"])
ax.minorticks_off()
ax.set_yticks([])
ax.spines["left"].set_visible(False)
ax.set_ylim(-0.6, len(ordem) - 0.4)
ax.set_xlabel("razão de taxas de citação (IRR), escala log", fontsize=19)
salvar(fig, "a2_impacto")

# ================================================================ BACKUP
# --- Tópico "Ensino na pandemia de COVID-19" por ano e estrato ---------------------
pa = BT["pandemia_por_ano_pct"]
assert pa["EAD"]["2020"] == 18.6 and pa["EAD"]["2021"] == 26.9 and pa["EAD"]["2025"] == 9.6
fig = figura(1100, 520)
ax = fig.add_axes([0.11, 0.12, 0.86, 0.8])
xb = [int(a) for a in pa["EAD"]]
xe = [int(a) for a in pa["ERT"]]
ax.plot(xb, list(pa["EAD"].values()), color=G1, lw=3.2, marker="o", ms=8, label="Corpus B")
ax.plot(xe, list(pa["ERT"].values()), color=ACC, lw=3.2, marker="o", ms=8, label="Estrato ERT")
ax.set_xticks(range(2015, 2026))
ax.set_xlim(2014.6, 2025.4)
ax.set_ylim(0, 75)
ax.set_yticks([0, 20, 40, 60])
ax.set_yticklabels(["0%", "20%", "40%", "60%"])
ax.set_ylabel("trabalhos do ano no tópico")
ax.grid(axis="y", color=G4, lw=1)
ax.set_axisbelow(True)
ax.legend(loc="upper left", fontsize=21)
salvar(fig, "b_topico_pandemia")

# --- Rede institucional: figura da própria tese, convertida sem alteração ---------
import fitz  # PyMuPDF
TESE = Path(r"C:\Users\Bruno\Desktop\thesis_final_FINAL_2026_REAL\Tese_atualizada_2026\Tese")
pg = fitz.open(TESE / "figuras" / "artigo2" / "fig_rede_instituicional.pdf")[0]
pg.get_pixmap(dpi=220).save(FIGS / "b_rede_tese.png")
print("gravada: b_rede_tese (figura da tese, sem alteração)")

print("ok: todas as conferências passaram")
