import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Bruno Monserrat Perillo',
    aria: 'My name is Bruno Monserrat Perillo',
  },
  title: {
    display: 'Data Scientist',
    aria: 'I am a data scientist',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/brunoperillo/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/brunoperillo/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1evY0Fe0KqA-870pXmwtPJQg3Su37T6l8/view',
    },
    {
      display: 'Email',
      aria: 'Send me an email -> bruno@brunoperillo.com',
      icon: <Email />,
      href: 'mailto:bruno@brunoperillo.com',
    },
  ],
};

export default config;
