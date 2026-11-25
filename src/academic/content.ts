/** Academic content registry. Add only public, verified links here. */
export type Lang = 'pt' | 'en';
export type Localized = { pt: string; en: string };
export type Resource = { kind: 'notebook' | 'slides' | 'reading' | 'exercise' | 'code'; title: Localized; detail?: Localized; url: string; demo?: boolean };
export type Course = { slug: string; title: Localized; detail: Localized; kind: 'theory' | 'laboratory'; topics: Localized[]; resources: Resource[] };
export type Publication = { title: string; year: number; type: 'paper' | 'conference' | 'talk' | 'thesis' | 'dissertation'; venue?: string; doi?: string; pdf?: string; slides?: string; video?: string };
export type Project = { title: Localized; description: Localized; url?: string; code: string; year: number; status: Localized; students: string[]; studentsNote?: Localized; role: 'coordinator' | 'participant' };
export const t = (value: Localized, lang: Lang) => value[lang];
export const profile = {
  name: 'Bruno Monserrat Perillo',
  title: {pt:'Professor e pesquisador em Computação',en:'Professor and Researcher in Computing'},
  biography: {
    pt:'Sou professor da Universidade Federal de Ciência e Inovação de Minas Gerais (UFCI-MG), na área de Sistemas de Informação, e doutorando em Engenharia da Informação pela Universidade Federal do ABC (UFABC).\n\nMinha formação reúne Geofísica (IAG-USP), Engenharia de Computação (UNIVESP), Pedagogia e mestrado em Engenharia Mineral (Poli-USP). Esse percurso multidisciplinar, que integra ciências da Terra, engenharia, computação e educação, orienta minha atuação no ensino e na pesquisa e minha maneira de utilizar a computação como ferramenta de investigação, análise e solução de problemas.\n\nAtuo no ensino de disciplinas relacionadas à Ciência de Dados, Mineração de Dados, Computação em Nuvem e Engenharia Econômica. Meus interesses de pesquisa incluem inteligência artificial, análise de dados, cientometria, humanidades digitais e aplicações computacionais em diferentes áreas do conhecimento.\n\nTambém me interesso pela história das famílias e pela genealogia, atividades que compartilham com a pesquisa científica o interesse pela investigação, pelas fontes documentais e pela reconstrução de trajetórias ao longo do tempo.',
    en:'I am a professor at the Federal University of Science and Innovation of Minas Gerais (UFCI-MG), working in Information Systems, and a doctoral candidate in Information Engineering at the Federal University of ABC (UFABC).\n\nMy academic background includes degrees in Geophysics (IAG-USP), Computer Engineering (UNIVESP) and Pedagogy, as well as a master’s degree in Mineral Engineering (Poli-USP). Bringing together Earth sciences, engineering, computing and education, this multidisciplinary path shapes my teaching, research and use of computing to investigate, analyze and solve problems.\n\nI teach Data Science, Data Mining, Cloud Computing, and Engineering Economics. My research interests include artificial intelligence, data analysis, scientometrics, digital humanities, and computational applications across different fields.\n\nI am also interested in family history and genealogy, pursuits that share with scientific research an attention to evidence, historical sources, and the reconstruction of lives over time.'
  },
  citizenships: {
    pt:'Brasileira · Italiana · Espanhola · Portuguesa',
    en:'Brazilian · Italian · Spanish · Portuguese'
  },
  email:'bruno@brunoperillo.com',
  socials: [
    {id:'github',label:'GitHub',url:'https://github.com/brunoperillo/'},
    {id:'linkedin',label:'LinkedIn',url:'https://www.linkedin.com/in/brunoperillo/'},
    {id:'mail',label:'Email',url:'mailto:bruno@brunoperillo.com'},
    {id:'lattes',label:'Lattes',url:'http://lattes.cnpq.br/0921878747570094'},
    {id:'orcid',label:'ORCID',url:'https://orcid.org/0000-0002-2930-2710'},
    {id:'resume',label:'Résumé',url:'https://drive.google.com/file/d/1evY0Fe0KqA-870pXmwtPJQg3Su37T6l8/view'}
  ]
};

