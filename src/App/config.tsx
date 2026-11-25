import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';
const config:Config={
  name:{display:'Bruno Monserrat Perillo',aria:'Bruno Monserrat Perillo'},
  title:{display:'Professor da UFCIMG | Data Scientist',aria:'Professor da UFCIMG | Data Scientist'},
  buttons:[
    {display:'GitHub',aria:'GitHub Bruno Perillo',icon:<GitHub/>,href:'https://github.com/brunoperillo/'},
    {display:'LinkedIn',aria:'LinkedIn Bruno Perillo',icon:<LinkedIn/>,href:'https://www.linkedin.com/in/brunoperillo/'},
    {display:'Résumé',aria:'Currículo Bruno Perillo',icon:<Resume/>,href:'https://drive.google.com/file/d/1evY0Fe0KqA-870pXmwtPJQg3Su37T6l8/view'},
    {display:'E-mail',aria:'E-mail Bruno Perillo',icon:<Email/>,href:'mailto:bruno@brunoperillo.com'}
  ]
};
export default config;
