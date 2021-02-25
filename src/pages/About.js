import React from 'react';
import { PageTitle, AboutContent } from '../components';

const Strings = {
  Title: 'About',
};

const About = (props) => {
  return (
    <>
      <PageTitle>{Strings.Title}</PageTitle>
      <AboutContent />
    </>
  );
};

export default About;
