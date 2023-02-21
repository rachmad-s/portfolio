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
          <p className="col-sm-7 mb-0">
            I am a highly motivated and result-oriented individual with a
            passion for Software Engineering. With
            {` ${yearExperience}`}
            + years of experience in Software Engineering including Front-end,
            Back-End, UI Design, and SEO. I have developed a strong skillset in
            various programming languages such as Python, Javascript, PHP,
            and Swift.
            <br />
            I am a fast learner, adaptable to change, and thrive in fast-paced
            environments.
            <br />
            <br />
            Overall, I am a driven and dedicated professional who is committed
            to achieving success both for myself and my team.
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
