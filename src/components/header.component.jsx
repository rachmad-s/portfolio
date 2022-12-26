import React, { useEffect, useState } from 'react';

function MainHeaderContent({ textStyle }) {
  return (
    <div className="container">
      <div className="main-header-content">
        {/* <div className="main-header-pict" style={{ ...pictStyle }}>
          <img src="/assets/images/profile.png" alt="My Profile" />
        </div> */}
        <div className="main-header-text" style={{ ...textStyle }}>
          <h1 className="main-header-title font-playfair-display">
            Rachmad Syaefullah
          </h1>
          <h5 className="main-header-subtitle">
            Web Developer
            <span>|</span>
            Native iOS Apps Developer
            <span>|</span>
            Front-end Engineer
          </h5>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [translateObject, setTranslateObject] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(() => e.target.documentElement.scrollTop);
    };
    setTranslateObject(() => Math.min(0, scrollTop / 3 - 60));
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const styleTransform = scrollTop < 900 && {
    mainHeader: { transform: `translateY(${translateObject}px)` },
    picture: { transform: `translateY(${scrollTop / 4}px)` },
    title: {
      transform: `translateY(${scrollTop / 1.8}px)`,
      opacity: Math.min(1, ((200 / scrollTop) * 100) / 100)
    }
  };

  return (
    <div className="main-header" style={styleTransform?.mainHeader}>
      <MainHeaderContent
        pictStyle={styleTransform?.picture}
        textStyle={styleTransform?.title}
      />
      <div className="main-header-overlay" />
      <ShapeDivider />
    </div>
  );
}

function ShapeDivider() {
  return (
    <div className="custom-shape-divider-bottom-1634316808">
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
