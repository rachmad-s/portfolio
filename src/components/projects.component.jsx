/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */

import React, { useRef, useEffect } from 'react';

import Projects1 from './../assets/projects/anydesign.png';
import Projects2 from './../assets/projects/gnd.png';
import Projects3 from './../assets/projects/handson.png';
import Projects4 from './../assets/projects/helloka-1.png';
import Projects5 from './../assets/projects/helloka-2.png';
import Projects6 from './../assets/projects/hellolive-1.png';
import Projects7 from './../assets/projects/huqum-1.png';
import Projects8 from './../assets/projects/izin.png';
import Projects9 from './../assets/projects/maybank-1.png';
import Projects10 from './../assets/projects/maybank-2.png';
import Projects11 from './../assets/projects/maybank-3.png';
import Projects12 from './../assets/projects/moladin.png';
import Projects13 from './../assets/projects/shopandbike.png';
import Projects14 from './../assets/projects/voffice-1.png';
import Projects15 from './../assets/projects/voffice-2.png';

function onScroll(e, divRef) {
  const documentScroll = e.target.documentElement.scrollTop;
  const el = divRef.current;
  const difference = documentScroll - (el.offsetTop - 600);
  if (
    documentScroll >= el.offsetTop - 700 &&
    documentScroll <= el.offsetTop - 300
  ) {
    const percentage = (difference / 300) * 100;
    el.style.transform = `translate(0, -${percentage}px)`;
    el.style.opacity =
      percentage / 100 > 0.99
        ? '1'
        : percentage / 100 < 0.1
        ? '0'
        : percentage / 100;
  }
  if (documentScroll < el.offsetTop - 700) el.style.opacity = '0';
}

function FadeInScroll(p) {
  const divRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', (e) => onScroll(e, divRef));
    return () =>
      window.removeEventListener('scroll', (e) => onScroll(e, divRef));
  }, [divRef]);
  return (
    <div ref={divRef}>
      {p.children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="project-section">
      <h1 className="section-title text-center mb-7">Projects Done</h1>
      <div className="container">
        <div className="project-layout" style={{ paddingTop: 50 }}>
          <FadeInScroll>
            <img src={Projects1} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects2} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects3} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects4} alt="" className="w-50" loading="lazy" />
            <img src={Projects9} alt="" className="w-50" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects5} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects6} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects10} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects7} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects8} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects11} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects13} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects14} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects12} alt="" loading="lazy" />
          </FadeInScroll>
          <FadeInScroll>
            <img src={Projects15} alt="" loading="lazy" />
          </FadeInScroll>
        </div>
      </div>
    </section>
  );
}
