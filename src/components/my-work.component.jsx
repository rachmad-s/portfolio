/* eslint-disable operator-linebreak */
import React, { useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import logoVoffice from './../assets/logo-light-voffice.svg';
import maybankLogo from './../assets/maybank-logo.svg';
import moladinLogo from './../assets/logo-moladin.svg';

const onScroll = (e, sectionRef) => {
  const documentScroll = e.target.documentElement.scrollTop;
  const sectionElement = sectionRef.current;
  const sectionOffset = sectionElement.offsetTop;
  const endEffect = sectionElement.offsetTop + 2500;
  const offsetScrolling = documentScroll - sectionOffset;

  if (documentScroll >= sectionOffset && documentScroll <= endEffect) {
    const percentage = `-${(offsetScrolling / 2500) * 100 * 2}%`;
    sectionElement.querySelector('.scroll-container').style.position = 'fixed';
    sectionElement.querySelector('.scroll-container').style.top = '0';
    sectionElement.querySelector('.scroll-container').style.width = '100%';
    sectionElement.querySelector('.scroll-container').style.minHeight = '100vh';
    sectionElement.querySelector('.scroll-container').style.zIndex = '2';
    sectionElement.querySelector(
      '.item-container'
    ).style.transform = `translate(${percentage}, 0)`;
    sectionElement.querySelector('.item-container').style.transition =
      '.1s ease';
    sectionElement.style.paddingTop = `${offsetScrolling}px`;
    sectionElement.style.height = `${2500 - offsetScrolling}px`;
  } else {
    sectionElement.querySelector('.scroll-container').style.position = 'unset';
    sectionElement.querySelector('.scroll-container').style.top = '0';
    sectionElement.querySelector('.scroll-container').style.maxHeight = '100vh';
    sectionElement.querySelector('.scroll-container').style.zIndex = 'unset';
  }
};
const careers = [
  {
    companyName: 'vOffice Indonesia',
    startedYear: '2019',
    link: 'https://voffice.co.id/',
    period: 'Mar 2019 - Mar 2021',
    countPeriod: '2 years',
    logo: logoVoffice,
    position: 'Full-Stack Developer',
    techStacks: [
      'ReactJs',
      'Laravel',
      'jQuery',
      'Bootstrap',
      'NodeJs',
      'MySQL'
    ],
    dailyTasks: [
      "Take responsibilities to create and maintain company or sister's company websites from UI Design, Web Development, Testing and Deployment",
      'Participate in meetings with Stakeholders to present work progress and websites traffic or discussion about new feature'
    ]
  },
  {
    companyName: 'Bank Maybank Indonesia',
    startedYear: '2021',
    link: 'https://maybank.co.id/',
    period: 'Mar 2021 - Feb 2022',
    countPeriod: '11 Months',
    logo: maybankLogo,
    position: 'IT - Front End Engineer',
    techStacks: ['ReactJs', 'jQuery', 'Bootstrap', 'Python'],
    dailyTasks: [
      'Participate in IT Team projects: Revamp The Enterprise Software for all Maybank Branches in Indonesia',
      'Do research about tech-stacks that will be used in Software Development. Several Technologies that used are Micro-frontend Framework, Redux, Socket.io, and many more'
    ]
  },
  {
    companyName: 'Moladin Digital Indonesia',
    startedYear: '2022',
    link: 'https://moladin.com/',
    period: 'Feb 2022 - Feb 2023',
    countPeriod: '1 year',
    logo: moladinLogo,
    position: 'Software Engineer II - Frontend',
    techStacks: ['ReactJs', 'NodeJs', 'PostgreSQL', 'single-spa framework'],
    dailyTasks: [
      'Work on developing new features for the CRM and B2C Web in Moladin',
      'Participate in Agile Methodology activities such as daily stand-ups and other team meetings to discuss progress, roadblocks, and priorities. Collaborate with team members to identify and solve any issues that arise.'
    ]
  }
];

export default function MyWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 568) {
      sectionRef.current.style.minHeight = `${
        sectionRef.current.offsetTop + 2000
      }px`;
      window.addEventListener('scroll', (e) => onScroll(e, sectionRef));
    }

    return () =>
      window.removeEventListener('scroll', (e) => onScroll(e, sectionRef));
  }, [sectionRef]);

  return (
    <section id="myWork" ref={sectionRef}>
      <div className="scroll-container">
        <h1 className="section-title text-center mb-2">Career Experience</h1>
        <div className="item-container-outer">
          <div className="item-container">
            {careers.map((career) => (
              <div
                className="item right"
                key={`career-${career.companyName.replace(' ', '-')}`}
              >
                <div className="company-logo">
                  <img src={career.logo} alt={`${career.companyName}-logo`} />
                  <div className="pulse" />
                  <div className="year">{career.startedYear}</div>
                </div>
                <div className="item-description">
                  <div className="item-description-body">
                    <a href={career.link} target="_blank" rel="noreferrer">
                      <h2>
                        {`${career.companyName} `}
                        <FiExternalLink size={24} />
                      </h2>
                    </a>
                    <p className="item-sub">{`${career.period} (${career.countPeriod})`}</p>

                    <ul>
                      {career.dailyTasks.map((task) => (
                        <li key={`${task}-task`}>{task}</li>
                      ))}
                    </ul>
                    <div className="item-description-footer">
                      <ul>
                        <li>
                          <strong>Position</strong>
                          {career.position}
                        </li>
                        <li>
                          <strong>Tech Stacks Related</strong>
                          {career.techStacks.join(', ')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
