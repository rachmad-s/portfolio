import React from 'react';
import AboutMe from './../../components/about-me';
import Header from './../../components/header.component';
import MyWork from './../../components/my-work.component';
import Navbar from './../../components/navbar.component';
import Certification from '../../components/certification.component';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
      <Certification />

      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <p style={{ textAlign: 'center' }}>
        More sections are still in progress... ;)
      </p>
      <h1>&nbsp;</h1>
    </>
  );
}
