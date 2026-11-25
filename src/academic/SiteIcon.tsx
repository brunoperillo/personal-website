import React from 'react';

type Kind = 'book'|'search'|'heart'|'file'|'user'|'lattes'|'orcid'|'home'|'external'|'play'|'code'|'arrow'|'globe';
const paths: Record<Kind, React.ReactNode> = {
  book: <><path d="M12 7v14"/><path d="M3 18V4.8a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2V18h-5a4 4 0 0 0-4 3 4 4 0 0 0-4-3H3Z"/></>,
  search: <><path d="M9 3a6 6 0 0 1 6 6c0 5-6 10-6 10S3 14 3 9a6 6 0 0 1 6-6Z"/><path d="M9 6v6M6 9h6"/><path d="M14 16l6 5"/></>,
  heart: <><path d="M20.8 7.5c0 4.3-8.8 10.3-8.8 10.3S3.2 11.8 3.2 7.5a4.4 4.4 0 0 1 8.8 0 4.4 4.4 0 0 1 8.8 0Z"/><path d="M5 20h14"/></>,
  file: <><path d="M6 2h8l5 5v15H6Z"/><path d="M14 2v5h5M9 12h7M9 16h7M9 20h5"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 22c.4-5 3.2-7 8-7s7.6 2 8 7"/></>,
  lattes: <><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M8 7v10h8"/></>,
  orcid: <><circle cx="12" cy="12" r="10"/><path d="M8 10v7M8 7v.1M12 10v7M12 10h2a3.5 3.5 0 0 1 0 7h-2"/></>,
  home: <><path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-8h6v8"/></>,
  external: <><path d="M12 4h8v8M20 4l-9 9"/><path d="M20 14v6H4V4h6"/></>,
  play: <><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></>,
  code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4 10 20"/></>,
  arrow: <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-3 3.2-4.5 6.2-4.5 9s1.5 5.8 4.5 9M12 3c3 3.2 4.5 6.2 4.5 9S15 17.8 12 21"/></>,
};
const SiteIcon: React.FC<{name:Kind;size?:number;className?:string}> = ({name,size=24,className}) => (
  <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
);
export default SiteIcon;
