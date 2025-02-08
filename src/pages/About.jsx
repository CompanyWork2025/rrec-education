import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/About/Hero.jsx';
import Intro from '../components/About/Intro.jsx';
import WhyChoose from '../components/About/WhyChoose.jsx';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Study in Russia for indian students</title>
        <meta name="description" content="Learn more about studying in Russia, the benefits of Russian education, and why you should choose us for your admission process." />
        <meta name="keywords" content="Study in Russia, Russian Universities, Admission Process, Education in Russia" />
        <meta name="author" content="RREC Education" />
      </Helmet>
      <Hero />
      <Intro />
      <WhyChoose />
    </>
  );
};

export default About;
