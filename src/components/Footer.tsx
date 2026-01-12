import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from 'App/AppContext';

const F = {
  Container: styled.div<{ isMobile: boolean }>`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.75rem;
    padding-right: ${({ isMobile }) => (isMobile ? '1.5rem' : '1rem')};
    z-index: 1;
  `,
};

const Footer: React.FC = () => {
  const { isMobile } = useContext(AppContext);

  return <F.Container isMobile={isMobile} />;
};

export default Footer;
