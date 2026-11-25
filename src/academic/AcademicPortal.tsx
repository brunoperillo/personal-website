import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'App/AppContext';
import { Email, GitHub, LinkedIn, Resume } from 'icons';
import SiteIcon from './SiteIcon';
import { courses, extension, profile, publications, research, doctoralDefense, Lang, t, Resource } from './content';
import './AcademicPortal.scss';

type Section = 'inicio'|'ensino'|'pesquisa'|'extensao'|'publicacoes'|'sobre';
const navigation: {id:Section;icon:'book'|'search'|'heart'|'file'|'user';pt:string;en:string}[] = [
  {id:'ensino',icon:'book',pt:'Ensino',en:'Teaching'},
  {id:'pesquisa',icon:'search',pt:'Pesquisa',en:'Research'},
  {id:'extensao',icon:'heart',pt:'Extensão',en:'Outreach'},
  {id:'publicacoes',icon:'file',pt:'Publicações',en:'Publications'},
  {id:'sobre',icon:'user',pt:'Sobre',en:'About'},
];
const phrase = (lang:Lang,pt:string,en:string) => lang==='pt'?pt:en;
const sectionFromHash = (): Section => {
  const value=window.location.hash.slice(1).split('/')[0];
  const known:Section[]=['inicio','ensino','pesquisa','extensao','publicacoes','sobre'];
  return known.includes(value as Section)?value as Section:'inicio';
};
const open = (url:string) => url.startsWith('mailto:')?undefined:'_blank';
const SocialIcon:React.FC<{id:string}> = ({id}) => {
  if(id==='github') return <GitHub/>;
  if(id==='linkedin') return <LinkedIn/>;
  if(id==='mail') return <Email/>;
  if(id==='resume') return <Resume/>;
  if(id==='lattes') return <SiteIcon name="lattes" size={28}/>;
  return <SiteIcon name="orcid" size={28}/>;
};
const SocialLinks:React.FC<{lang:Lang}> = ({lang}) => (
  <div className="social-buttons" aria-label={phrase(lang,'Perfis acadêmicos e contato','Academic profiles and contact')}>
    {profile.socials.map(item=>item.url ?
      <a className="social-button" href={item.url} target={open(item.url)} rel="noopener noreferrer" key={item.id} title={item.label} aria-label={item.label}>
        <span className="social-symbol"><SocialIcon id={item.id}/></span><span className="social-caption">{item.label}</span>
      </a> :
      <span className="social-button unconfigured" key={item.id} title={phrase(lang,'ORCID ainda não configurado','ORCID not configured yet')} aria-label={phrase(lang,'ORCID ainda não configurado','ORCID not configured yet')}>
        <span className="social-symbol"><SocialIcon id={item.id}/></span><span className="social-caption">ORCID *</span>
      </span>
    )}
  </div>
);
const notebookDownload=(url:string):string|null=>{
  const match=url.match(/\/blob\/main\/(public\/notebooks\/[^?#]+\.ipynb)(?:[?#]|$)/);
  return match ? '/'+match[1].replace(/^public\//,'') : null;
};
const ResourceLink:React.FC<{resource:Resource;lang:Lang}> = ({resource,lang}) => (

  <article className="resource-line">
    <div><span className="minor-label">{resource.kind==='notebook'?'JUPYTER / COLAB':resource.kind==='slides'?'APRESENTAÇÃO':resource.kind.toUpperCase()}{resource.demo?' · DEMO':''}</span>
      <h3>{t(resource.title,lang)}</h3>{resource.detail&&<p>{t(resource.detail,lang)}</p>}</div>
    <div className="resource-actions">
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="action-link">
        {resource.kind==='notebook'?phrase(lang,'Abrir no Colab','Open in Colab'):phrase(lang,'Acessar','Open')} <SiteIcon name="external" size={15}/>
      </a>
      {resource.kind==='notebook'&&notebookDownload(resource.url)&&
        <a href={notebookDownload(resource.url)!} className="action-link" download>
          {phrase(lang,'Baixar .ipynb','Download .ipynb')}
        </a>}
    </div>
  </article>
);
const AcademicPortal:React.FC<{lang:Lang}> = ({lang}) => {
  const {theme}=useContext(AppContext);
  const [section,setSection]=useState<Section>(sectionFromHash);
  const [selectedCourse,setSelectedCourse]=useState('');
  const [query,setQuery]=useState('');
  const [filter,setFilter]=useState('all');
  const [projectFilter,setProjectFilter]=useState<'all'|'coordinator'|'participant'>('all');
  useEffect(()=>{
    const sync=()=>{setProjectFilter('all');setFilter('all');setSection(sectionFromHash());setSelectedCourse(window.location.hash.split('/')[1]||'');setQuery('');window.scrollTo(0,0);};
    window.addEventListener('hashchange',sync);
    sync();return()=>window.removeEventListener('hashchange',sync);
  },[]);
  const nav=(target:Section,slug?:string)=>{const next=`#${target}${slug?'/'+slug:''}`;if(window.location.hash===next){setSection(target);setSelectedCourse(slug||'');window.scrollTo(0,0);}else window.location.hash=next;};
  const course=courses.find(item=>item.slug===selectedCourse);
  const matches=courses.filter(item=>`${t(item.title,lang)} ${t(item.detail,lang)} ${item.topics.map(x=>t(x,lang)).join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  const courseRows = [
    ['computacao-em-nuvem','laboratorio-computacao-em-nuvem'],
    ['mineracao-de-dados','laboratorio-mineracao-de-dados'],
    ['ciencia-de-dados','laboratorio-ciencia-de-dados'],
    ['engenharia-economica'],
  ];
  const pubs=[...publications, doctoralDefense].filter(item=>(filter==='all'||item.type===filter||(filter==='thesis'&&item.title===doctoralDefense.title))&&`${item.title} ${item.venue||''}`.toLowerCase().includes(query.toLowerCase()));
  return <div className={`academic-shell theme-${theme.key}`}>
    {section==='inicio' ? <main className="home-panel">
      <div className="hero-stage">
        <div className="hero-identity">
          <h1 className="hero-name" data-v2="name">Bruno Monserrat Perillo</h1>
          <p className="hero-role" data-v2="title">{t(profile.title,lang)}</p>
        </div>
        <aside className="hero-profile" aria-label={phrase(lang,'Fotografia, perfis e contatos','Portrait, profiles and contacts')}>
          <div className="profile-portrait"><img src="/profile.jpg" alt={phrase(lang,'Retrato de Bruno Monserrat Perillo','Portrait of Bruno Monserrat Perillo')}/></div>
          <SocialLinks lang={lang}/>
        </aside>
      </div>
      <div className="home-rule" aria-hidden="true"/>
      <nav className="main-icons" aria-label={phrase(lang,'Seções do site','Website sections')}>
        {navigation.map(item=><button key={item.id} onClick={()=>nav(item.id)} title={item[lang]}>
          <span className="main-icon"><SiteIcon name={item.icon} size={31}/></span>
          <span className="main-icon-label">{item[lang]}</span>
        </button>)}
      </nav>
    </main> : <>
      <header className="inner-header">
        <button className="brand-home" onClick={()=>nav('inicio')} aria-label={phrase(lang,'Página inicial','Home')} title={phrase(lang,'Página inicial','Home')}><SiteIcon name="home" size={19}/></button>
        <nav aria-label={phrase(lang,'Navegação principal','Primary navigation')}>
          {navigation.map(item=><button className={section===item.id?'current':''} onClick={()=>nav(item.id)} key={item.id}>{item[lang]}</button>)}
        </nav>
      </header>
      <main className="inner-main">
        {section==='ensino'&&<>
          <div className="section-heading"><span className="eyebrow">{phrase(lang,'RECURSOS EDUCACIONAIS','EDUCATIONAL RESOURCES')}</span><h1>{phrase(lang,'Ensino','Teaching')}</h1><p>{phrase(lang,'Slides, atividades, notebooks e referências por disciplina.','Slides, assignments, notebooks and references by course.')}</p></div>
          {course ? <section className="glass-panel">
            <button className="back-link" onClick={()=>nav('ensino')}>← {phrase(lang,'Todas as disciplinas','All courses')}</button>
            <span className="course-kind">{phrase(lang,'DISCIPLINA','COURSE')}</span>
            <h2>{t(course.title,lang)}</h2><p>{t(course.detail,lang)}</p>
            <div className="tag-list">{course.topics.map(item=><span key={item.pt}>{t(item,lang)}</span>)}</div>
            <h2 className="secondary-h2">{phrase(lang,'Materiais e atividades','Materials and assignments')}</h2>
            {course.resources.length?course.resources.map((r,i)=><ResourceLink resource={r} lang={lang} key={i}/>):<p className="empty-note">{phrase(lang,'Os materiais desta disciplina serão adicionados aqui.','Course materials will be added here.')}</p>}
          </section> : <section className="glass-panel">
            <label className="search-field">{phrase(lang,'Buscar disciplina','Search courses')} <input type="search" placeholder={phrase(lang,'Nome ou conteúdo','Name or topic')} value={query} onChange={e=>setQuery(e.target.value)}/></label>
            <div className="paired-course-list">{courseRows.map((slugs,index)=>{
              const row=slugs.map(slug=>matches.find(item=>item.slug===slug)).filter((item):item is typeof courses[number]=>Boolean(item));
              return row.length>0?<div className="paired-course-row" key={index}>
                {row.map((item,j)=><React.Fragment key={item.slug}>
                  {j>0&&<span className="course-separator" aria-hidden="true">|</span>}
                  <button className="paired-course-link" onClick={()=>nav('ensino',item.slug)}>{t(item.title,lang)}</button>
                </React.Fragment>)}
              </div>:null;
            })}</div>
            {!matches.length&&<p className="empty-note">{phrase(lang,'Nenhuma disciplina encontrada.','No course found.')}</p>}
          </section>}
        </>}
        {(section==='pesquisa'||section==='extensao')&&<>
          <div className="section-heading"><span className="eyebrow">{section==='pesquisa'?phrase(lang,'PESQUISA','RESEARCH'):phrase(lang,'EXTENSÃO','OUTREACH')}</span><h1>{section==='pesquisa'?phrase(lang,'Pesquisa','Research'):phrase(lang,'Extensão','Outreach')}</h1><p>{section==='pesquisa'?phrase(lang,'Projetos, métodos e resultados de pesquisa.','Research projects, methods and results.'):phrase(lang,'Conhecimento acadêmico em diálogo com a sociedade.','Academic knowledge in dialogue with society.')}</p></div>
          <section className="glass-panel project-section">
            <div className="filter-buttons" role="group" aria-label={phrase(lang,'Filtrar projetos','Filter projects')}>
              {(['all','coordinator','participant'] as const).map(role=>{
                const items=section==='pesquisa'?research:extension;
                const count=role==='all'?items.length:items.filter(item=>item.role===role).length;
                return <button key={role} className={projectFilter===role?'active':''} onClick={()=>setProjectFilter(role)} aria-pressed={projectFilter===role}>
                  {role==='all'?phrase(lang,'Todos','All'):role==='coordinator'?phrase(lang,'Projetos que coordeno','Projects I coordinate'):phrase(lang,'Projetos dos quais participo','Projects I participate in')} ({count})
                </button>;
              })}
            </div>
            {(section==='pesquisa'?research:extension).filter(item=>projectFilter==='all'||item.role===projectFilter).map((item,i)=><article className="resource-line project-entry" key={`${item.code}-${i}`}>
              <div><span className="minor-label">{item.year}</span>
                <h3>{item.code==='defesa'?<a href="/apresentacoes/defesa-doutorado/index.html" target="_blank" rel="noopener noreferrer">{t(item.title,lang)}</a>:t(item.title,lang)}</h3>
                {item.students.length>0&&<div className="project-students">{item.students.join(' · ')}</div>}
              </div>
              {item.code==='defesa'&&<a href="/apresentacoes/defesa-doutorado/index.html" className="action-link" target="_blank" rel="noopener noreferrer">{phrase(lang,'Apresentação','Presentation')} <SiteIcon name="external" size={15}/></a>}
            </article>)}
          </section>
        </>}
        {section==='publicacoes'&&<>
          <div className="section-heading"><span className="eyebrow">{phrase(lang,'PRODUÇÃO ACADÊMICA','ACADEMIC OUTPUT')}</span><h1>{phrase(lang,'Publicações e apresentações','Publications and presentations')}</h1><p>{phrase(lang,'Produção acadêmica.','Academic publications.')}</p></div>
          <section className="glass-panel">
            <div className="filter-buttons">{[
              ['all',phrase(lang,'Todos','All')],['paper',phrase(lang,'Artigos','Papers')],['conference',phrase(lang,'Congressos','Conferences')],['talk',phrase(lang,'Apresentações','Presentations')],['thesis',phrase(lang,'Teses','Theses')],['dissertation',phrase(lang,'Dissertações','Dissertations')]
            ].map(([id,label])=><button key={id} onClick={()=>setFilter(id)} className={filter===id?'active':''}>{label}</button>)}</div>
            {pubs.length ? pubs.map(item=><article className="resource-line" key={item.title}>
              <div><span className="minor-label">{item.year}</span><h3>{item.slides?<a href={item.slides} target="_blank" rel="noopener noreferrer">{item.title}</a>:item.pdf?<a href={item.pdf} target="_blank" rel="noopener noreferrer">{item.title}</a>:item.title}</h3>{item.venue&&item.title!==doctoralDefense.title&&<p>{item.venue}</p>}</div>
              <div className="publication-actions">
                {item.pdf&&item.title!==doctoralDefense.title&&<a className="action-link" href={item.pdf} target="_blank" rel="noopener noreferrer">PDF <SiteIcon name="external" size={15}/></a>}
                {item.doi&&<a className="action-link" href={`https://doi.org/${item.doi}`} target="_blank" rel="noopener noreferrer">DOI <SiteIcon name="external" size={15}/></a>}
                {item.slides&&<a className="action-link" href={item.slides} target="_blank" rel="noopener noreferrer">{phrase(lang,'Apresentação','Presentation')} <SiteIcon name="external" size={15}/></a>}
              </div>
            </article>):<p className="empty-note">{phrase(lang,'Nenhum item nesta categoria.','No items in this category.')}</p>}
          </section>
        </>}
        {section==='sobre'&&<>
          <div className="section-heading"><span className="eyebrow">{phrase(lang,'TRAJETÓRIA','BACKGROUND')}</span><h1>{phrase(lang,'Sobre mim','About me')}</h1></div>
          <section className="glass-panel about-panel">
            <div className="about-photo"><img src="/profile.jpg" alt="Bruno Monserrat Perillo"/></div>
            <div><h2>Bruno Monserrat Perillo</h2><p className="about-biography">{t(profile.biography,lang)}</p>
              <div className="academic-credentials">
                <h3>{phrase(lang,'Formação acadêmica','Academic education')}</h3>
                <dl className="credential-list">
                  <div><dt>{phrase(lang,'Doutorado em Engenharia da Informação','PhD in Information Engineering')}</dt><dd>UFABC · {phrase(lang,'Em andamento','In progress')}</dd></div>
                  <div><dt>{phrase(lang,'Mestrado em Engenharia Mineral','Master’s in Mineral Engineering')}</dt><dd>Poli-USP</dd></div>
                  <div><dt>{phrase(lang,'Graduação em Engenharia de Computação','Degree in Computer Engineering')}</dt><dd>UNIVESP</dd></div>
                  <div><dt>{phrase(lang,'Graduação em Geofísica','Degree in Geophysics')}</dt><dd>IAG-USP</dd></div>
                  <div><dt>{phrase(lang,'Graduação em Pedagogia','Degree in Pedagogy')}</dt></div>
                </dl>
                <h3>{phrase(lang,'Linguagens de programação','Programming languages')}</h3>
                <div className="language-skills"><span>Python</span><span>C</span></div>
              </div>
              <div className="citizenships-block">
                <span className="eyebrow">{phrase(lang,'NACIONALIDADES','CITIZENSHIPS')}</span>
                <p className="citizenships-values">{t(profile.citizenships,lang)}</p>
              </div>
              <h3>{phrase(lang,'Perfis e contato','Profiles and contact')}</h3>
              <SocialLinks lang={lang}/>
            </div>
          </section>
        </>}
      </main><footer className="academic-footer">© {new Date().getFullYear()} Bruno Monserrat Perillo · {phrase(lang,'Ensino, pesquisa e extensão','Teaching, research and outreach')}</footer>
    </>}
  </div>;
};
export default AcademicPortal;
