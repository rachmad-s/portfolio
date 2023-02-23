import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import CSS from './../assets/certificates/css.png';
import Py from './../assets/certificates/python.png';
import ReactC from './../assets/certificates/react.png';
import javascript2 from './../assets/certificates/javascript-2.png';

export default function Certification() {
  const certificates = [
    {
      name: 'CSS',
      from: 'HackerRank',
      description:
        'It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.',
      image: CSS,
      link: 'https://www.hackerrank.com/certificates/09921b9ed268',
      credentialId: '34DA6749CE5D'
    },
    {
      name: 'Python',
      from: 'HackerRank',
      description:
        'It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes',
      image: Py,
      link: 'https://www.hackerrank.com/certificates/195be9bba8d6',
      credentialId: '34DA6749CE5D'
    },
    {
      name: 'React',
      from: 'HackerRank',
      description:
        'It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.',
      image: ReactC,
      link: 'https://www.hackerrank.com/certificates/5d81b00a0cec',
      credentialId: '34DA6749CE5D'
    },
    {
      name: 'Javascript (Intermediate)',
      from: 'HackerRank',
      description:
        'It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.',
      image: javascript2,
      link: 'https://www.hackerrank.com/certificates/ea2ad93ddda3',
      credentialId: '34DA6749CE5D'
    }
  ];
  return (
    <section id="certification">
      <h1 className="section-title text-center mb-7">Certifications</h1>
      <div className="container">
        <div className="row">
          {certificates.map((certificate) => (
            <div className="col-lg-6 certification-item" key={certificate.name}>
              <div
                className="d-flex align-items-lg-center align-items-start"
                style={{ gap: '16px' }}
              >
                <img
                  src={certificate.image}
                  width="250"
                  alt={`${certificate.name}-certification`}
                />
                <div>
                  <div>
                    <strong>
                      {`${certificate.name}
                      - 
                      ${certificate.from}`}
                    </strong>
                  </div>
                  <span className="font-weight-light opacity-light">
                    {certificate.description}
                  </span>
                  <a href={certificate.link} className="btn btn-primary">
                    Visit&nbsp;
                    <FiExternalLink size={14} className="fi-icon ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
