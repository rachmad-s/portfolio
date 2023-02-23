/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export default function AboutMe() {
  const yearExperience = new Date().getFullYear() - 2019;
  return (
    <section id="aboutMe" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: '2rem' }}
        >
          <h1 className="section-title text-right col-sm-3">About Me</h1>
          <p className="col-sm-7 mb-0 font-weight-light">
            I am a Software Engineer with
            {` ${yearExperience}`}+ years of experience in several fields
            including
            <strong>
              &nbsp; Front-end dev, Back-End dev, UI Design, and Mobile App Dev.
              &nbsp;
            </strong>
            I have developed a strong skillset in various programming languages
            such as <strong>Javascript, Python, PHP, and Swift. &nbsp;</strong>
            <br />
            But not only limited to above skills, I would very excited if I need
            to explore & learn new skills in future projects.
            <br />
            <br />
            My working-style? &nbsp;Sure! I am a type of guy that very excited
            about learn & explore new things. I am a quick learner, adaptable,
            result-oriented, objective, and highly interested in designing
            something
          </p>
        </div>
      </div>
      <ShapeDivider />
    </section>
  );
}

function ShapeDivider() {
  return (
    <div className="custom-shape-divider-bottom-1634316808 bg-darker shape-2">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        />
      </svg>
    </div>
  );
}
