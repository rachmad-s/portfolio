import React from 'react';
import AboutMe from './../../components/about-me';
import Header from './../../components/header.component';
import MyWork from './../../components/my-work.component';
import Navbar from './../../components/navbar.component';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />

      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
    </>
  );
}
