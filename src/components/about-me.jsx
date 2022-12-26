import React from 'react';

export default function AboutMe() {
  return (
    <section id="aboutMe" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: '2rem' }}
        >
          <h1 className="section-title text-right col-sm-3">About Me</h1>
          <p className="col-sm-7 mb-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            officia magnam voluptates delectus ut eveniet soluta unde fuga
            deleniti cum voluptatibus odio optio obcaecati magni rem
            repudiandae, ipsum voluptatum quo?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            officia magnam voluptates delectus ut eveniet soluta unde fuga
            deleniti cum voluptatibus odio optio obcaecati magni rem
            repudiandae, ipsum voluptatum quo?
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