/** Notebooks provided by the author, preserved as uploaded. */
const labScienceNotebooks: Resource[] = [
  {kind:'notebook',title:{pt:'Aula 1 · Método científico',en:'Lesson 1 · Scientific Method'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/01-metodo-cientifico.ipynb'},
  {kind:'notebook',title:{pt:'Aula 2 · Coleta de dados via API do IBGE',en:'Lesson 2 · Data Collection from the IBGE API'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/02-coleta-api-ibge.ipynb'},
  {kind:'notebook',title:{pt:'Aula 3 · Classificação: custos e limiares de decisão',en:'Lesson 3 · Classification: Costs and Decision Thresholds'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/03-classificacao-custos.ipynb'},
  {kind:'notebook',title:{pt:'Aula 4 · Ensembles: Random Forest e Gradient Boosting',en:'Lesson 4 · Ensembles: Random Forest and Gradient Boosting'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/04-ensembles.ipynb'},
  {kind:'notebook',title:{pt:'Aula 5 · Avaliação, validação cruzada e hiperparâmetros',en:'Lesson 5 · Model Evaluation, Cross-Validation and Hyperparameters'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/05-validacao-modelos.ipynb'},
  {kind:'notebook',title:{pt:'Aula 6 · Agrupamento: K-Means',en:'Lesson 6 · Clustering: K-Means'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/06-clustering-kmeans.ipynb'},
  {kind:'notebook',title:{pt:'Aula 7 · Redução de dimensionalidade: PCA',en:'Lesson 7 · Dimensionality Reduction: PCA'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/07-pca.ipynb'},
  {kind:'notebook',title:{pt:'Aula 8 · Interpretabilidade: SHAP e LIME',en:'Lesson 8 · Explainability: SHAP and LIME'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/08-shap-lime.ipynb'},
  {kind:'notebook',title:{pt:'Aula 9 · Detecção de anomalias I',en:'Lesson 9 · Anomaly Detection I'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/09-deteccao-anomalias-i.ipynb'},
  {kind:'notebook',title:{pt:'Aula 10 · Detecção de anomalias II',en:'Lesson 10 · Anomaly Detection II'},detail:{pt:'Abra no Colab ou baixe o notebook para execução local.',en:'Open in Colab or download the notebook for local use.'},url:'https://colab.research.google.com/github/brunoperillo/personal-website/blob/main/public/notebooks/laboratorio-ciencia-de-dados/10-deteccao-anomalias-ii.ipynb'},
];
export const courses: Course[] = [
  {
    slug:'computacao-em-nuvem',kind:'theory',
    title:{pt:'Computação em Nuvem',en:'Cloud Computing'},
    detail:{pt:'Modelos de serviço, virtualização, arquitetura, elasticidade, disponibilidade e segurança em nuvem.',en:'Service models, virtualization, architecture, elasticity, availability and cloud security.'},
    topics:[{pt:'Modelos de serviço',en:'Service models'},{pt:'Arquitetura',en:'Architecture'},{pt:'Segurança',en:'Security'}],resources:[]
  },
  {
    slug:'mineracao-de-dados',kind:'theory',
    title:{pt:'Mineração de Dados',en:'Data Mining'},
    detail:{pt:'KDD, pré-processamento, classificação, agrupamento, associação e avaliação de modelos.',en:'KDD, preprocessing, classification, clustering, association rules and model evaluation.'},
    topics:[{pt:'KDD',en:'KDD'},{pt:'Classificação',en:'Classification'},{pt:'Agrupamento',en:'Clustering'}],resources:[]
  },
  {
    slug:'ciencia-de-dados',kind:'theory',
    title:{pt:'Ciência de Dados',en:'Data Science'},
    detail:{pt:'Métodos e processos de ciência de dados, ETL, modelagem, visualização e comunicação de resultados.',en:'Data science processes and methods, ETL, modeling, visualization and communicating results.'},
    topics:[{pt:'CRISP-DM',en:'CRISP-DM'},{pt:'ETL',en:'ETL'},{pt:'Visualização',en:'Visualization'}],resources:[]
  },
  {
    slug:'engenharia-economica',kind:'theory',
    title:{pt:'Engenharia Econômica',en:'Engineering Economics'},
    detail:{pt:'Juros, amortização, VPL, TIR e avaliação de investimentos.',en:'Interest, loan amortization, NPV, IRR and investment appraisal.'},
    topics:[{pt:'Juros',en:'Interest'},{pt:'VPL',en:'NPV'},{pt:'TIR',en:'IRR'}],resources:[]
  },
  {
    slug:'laboratorio-computacao-em-nuvem',kind:'laboratory',
    title:{pt:'Laboratório de Computação em Nuvem',en:'Cloud Computing Laboratory'},
    detail:{pt:'Práticas com instâncias, armazenamento, redes virtuais, bancos de dados e monitoramento em nuvem.',en:'Hands-on work with instances, storage, virtual networks, databases and cloud monitoring.'},
    topics:[{pt:'EC2',en:'EC2'},{pt:'S3',en:'S3'},{pt:'VPC',en:'VPC'},{pt:'RDS',en:'RDS'}],resources:[]
  },
  {
    slug:'laboratorio-mineracao-de-dados',kind:'laboratory',
    title:{pt:'Laboratório de Mineração de Dados',en:'Data Mining Laboratory'},
    detail:{pt:'Atividades de preparação de dados, classificação, clustering, regras de associação e avaliação.',en:'Practical data preparation, classification, clustering, association rules and evaluation.'},
    topics:[{pt:'Python',en:'Python'},{pt:'Apriori',en:'Apriori'},{pt:'PCA',en:'PCA'}],resources:[]
  },
  {
    slug:'laboratorio-ciencia-de-dados',kind:'laboratory',
    title:{pt:'Laboratório de Ciência de Dados',en:'Data Science Laboratory'},
    detail:{pt:'Notebooks e exercícios de regressão, árvores, ensembles, validação e interpretabilidade.',en:'Notebooks and exercises on regression, decision trees, ensembles, validation and explainability.'},
    topics:[{pt:'Python',en:'Python'},{pt:'Regressão',en:'Regression'},{pt:'SHAP/LIME',en:'SHAP/LIME'}],resources:labScienceNotebooks
  }
];
export const doctoralDefense: Publication = { title:'Infraestruturas Científicas e Cientometria: estudos computacionais sobre a produção brasileira em Educação a Distância', year:2026, type:'talk', slides:'/apresentacoes/defesa-doutorado/index.html' };
export const publications: Publication[] = [
  {'title': 'Tectonic implications of the 1419 Ma Nova Guarita mafic intrusives paleomagnetic pole (Amazonian Craton) on the longevity of Nuna', 'year': 2012, 'type': 'paper', 'venue': 'Precambrian Research, 196–197, 1–22', 'doi': '10.1016/j.precamres.2011.10.022', 'pdf': '/publicacoes/bispo-santos-2012-precambrian.pdf'},
  {'title': 'Prediction of free air anomaly obtained by geophysical multivariate data in Amazonia: an approach to missing data imputation with Self-Organizing Maps', 'year': 2017, 'type': 'conference', 'venue': '15th International Congress of the Brazilian Geophysical Society (SBGf)', 'doi': '10.1190/sbgf2017-073', 'pdf': '/publicacoes/perillo-2017-free-air-anomaly-som.pdf'},
  {'title': 'Imputação e incremento de resolução espacial em dados geofísicos de bacias sedimentares onshore: abordagem a partir da técnica Self-Organizing Maps', 'year': 2019, 'type': 'dissertation', 'venue': 'Dissertação de mestrado, Escola Politécnica, Universidade de São Paulo', 'pdf': '/publicacoes/perillo-2019-dissertacao.pdf'},
  {'title': 'Reemergência da Sífilis Adquirida no Brasil entre 2019-2023: Análise Epidemiológica e Papel da Educação Sexual na Prevenção Comunitária', 'year': 2025, 'type': 'paper', 'venue': 'Brazilian Journal of Implantology and Health Sciences, 7(3), 439–454', 'doi': '10.36557/2674-8169.2025v7n3p439-454', 'pdf': '/publicacoes/teles-et-al-2025-sifilis-adquirida.pdf'},
];
export const research: Project[] = [
  {
    "title": {
      "pt": "Fundamentos Matemáticos das Arquiteturas de Inteligência Artificial: Uma Análise Histórico-Formal da Evolução das Redes Neurais Artificiais e dos Problemas de Otimização que Motivaram Cada Paradigma Arquitetural",
      "en": "Fundamentos Matemáticos das Arquiteturas de Inteligência Artificial: Uma Análise Histórico-Formal da Evolução das Redes Neurais Artificiais e dos Problemas de Otimização que Motivaram Cada Paradigma Arquitetural"
    },
    "description": {
      "pt": "Coordenação · 2026",
      "en": "Coordenação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Cadastro em andamento",
      "en": "Cadastro em andamento"
    },
    "students": [],
    "studentsNote": {
      "pt": "Não há alunos identificados nos registros fornecidos",
      "en": "Não há alunos identificados nos registros fornecidos"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Integração de Dados Geofísicos e Mapas Auto-organizáveis para Identificação de Domínios e Estimativa de Densidade",
      "en": "Integração de Dados Geofísicos e Mapas Auto-organizáveis para Identificação de Domínios e Estimativa de Densidade"
    },
    "description": {
      "pt": "Coordenação · PVC2367-2026",
      "en": "Coordenação · PVC2367-2026"
    },
    "code": "PVC2367-2026",
    "year": 2026,
    "status": {
      "pt": "Distribuição para avaliação",
      "en": "Distribuição para avaliação"
    },
    "students": [],
    "studentsNote": {
      "pt": "Planos aprovados, discentes ainda não definidos: Controle de Qualidade Geofísica e Interpretação de Domínios Físicos em Sondagens; Identificação de Domínios Geofísicos com Mapas Auto-organizáveis e Avaliação de Modelos Híbridos de Densidade",
      "en": "Planos aprovados, discentes ainda não definidos: Controle de Qualidade Geofísica e Interpretação de Domínios Físicos em Sondagens; Identificação de Domínios Geofísicos com Mapas Auto-organizáveis e Avaliação de Modelos Híbridos de Densidade"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Estimativa Espacial da Densidade de Materiais Geológicos por Aprendizado de Máquina e Quantificação de Incertezas",
      "en": "Estimativa Espacial da Densidade de Materiais Geológicos por Aprendizado de Máquina e Quantificação de Incertezas"
    },
    "description": {
      "pt": "Coordenação · PVC2388-2026",
      "en": "Coordenação · PVC2388-2026"
    },
    "code": "PVC2388-2026",
    "year": 2026,
    "status": {
      "pt": "Distribuição para avaliação",
      "en": "Distribuição para avaliação"
    },
    "students": [],
    "studentsNote": {
      "pt": "Planos aprovados, discentes ainda não definidos: Representatividade Espacial dos Dados Geofísicos e Modelos de Referência para Estimativa de Densidade; Predição Espacial da Densidade sem Perfilagem de Poço com Validação e Quantificação de Incertezas",
      "en": "Planos aprovados, discentes ainda não definidos: Representatividade Espacial dos Dados Geofísicos e Modelos de Referência para Estimativa de Densidade; Predição Espacial da Densidade sem Perfilagem de Poço com Validação e Quantificação de Incertezas"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Processamento Digital de Imagens: Implementação Computacional e Análise de Filtros Lineares e Não Lineares",
      "en": "Processamento Digital de Imagens: Implementação Computacional e Análise de Filtros Lineares e Não Lineares"
    },
    "description": {
      "pt": "Coordenação · PIC1520-2025",
      "en": "Coordenação · PIC1520-2025"
    },
    "code": "PIC1520-2025",
    "year": 2025,
    "status": {
      "pt": "Em execução",
      "en": "Em execução"
    },
    "students": [
      "Jéssica Martins Moreira",
      "Maria Eduarda Carvalho Reis"
    ],
    "studentsNote": {
      "pt": "Planos: Processamento Digital de Imagens; Fundamentos Matemáticos de Filtros Digitais e Análise de Parâmetros no Processamento de Imagens",
      "en": "Planos: Processamento Digital de Imagens; Fundamentos Matemáticos de Filtros Digitais e Análise de Parâmetros no Processamento de Imagens"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Desenvolvimento de um Dispositivo de Baixo Custo para Detecção de Metais Enterrados em Aplicações Geofísicas e Arqueológicas",
      "en": "Desenvolvimento de um Dispositivo de Baixo Custo para Detecção de Metais Enterrados em Aplicações Geofísicas e Arqueológicas"
    },
    "description": {
      "pt": "Coordenação · PIC1556-2025",
      "en": "Coordenação · PIC1556-2025"
    },
    "code": "PIC1556-2025",
    "year": 2025,
    "status": {
      "pt": "Em execução",
      "en": "Em execução"
    },
    "students": [
      "Aram Lara Resende Silva",
      "Ana Clara Alves Dias"
    ],
    "studentsNote": {
      "pt": "Planos: Desenvolvimento e Teste de Protótipo Educacional de Detector de Metais; Desenvolvimento de um Dispositivo de Baixo Custo para Detecção de Metais Enterrados",
      "en": "Planos: Desenvolvimento e Teste de Protótipo Educacional de Detector de Metais; Desenvolvimento de um Dispositivo de Baixo Custo para Detecção de Metais Enterrados"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Desenvolvimento de um Transcritor Automático Multilíngue para Documentos Históricos com Amazon Textract e AWS Comprehend",
      "en": "Desenvolvimento de um Transcritor Automático Multilíngue para Documentos Históricos com Amazon Textract e AWS Comprehend"
    },
    "description": {
      "pt": "Coordenação · PIC1682-2025",
      "en": "Coordenação · PIC1682-2025"
    },
    "code": "PIC1682-2025",
    "year": 2025,
    "status": {
      "pt": "Em execução",
      "en": "Em execução"
    },
    "students": [
      "Antonio Prado Horta",
      "Carla Lívia Haber"
    ],
    "studentsNote": {
      "pt": "Planos: Avaliação de Desempenho e Desenvolvimento de Interface Web para o Sistema de Transcrição Automática Multilíngue; Desenvolvimento de um Transcritor Automático Multilíngue para Documentos Históricos",
      "en": "Planos: Avaliação de Desempenho e Desenvolvimento de Interface Web para o Sistema de Transcrição Automática Multilíngue; Desenvolvimento de um Transcritor Automático Multilíngue para Documentos Históricos"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "GeoRareMG: Desenvolvimento de Dutos de Integração de Dados Espaciais (ETL) e Interface WebGIS para Monitoramento Ambiental da Mineração.",
      "en": "GeoRareMG: Desenvolvimento de Dutos de Integração de Dados Espaciais (ETL) e Interface WebGIS para Monitoramento Ambiental da Mineração."
    },
    "description": {
      "pt": "Participação · PVC1735-2026",
      "en": "Participação · PVC1735-2026"
    },
    "code": "PVC1735-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "GeoRareMG: Construção de Banco de Dados de Referência Geoespacial (Ground Truth) para Treinamento de Inteligência Artificial em Áreas de Mineração.",
      "en": "GeoRareMG: Construção de Banco de Dados de Referência Geoespacial (Ground Truth) para Treinamento de Inteligência Artificial em Áreas de Mineração."
    },
    "description": {
      "pt": "Participação · PVC1736-2026",
      "en": "Participação · PVC1736-2026"
    },
    "code": "PVC1736-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Detecção Inteligente e Georreferenciação: Uso de IA em smartphones para a pulverização de precisão no cafeeiro.",
      "en": "Detecção Inteligente e Georreferenciação: Uso de IA em smartphones para a pulverização de precisão no cafeeiro."
    },
    "description": {
      "pt": "Participação · PVC1779-2026",
      "en": "Participação · PVC1779-2026"
    },
    "code": "PVC1779-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Sistema Móvel Store and Forward Baseado em Inteligência Artificial para Mapeamento e Diagnóstico Offline de Fitopatologias na Cafeicultura.",
      "en": "Sistema Móvel Store and Forward Baseado em Inteligência Artificial para Mapeamento e Diagnóstico Offline de Fitopatologias na Cafeicultura."
    },
    "description": {
      "pt": "Participação · PVC1781-2026",
      "en": "Participação · PVC1781-2026"
    },
    "code": "PVC1781-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Sistema de Apoio à Decisão Orientado a Eventos para Manejo Inteligente de Irrigação Baseado em Fusão Multiescala e Aprendizado de Máquina",
      "en": "Sistema de Apoio à Decisão Orientado a Eventos para Manejo Inteligente de Irrigação Baseado em Fusão Multiescala e Aprendizado de Máquina"
    },
    "description": {
      "pt": "Participação · PVC2161-2026",
      "en": "Participação · PVC2161-2026"
    },
    "code": "PVC2161-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Engenharia de Dados e Predição Supervisionada por Vetores e Boosting Categórico",
      "en": "Engenharia de Dados e Predição Supervisionada por Vetores e Boosting Categórico"
    },
    "description": {
      "pt": "Participação · PVC2164-2026",
      "en": "Participação · PVC2164-2026"
    },
    "code": "PVC2164-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Engenharia de Dados e Predição Supervisionada Baseada em Árvores e Penalização",
      "en": "Engenharia de Dados e Predição Supervisionada Baseada em Árvores e Penalização"
    },
    "description": {
      "pt": "Participação · PVC2172-2026",
      "en": "Participação · PVC2172-2026"
    },
    "code": "PVC2172-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Sistema de Apoio à Decisão Baseado em Integração de Variáveis Micrometeorológicas e Umidade do Solo via IoT e Inteligência Artificial para Alerta Fitossanitário Preditivo na Cafeicultura",
      "en": "Sistema de Apoio à Decisão Baseado em Integração de Variáveis Micrometeorológicas e Umidade do Solo via IoT e Inteligência Artificial para Alerta Fitossanitário Preditivo na Cafeicultura"
    },
    "description": {
      "pt": "Participação · PVC2184-2026",
      "en": "Participação · PVC2184-2026"
    },
    "code": "PVC2184-2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "SIAP-Geada: Sistema Inteligente de Alerta Preditivo de Geadas",
      "en": "SIAP-Geada: Sistema Inteligente de Alerta Preditivo de Geadas"
    },
    "description": {
      "pt": "Participação · PVC1461-2025",
      "en": "Participação · PVC1461-2025"
    },
    "code": "PVC1461-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "PhytoClima: Suporte à Decisão no Manejo de Doenças do Cafeeiro Arábica com Base em Dados Climáticos",
      "en": "PhytoClima: Suporte à Decisão no Manejo de Doenças do Cafeeiro Arábica com Base em Dados Climáticos"
    },
    "description": {
      "pt": "Participação · PVC1463-2025",
      "en": "Participação · PVC1463-2025"
    },
    "code": "PVC1463-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Desenvolvendo o Raciocínio Lógico e Quantitativo de Meninas por meio de Jogos de Tabuleiro.",
      "en": "Desenvolvendo o Raciocínio Lógico e Quantitativo de Meninas por meio de Jogos de Tabuleiro."
    },
    "description": {
      "pt": "Participação · PIC1490-2025",
      "en": "Participação · PIC1490-2025"
    },
    "code": "PIC1490-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Sistema de Previsão de Demanda e Otimização Logística para Cadeia de Terras Raras com Inteligência Artificial",
      "en": "Sistema de Previsão de Demanda e Otimização Logística para Cadeia de Terras Raras com Inteligência Artificial"
    },
    "description": {
      "pt": "Participação · PVC1546-2025",
      "en": "Participação · PVC1546-2025"
    },
    "code": "PVC1546-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Interface de Visualização e Dashboard Interativo para Monitoramento da Cadeia de Terras Raras",
      "en": "Interface de Visualização e Dashboard Interativo para Monitoramento da Cadeia de Terras Raras"
    },
    "description": {
      "pt": "Participação · PVC1553-2025",
      "en": "Participação · PVC1553-2025"
    },
    "code": "PVC1553-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Monitoramento Climático com Estação Meteorológica para Apoio à Cadeia de Suprimentos de Terras Raras",
      "en": "Monitoramento Climático com Estação Meteorológica para Apoio à Cadeia de Suprimentos de Terras Raras"
    },
    "description": {
      "pt": "Participação · PVC1557-2025",
      "en": "Participação · PVC1557-2025"
    },
    "code": "PVC1557-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Desenvolvimento e construção de uma bateria eletrônica de baixo custo com Arduino e Raspberry Pi",
      "en": "Desenvolvimento e construção de uma bateria eletrônica de baixo custo com Arduino e Raspberry Pi"
    },
    "description": {
      "pt": "Participação · PIC1564-2025",
      "en": "Participação · PIC1564-2025"
    },
    "code": "PIC1564-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Influências da Simetria Cristalográfica nas Propriedades Elétricas e Magnéticas em Ligas Contendo Terras Raras",
      "en": "Influências da Simetria Cristalográfica nas Propriedades Elétricas e Magnéticas em Ligas Contendo Terras Raras"
    },
    "description": {
      "pt": "Participação · PIC1673-2025",
      "en": "Participação · PIC1673-2025"
    },
    "code": "PIC1673-2025",
    "year": 2025,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  }
];
export const extension: Project[] = [
  {
    "title": {
      "pt": "Difusão Cultural",
      "en": "Difusão Cultural"
    },
    "description": {
      "pt": "Coordenação · 2027",
      "en": "Coordenação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Submetida",
      "en": "Submetida"
    },
    "students": [],
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "MINAS UAI TEAM: Equipe de Competição em Ciência de Dados e Inteligência Artificial",
      "en": "MINAS UAI TEAM: Equipe de Competição em Ciência de Dados e Inteligência Artificial"
    },
    "description": {
      "pt": "Coordenação · 2027",
      "en": "Coordenação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Aguardando avaliação (geral)",
      "en": "Aguardando avaliação (geral)"
    },
    "students": [],
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "OVNI: Observatório Varginhense de Negócios e Inovação",
      "en": "OVNI: Observatório Varginhense de Negócios e Inovação"
    },
    "description": {
      "pt": "Coordenação · 2026",
      "en": "Coordenação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Cadastro em andamento",
      "en": "Cadastro em andamento"
    },
    "students": [],
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "EduBox: Reaproveitamento de TV Boxes para Ambientes Educacionais",
      "en": "EduBox: Reaproveitamento de TV Boxes para Ambientes Educacionais"
    },
    "description": {
      "pt": "Coordenação · PJ126-2026",
      "en": "Coordenação · PJ126-2026"
    },
    "code": "PJ126-2026",
    "year": 2026,
    "status": {
      "pt": "Em execução",
      "en": "Em execução"
    },
    "students": [],
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Raízes Digitais: Cultivando a Inovação com IA Generativa na Cafeicultura Sul-Mineira",
      "en": "Raízes Digitais: Cultivando a Inovação com IA Generativa na Cafeicultura Sul-Mineira"
    },
    "description": {
      "pt": "Coordenação · PJ050-2026",
      "en": "Coordenação · PJ050-2026"
    },
    "code": "PJ050-2026",
    "year": 2026,
    "status": {
      "pt": "Em execução",
      "en": "Em execução"
    },
    "students": [
      "Antonio Prado Horta",
      "Rogério Otávio Filho",
      "Luiz Henrique Garcia Braga dos Reis"
    ],
    "studentsNote": {
      "pt": "Antonio e Rogério: bolsistas internos ativos. Luiz Henrique: voluntário, participação encerrada em 20/08/2026",
      "en": "Antonio e Rogério: bolsistas internos ativos. Luiz Henrique: voluntário, participação encerrada em 20/08/2026"
    },
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Difusão Cultural",
      "en": "Difusão Cultural"
    },
    "description": {
      "pt": "Coordenação · 2026",
      "en": "Coordenação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Aguardando aprovação dos departamentos",
      "en": "Aguardando aprovação dos departamentos"
    },
    "students": [],
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Debate na Escola: ciclo de diálogos para a formação integral",
      "en": "Debate na Escola: ciclo de diálogos para a formação integral"
    },
    "description": {
      "pt": "Coordenação · 2026",
      "en": "Coordenação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Aguardando aprovação dos departamentos",
      "en": "Aguardando aprovação dos departamentos"
    },
    "students": [],
    "role": "coordinator"
  },
  {
    "title": {
      "pt": "Da Sala ao Mercado: Fomento, Implantação e Consolidação da Empresa Júnior de Sistemas de Informação do Campus Varginha",
      "en": "Da Sala ao Mercado: Fomento, Implantação e Consolidação da Empresa Júnior de Sistemas de Informação do Campus Varginha"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "V SITE: Semana de Inovação, Tecnologia e Empreendedorismo",
      "en": "V SITE: Semana de Inovação, Tecnologia e Empreendedorismo"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "SINERGIA DIGITAL: POSSIBILIDADES E PRÁTICAS COM IA NA EDUCAÇÃO DA REDE PÚBLICA",
      "en": "SINERGIA DIGITAL: POSSIBILIDADES E PRÁTICAS COM IA NA EDUCAÇÃO DA REDE PÚBLICA"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Geração Empreendedora - 2027",
      "en": "Geração Empreendedora - 2027"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Fábrica de modelos e soluções de software validadas por IA",
      "en": "Fábrica de modelos e soluções de software validadas por IA"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Desenvolvendo Mentes, Construindo Códigos - 2027",
      "en": "Desenvolvendo Mentes, Construindo Códigos - 2027"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Paleia Digital: Curso de Iniciação Tecnológica - 2027",
      "en": "Paleia Digital: Curso de Iniciação Tecnológica - 2027"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Automação de um torrador de leite fluidizado utilizando algoritmo de detecção de objetos baseado em redes neurais através da identificação de tipos de torras utilizando Agtron - 2027",
      "en": "Automação de um torrador de leite fluidizado utilizando algoritmo de detecção de objetos baseado em redes neurais através da identificação de tipos de torras utilizando Agtron - 2027"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "InovaGeek: Culturas Criativas, Laboratório de Jogos Digitais e Empreendedorismo em Tecnologia e Arte",
      "en": "InovaGeek: Culturas Criativas, Laboratório de Jogos Digitais e Empreendedorismo em Tecnologia e Arte"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "CEFET Sharks: Equipe de Competição em Eventos de Empreendedorismo - 2027",
      "en": "CEFET Sharks: Equipe de Competição em Eventos de Empreendedorismo - 2027"
    },
    "description": {
      "pt": "Participação · 2027",
      "en": "Participação · 2027"
    },
    "code": "2027",
    "year": 2027,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Cri+AI+Agro: Reciclando Eletrônicos Apreendidos como Ativos para a Agricultura Familiar",
      "en": "Cri+AI+Agro: Reciclando Eletrônicos Apreendidos como Ativos para a Agricultura Familiar"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Geração Empreendedora - 2026",
      "en": "Geração Empreendedora - 2026"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Desenvolvendo Mentes, Construindo Códigos - 2026",
      "en": "Desenvolvendo Mentes, Construindo Códigos - 2026"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Paleia Digital: Curso de Iniciação Tecnológica - 2026",
      "en": "Paleia Digital: Curso de Iniciação Tecnológica - 2026"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "InovaGeek: Hub Criativo, Memória Cultural e GameDesign com Python",
      "en": "InovaGeek: Hub Criativo, Memória Cultural e GameDesign com Python"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "EDUCAÇÃO 5.0: POSSIBILIDADES E PRÁTICAS COM IA NA REDE PÚBLICA",
      "en": "EDUCAÇÃO 5.0: POSSIBILIDADES E PRÁTICAS COM IA NA REDE PÚBLICA"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "II SIMTEC: Simpósio de Tecnologia, Empreendedorismo e Inovação",
      "en": "II SIMTEC: Simpósio de Tecnologia, Empreendedorismo e Inovação"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Guilda do Software: Laboratório de Inovação e Desenvolvimento Ágil",
      "en": "Guilda do Software: Laboratório de Inovação e Desenvolvimento Ágil"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Jogos de Tabuleiro como Estratégia Lúdica para o Desenvolvimento de Habilidades Socioemocionais e Redução do Estresse em Adolescentes no CEFETMG - Campus Varginha",
      "en": "Jogos de Tabuleiro como Estratégia Lúdica para o Desenvolvimento de Habilidades Socioemocionais e Redução do Estresse em Adolescentes no CEFETMG - Campus Varginha"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Finanças em Ação: Educação Financeira e Contabilidade Básica para Jovens Promoverem Reflexões nas Famílias",
      "en": "Finanças em Ação: Educação Financeira e Contabilidade Básica para Jovens Promoverem Reflexões nas Famílias"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Plataforma Inteligente de Monitoramento e Análise do Transporte Público para Usuários, Operadores e Gestão Pública",
      "en": "Plataforma Inteligente de Monitoramento e Análise do Transporte Público para Usuários, Operadores e Gestão Pública"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Conexões: redes para a cidadania digital",
      "en": "Conexões: redes para a cidadania digital"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  },
  {
    "title": {
      "pt": "Negócios Inovadores com TICs - 2026-2027",
      "en": "Negócios Inovadores com TICs - 2026-2027"
    },
    "description": {
      "pt": "Participação · 2026",
      "en": "Participação · 2026"
    },
    "code": "2026",
    "year": 2026,
    "status": {
      "pt": "Participação registrada",
      "en": "Participação registrada"
    },
    "students": [],
    "role": "participant"
  }
];

