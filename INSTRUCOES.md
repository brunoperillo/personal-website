# Portal acadêmico – adaptação sobre o template original

Esta atualização preserva o projeto React + TypeScript original, seu componente de partículas, temas claro/escuro e a identidade escura/minimalista, acrescentando páginas acadêmicas.

## Como aplicar

1. No repositório `brunoperillo/personal-website`, crie uma **branch**, sem modificar diretamente `main`.
2. Copie os arquivos deste pacote para a **raiz** do repositório, mesclando as pastas `src/`, `public/` e `notebooks/`. Preserve os arquivos originais não incluídos no pacote.
3. Rode `npm ci`, `npm run build` e `npm test -- --watchAll=false`.
4. Publique a branch em um ambiente de prévia do Netlify, revise o comportamento e só depois faça o merge.

Importante: este pacote contém **arquivos de atualização**, não o repositório completo. O build não pode ser executado apenas com os arquivos do ZIP sem os arquivos originais e dependências.

## Apresentação do doutorado

A apresentação original enviada pelo autor está preservada em `public/apresentacoes/defesa-doutorado/`. Após a publicação, acesse `/apresentacoes/defesa-doutorado/index.html`. Ela é navegável pelas setas ou controles da própria apresentação. Os filtros **Teses** e **Apresentações** mostram o mesmo item, sem duplicação na opção **Todos**.

## Notebooks no Colab

Os dez notebooks do Laboratório de Ciência de Dados estão em `public/notebooks/laboratorio-ciencia-de-dados/`. Os links para o Colab estarão disponíveis após a publicação no GitHub:

https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/notebooks/exemplo-colab.ipynb#copy=true

Use URLs no formato:

`https://colab.research.google.com/github/USUARIO/REPOSITÓRIO/blob/BRANCH/CAMINHO/atividade.ipynb#copy=true`

Mantenha os notebooks públicos. Os estudantes podem executar e salvar a própria cópia no Google Drive. Bibliotecas adicionais podem precisar de instalação na sessão de Colab.

## Conteúdo e perfil

- Edite `src/academic/content.ts` para cadastrar disciplinas, materiais, pesquisas, extensão e publicações.
- O currículo Lattes foi verificado em página institucional: http://lattes.cnpq.br/0921878747570094.
- O link do **ORCID** permanece desativado até informar o ID correto. Não atribua um ID não confirmado.
- O currículo Résumé preserva o link do Google Drive anteriormente existente no site.
- A imagem `public/profile.jpg` é provisória. Substitua-a por sua fotografia definitiva. Atualize também `public/social-preview.jpg` quando necessário.
- O arquivo `public/index.html` remove os metadados antigos de Adam Alston e configura Open Graph para WhatsApp e redes sociais. A prévia do WhatsApp só muda **depois do deploy**; às vezes é necessário aguardar a atualização do cache.
- O domínio canônico e `homepage` estão configurados para `https://brunoperillo.com/`; confirme que seu serviço de hospedagem está configurado para esse domínio.

## Idioma

O seletor PT/EN alterna a navegação, descrições e elementos dinâmicos, salvando a preferência em `localStorage`. Títulos bibliográficos próprios não são traduzidos automaticamente.

## Direitos e créditos

O projeto original é derivado do template de Adam Alston; mantenha a licença e a atribuição do projeto original nos arquivos/documentação pertinentes. Alteramos apenas a apresentação pública e metadados pessoais.

## Layout e nacionalidades (revisão atual)

- Nome em tipografia grande e profissão logo abaixo, preservando o conceito da página inicial original.
- Fotografia provisória lateral, com recorte retangular discreto, sem máscara radial, vinheta, halo ou moldura. Seis links profissionais sob a foto.
- Na versão mobile, a foto passa para baixo do nome para manter boa leitura.
- Nenhuma referência à cidadania na página inicial.
- Na seção Sobre: apenas a lista simples das quatro nacionalidades, em PT/EN, sem texto sobre permissões de trabalho.
- **Atenção:** o botão Résumé continua apontando para o arquivo externo previamente existente no Google Drive. Esse arquivo não foi modificado; atualize as nacionalidades também no documento original, caso deseje disponibilizá-las no PDF.


## Organização de Ensino (revisão)
As disciplinas de **Computação em Nuvem**, **Mineração de Dados**, **Ciência de Dados** e **Engenharia Econômica** aparecem em *Disciplinas teóricas*. Já **Laboratório de Computação em Nuvem**, **Laboratório de Mineração de Dados** e **Laboratório de Ciência de Dados** têm páginas próprias na categoria *Aulas práticas e laboratórios*. Os arquivos práticos são cadastrados apenas no laboratório correspondente.

## Prévia revisada após feedback
A apresentação pessoal na página inicial não menciona nacionalidades nem direitos de trabalho. A foto temporária tem recorte editorial simples sem máscaras de borda. A arte de compartilhamento social não inclui fotografia 3x4. O site distingue explicitamente as disciplinas teóricas dos três laboratórios.


## Revisão v6 (22/11/2026)
- Efeito original de partículas (100, velocidade 2, ligações 75px, opacidade 0.9).
- Título geral de professor e pesquisador em Computação, PT/EN.
- Ensino agrupado por tema, teoria | laboratório com links separados.
- Biografia expandida com trajetória acadêmica e genealogia.
- O arquivo PREVIA-LOCAL.html tem implementação Canvas equivalente para pré-visualização independente; a aplicação React utiliza o tsParticles original.


## Versão 7: conteúdo acadêmico real
- ORCID: https://orcid.org/0000-0002-2930-2710
- Os 10 notebooks reais foram colocados em `public/notebooks/laboratorio-ciencia-de-dados/`.
- Os quatro PDFs fornecidos estão em `public/publicacoes/`.
- A configuração original completa de tsParticles foi restaurada em `src/appearance/options.ts`. A prévia independente carrega a MESMA biblioteca tsParticles 1.43.1 de CDN (requer internet); não utiliza o Canvas alternativo de v6.
- Os botões Colab pressupõem que o conteúdo seja publicado na branch main em brunoperillo/personal-website. Antes disso, baixar o ipynb é o acesso local.
- Os materiais ainda não foram publicados no GitHub ou hospedagem.


## Atualização v8
Nome completo na identidade. Pesquisa: 6 projetos coordenados e 16 participações. Extensão: 7 ações coordenadas e 23 participações. Identificação de estudantes apenas onde há registros nas imagens fornecidas. Apresentação Reveal.js em `public/apresentacoes/defesa-doutorado/index.html` (arquivo em preparação, não se afirma defesa realizada). Fontes locais não incluídas; substituídas por fontes de sistema.

## Versão 9
Listagens simplificadas: ano, título e nomes dos alunos quando informados; defesa de doutorado em Pesquisa com link para Reveal.js.
