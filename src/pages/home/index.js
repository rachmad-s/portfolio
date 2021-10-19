// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../../components/header.component';
import MyWork from '../../components/my-work.component';
import PinOnScroll from '../../components/pin-on-scroll.component';

export default function Home() {
  return (
    <>
      <Header />
      <PinOnScroll start="top" stopAfter="1000">
        <MyWork />
      </PinOnScroll>

      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
    </>
  );
}
