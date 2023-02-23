import React from 'react';
import AboutMe from './../../components/about-me';
import Header from './../../components/header.component';
import MyWork from './../../components/my-work.component';
import Navbar from './../../components/navbar.component';
import Certification from '../../components/certification.component';
import Projects from '../../components/projects.component';
import Contact from '../../components/contact.component';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
      <Projects />
      <Certification />
      <Contact />
    </>
  );
}
