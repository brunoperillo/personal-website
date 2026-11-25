import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactParticles from 'react-tsparticles';
import { AppContext } from 'App/AppContext';
import { options } from 'appearance';
const Backdrop = styled.div`
  position:fixed;inset:0;z-index:-1;overflow:hidden;
  background-color:${({theme})=>theme.background};
  transition:background-color .5s linear;
  canvas{display:block;}
`;
const Particles:React.FC =()=>{
  const {theme}=useContext(AppContext);
  return <Backdrop theme={theme} data-v2="particles" aria-label="Particles"><ReactParticles width="100vw" height="100vh" options={options}/></Backdrop>;
};
export default Particles;
