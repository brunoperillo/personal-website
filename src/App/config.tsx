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
      href: 'https://drive.google.com/file/d/1NcLi97wAdb844n1Q_6qFmfL99WPEdgu6/view',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:bruno@perillo.xyz',
    },
  ],
};

export default config;
