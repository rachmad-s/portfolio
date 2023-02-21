import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import logoVoffice from './../assets/logo-light-voffice.svg';
import maybankLogo from './../assets/maybank-logo.svg';
import moladinLogo from './../assets/logo-moladin.svg';

export default function MyWork() {
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
        'Take responsibilities to create and maintain company or sister\'s company websites from UI Design, Web Development, Testing and Deployment',
        'Involve in Engineering Team to create and develop new feautures for CRM Apps',
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
        'Do research about tech-stacks that will be used in Software Development. Several Technologies that used are Micro-frontend Framework, Redux, Socket.io, and many more',
        'Perform daily tasks from Products Brainstorming, UI Design, Code Review, Unit Testing, and Deployment'
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
        'Participate in Agile Methodology activities such as daily stand-ups and other team meetings to discuss progress, roadblocks, and priorities. Collaborate with team members to identify and solve any issues that arise.',
        'Improve App Performance and Troubleshoot issues: Address any bugs or issues that arise during the development process, create RFCs document, and solve the following problems'
      ]
    }
  ];

  return (
    <section id="myWork">
      <div className="container">
        <h1 className="section-title text-center mb-5">Professional Career</h1>
        {careers.map((career) => (
          <div
            className="item right"
            key={`career-${career.companyName.replace(' ', '-')}`}
          >
            <div className="company-logo">
              <img
                src={career.logo}
                alt={`${career.companyName}-logo`}
                width={100}
              />
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
                    <li>{task}</li>
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
    </section>
  );
}
