import React, { useState } from 'react';

export default function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [listMenuStatus, setListMenuStatus] = useState('inactive');

  const handleNavToggle = () => {
    const currentStatus = listMenuStatus;
    setListMenuStatus(() =>
      currentStatus === 'inactive' ? 'animating' : 'animating reverse'
    );
    setTimeout(() => {
      setListMenuStatus(() =>
        currentStatus === 'inactive' ? 'active' : 'inactive'
      );
    }, 500);
  };
  return (
    <>
      <nav className="navbar container" id="mainNavbar">
        <a className="navbar-brand" href="/">
          <img src="./assets/images/logo.svg" alt="Logo R Space" width="60" />
        </a>
        <button
          className="navbar-toggler-button navbar-toggler"
          type="button"
          aria-controls="navbarListMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className={`navbar-toggler-icon ${listMenuStatus}`} />
        </button>
      </nav>
      <div className={`navbar-list-menu ${listMenuStatus}`} id="navbarListMenu">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              My Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
