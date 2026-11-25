import React, {useContext, useEffect, useState} from 'react';
import './App.scss';
import { AppContext, AppProvider } from './AppContext';
import { Particles, Toggle } from 'components';
import AcademicPortal from 'academic/AcademicPortal';
import { Lang } from 'academic/content';
import config from './config';

const SiteControls: React.FC<{lang:Lang;onLanguage:(next:Lang)=>void}> = ({lang,onLanguage}) => {
  const {theme}=useContext(AppContext);
  return <div className={`site-controls theme-${theme.key}`}>
    <Toggle/>
    <div className="language-toggle" role="group" aria-label={lang==='pt'?'Idioma do site':'Website language'}>
      <button type="button" lang="pt-BR" aria-pressed={lang==='pt'} className={lang==='pt'?'is-active':''} onClick={()=>onLanguage('pt')}>PT</button>
      <span aria-hidden="true">/</span>
      <button type="button" lang="en" aria-pressed={lang==='en'} className={lang==='en'?'is-active':''} onClick={()=>onLanguage('en')}>EN</button>
    </div>
  </div>;
};
const storedLanguage=():Lang=>{
  try{return localStorage.getItem('language')==='en'?'en':'pt';}catch{return 'pt';}
};
const App: React.FC = () => {
  const [ready,setReady]=useState(false);
  const [lang,setLang]=useState<Lang>(storedLanguage);
  useEffect(()=>{
    const oldTheme=localStorage.getItem('theme');
    if(oldTheme==='true')localStorage.setItem('theme','dark');
    if(oldTheme==='false')localStorage.setItem('theme','light');
    setReady(true);
  },[]);
  const changeLanguage=(next:Lang)=>{setLang(next);document.documentElement.lang=next==='pt'?'pt-BR':'en';try{localStorage.setItem('language',next);}catch{}};
  useEffect(()=>{document.documentElement.lang=lang==='pt'?'pt-BR':'en';},[lang]);
  return ready?<AppProvider config={config} isMobile={window.innerWidth<=820}>
    <div className="app"><SiteControls lang={lang} onLanguage={changeLanguage}/><AcademicPortal lang={lang}/><Particles/></div>
  </AppProvider>:null;
};
export default App;
