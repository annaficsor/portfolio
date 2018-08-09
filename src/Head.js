import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import github from './assets/github.svg';
import email from './assets/email.svg';
import codewars from './assets/codewars.svg';
import linkedin from './assets/linkedin.svg';
import profile from './assets/profile.png';
import profile2 from './assets/profile@2x.png';
import profile3 from './assets/profile@3x.png';
import Fade from 'react-reveal/Fade';

class Head extends Component {


  render() {

    return (
      <div>
        <div className="container-fluid px-0">
          <div className="row headimage d-xl-block">
            <div className="col mr-5  d-none d-xl-block">
              <Fade top>
                <ul className="nav justify-content-end pt-3">
                  <li className="nav-item px-3 mx-3">
                  <Link
                  to='/about'
                  className="nav-link"
                  >About</Link>
                  </li>
                  <li className="nav-item px-3 mx-3">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item px-3 mx-3">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </Fade>
            </div>

            <div className="container pt-5">
              <div className="row">
                <Fade left>
                  <div className="col col-lg-8 headtxt">
                    <h1 className="">Hi, I’m Anna Ficsor.</h1>
                    <p className="headp">I am a front-end web developer and UI designer. <br />I build and design web applications.</p>
                    <div className="icons my-5 d-none d-sm-block">
                      <a target="_blank" href="https://github.com/annaficsor" rel="noopener noreferrer"><img src={github} className="mr-5 logos" alt="github logo"/></a>
                      <a target="_blank" href="https://www.linkedin.com/in/annaficsor" rel="noopener noreferrer"><img src={linkedin}className="mr-5 logos" alt="linkedin logo"/></a>
                      <a target="_blank" href="https://www.codewars.com/users/_annaficsor" rel="noopener noreferrer"><img src={codewars}className="mr-5 logos" alt="codewars logo"/></a>
                      <a href="mailto:ficsor.anna@gmail.com" rel="noopener noreferrer"><img src={email} className="logos" alt="email icon"/></a>
                    </div>
                    <Link
                    to='/about'
                    className="nav-link aboutme"
                    ><button>More about me</button></Link>
                  </div>
                </Fade>

                <Fade right>
                  <div className="col-lg-4 d-flex">
                    <img className="rounded-circle profile ml-auto align-self-center d-none d-lg-block"srcSet={`${profile} 1x, ${profile2} 2x, ${profile3} 3x`} src={profile3} alt="Anna" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Head;
