import React from 'react';
import logoVoffice from '../assets/logo-light-voffice.svg';
import mockUpVoffice from '../assets/voffice-mockup.png';
import rect from '../assets/rect.svg';

export default function MyWork() {
  // console.log(Context);
  return (
    <section id="myWork">
      <div className="">
        <h1 className="section-title text-center mb-5">My Work</h1>
        <div className="item right mt-3">
          <div className="company-logo">
            <img src={logoVoffice} alt="voffice" width={100} />
            <div className="pulse" />
            <div className="year">2019</div>
          </div>
          <div className="item-description">
            <img src={mockUpVoffice} alt="voffice" />
            <div className="item-description-body">
              <h2>vOffice Indonesia</h2>
              <ul>
                <li>
                  Build vOffice Webisite and Content Management System ( CMS )
                </li>
                <li>
                  Build vOffice Webisite and Content Management System ( CMS )
                </li>
              </ul>
              <div className="item-description-footer">
                <ul>
                  <li>
                    <strong>Position</strong>
                    Full-stack Dev
                  </li>
                  <li>
                    <strong>Tech Stacks</strong>
                    Laravel, React, Bootstrap
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src={rect} className="rect" alt="voffice" />
          <img src={rect} className="rect rect-2" alt="voffice" />
        </div>
        <div className="item left mt-3">
          <div className="company-logo">
            <img src={logoVoffice} alt="voffice" width={100} />
            <div className="pulse" />
            <div className="year">2019</div>
          </div>
          <div className="item-description">
            <img src={mockUpVoffice} alt="voffice" />
            <div className="item-description-body">
              <h2>vOffice Indonesia</h2>
              <ul>
                <li>
                  Build vOffice Webisite and Content Management System ( CMS )
                </li>
                <li>
                  Build vOffice Webisite and Content Management System ( CMS )
                </li>
              </ul>
              <div className="item-description-footer">
                <ul>
                  <li>
                    <strong>Position</strong>
                    Full-stack Dev
                  </li>
                  <li>
                    <strong>Tech Stacks</strong>
                    Laravel, React, Bootstrap
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src={rect} className="rect" alt="voffice" />
          <img src={rect} className="rect rect-2" alt="voffice" />
        </div>
      </div>
    </section>
  );
}
