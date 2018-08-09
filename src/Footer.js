import React, { Component } from 'react';
import github from './assets/github.svg';
import email from './assets/email.svg';
import codewars from './assets/codewars.svg';
import linkedin from './assets/linkedin.svg';
import Fade from 'react-reveal/Fade';

function Footer(props) {
  return (
    <div className="container-fluid px-0">
      <Fade>
        <div className="row foot text-center">
          <div className="col align-self-center">
            <h1 className="pb-5" id="contact">Contact me</h1>
            <div className="d-flex flex-row justify-content-center icons">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/annaficsor"><img src={github} className="ml-5 ico logos" alt="github logo"/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/annaficsor"><img src={linkedin} className="ml-5 ico logos" alt="linkedin logo"/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/_annaficsor"><img src={codewars} className="ml-5 ico logos" alt="codewars logo"/></a>
              <a href="mailto:ficsor.anna@gmail.com" rel="noopener noreferrer"><img src={email} className="ml-5 ico logos" alt="email icon"/></a>
            </div>
            <div className="row">
              <div className="col copy">
                <p>Copyright&copy; Anna Ficsor 2018</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Footer;
