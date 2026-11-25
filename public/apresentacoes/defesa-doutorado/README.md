# Apresentação de defesa (Reveal.js)

Tese: *Infraestruturas Científicas e Cientometria: estudos sobre a mensuração da produção
brasileira em Educação a Distância*. Bruno Monserrat Perillo. PPG em Engenharia da
Informação, UFABC.

## Como abrir

1. Dê dois cliques em `index.html` (Chrome ou Edge). Não precisa de internet: o Reveal.js,
   a fonte (Roboto) e as figuras estão nesta pasta.
2. Teclas:
   - `→` ou espaço: avança; `←`: volta;
   - `S`: abre as notas do apresentador em outra janela, com cronômetro e próximo slide;
   - `Esc` ou `O`: visão geral de todos os slides;
   - `F`: tela cheia.
3. Se as notas (`S`) não abrirem com o arquivo aberto direto, sirva a pasta localmente e
   abra `http://localhost:8020`:

   ```
   python -m http.server 8020
   ```

## Cópias de segurança em PDF

- `defesa_slides.pdf`: os 52 slides, um por página, para projetar de qualquer computador.
- `defesa_slides_com_notas.pdf`: cada slide seguido das notas do apresentador (roteiro
  para imprimir).

Para refazer os PDFs (com o servidor local ligado): `python scripts/exportar_pdf.py`.

## Estrutura

```
index.html                slides e notas do apresentador
css/defesa.css            estilo próprio (fundo branco, uma cor de destaque, sem caixas)
figs/                     figuras dos slides (SVG) e a figura da rede, copiada da tese
fonts/                    Roboto (licença Apache 2.0)
lib/reveal/               Reveal.js 4.2.1 e o plugin de notas (licença MIT)
scripts/gerar_figuras.py  redesenha as figuras a partir dos dados da tese
scripts/exportar_pdf.py   gera os dois PDFs
```

## Roteiro e tempos (apresentação principal)

| Bloco | Slides | Tempo |
|---|---|---|
| Abertura, problema e motivação | 1 a 5 | 5,5 min |
| Pergunta, objetivos e desenho da tese | 6 a 8 | 4,0 min |
| Estudo 1: infraestrutura (de onde vêm os dados?) | 9 a 17 | 10,5 min |
| Estudo 2: delimitação (o que pertence ao corpus?) | 18 a 26 | 12,0 min |
| Integração dos dois estudos | 27 e 28 | 3,5 min |
| Contribuições, limitações, conclusão e encerramento | 29 a 32 | 4,75 min |
| **Total** | **32** | **cerca de 40 min** |

Cada nota traz o tempo do slide e o tempo acumulado. Depois do slide 32 vêm 20 slides de
apoio para as perguntas, com um índice clicável e um atalho de volta em cada um. Eles não
entram nos 40 minutos.

## Origem das figuras

As figuras dos slides foram redesenhadas no estilo da apresentação, sem alterar dados. O
script `scripts/gerar_figuras.py` lê os mesmos arquivos que geraram as figuras e tabelas da
tese e confere cada número contra o valor publicado (se algum divergir, o script para):

- Artigo 1: `Doutorado/Tese Final/Artigo 1/03_resultados/REGISTRO_CANONICO.csv`,
  `serie_anual.csv`, `sobreposicao.csv` e `05_figuras/_dados_fig4.csv` e `_dados_fig5.csv`;
- Artigo 2: `Artigos/Lattes/resultados_dual.json`, `resultados_modelo_tempo.json`,
  `validacao_cega_ead_ert/resultados_validacao_cega.json` e
  `bertopic/resultados_bertopic_saidas.json`.

A figura da rede institucional (slide de apoio) é a própria figura da tese, convertida para
imagem sem alteração.

## Verificação final feita

- **Números.** Todos os números dos slides e das notas foram extraídos por script e
  procurados no texto e nas tabelas da tese. Todos constam, exceto os tempos das notas e
  "60%" (60,0% na tese). Os números internos das figuras são conferidos pelo script de
  figuras.
- **Força das conclusões.** Os títulos usam a formulação da tese ("condiciona", "está
  associada", "perfil empiricamente distinto", "associações, e não efeitos causais").
  Nenhum slide diz que uma fonte ou uma delimitação é a verdadeira.
- **Unidade da tese.** Os slides 7 e 8 apresentam os dois estudos como duas decisões da mesma
  cadeia. Os slides 27 e 28 os reúnem.
- **Texto.** Uma ideia por slide. Detalhes operacionais estão nos slides de apoio.
- **Design.** Fundo branco em todos os slides. Texto quase preto. Uma só cor de destaque.
  Nenhuma caixa, cartão, sombra, gradiente ou ícone: as tabelas têm só os fios superior e
  inferior. Nenhum slide principal ultrapassa a área de 1920 x 1080 (conferido no
  navegador).
- **Tempo.** A soma dos tempos das notas é de 40,25 min.
- **Fechamento.** O slide 31 retoma a pergunta do slide 6 e o exemplo do slide 2.

## O que o autor deve conferir

- Data e local da defesa: a capa usa "Santo André, 2026", como na folha de rosto.
- Se quiser, acrescentar os nomes da banca na capa.
- Ensaiar com o cronômetro da janela de notas (`S`). Os tempos são estimativas.
