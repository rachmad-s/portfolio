/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect } from 'react';
import { BsLinkedin, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import rect from './../assets/rect.svg';
import profile from './../assets/profile.png';

function onScroll(e, divRef) {
  const documentScroll = e.target.documentElement.scrollTop;
  const heightViewport = window.innerHeight;
  const el = divRef.current;
  const difference = el.offsetTop - (documentScroll + heightViewport);

  if (documentScroll + heightViewport >= el.offsetTop) {
    el.querySelector('.contact-container').style.top = `${difference}px`;
  }
}

export default function Contact() {
  const divRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', (e) => onScroll(e, divRef));
    return () =>
      window.removeEventListener('scroll', (e) => onScroll(e, divRef));
  }, [divRef]);

  return (
    <section id="contact" ref={divRef}>
      <div className="contact-container">
        <h2 className="text-center mb-7">
          Shall we disscuss about something great?
        </h2>
        <div className="contact-card">
          <img src={profile} width="80" alt="" />
          <h5>Rachmad Syaefullah</h5>
          <div className="d-flex justify-content-around">
            <a
              href="https://linkedin.com/in/rachmad-syaefullah"
              className="btn btn-light"
            >
              <BsLinkedin />
            </a>
            <a href="https://instagram.com/rahmad.sf" className="btn btn-light">
              <BsInstagram />
            </a>
            <a href="https://wa.me/6281386873830" className="btn btn-light">
              <BsWhatsapp />
            </a>
          </div>
        </div>
        <img src={rect} className="rect-1" />
        <img src={rect} className="rect-2" />
      </div>
    </section>
  );
}
