import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profile from './assets/profile_green.png';
import profile2 from './assets/profile_green@2x.png';
import profile3 from './assets/profile_green@3x.png';
import Footer from './Footer';
import Modal from './Modal';
import Projects from './Projects';
import Fade from 'react-reveal/Fade';

class About extends Component {


  render() {

    return (
      <div>
        <div className="container-fluid">
          <Fade>
            <div className="row">
              <div className="col-6 d-none d-md-block">
                <Link
                to='/'
                className="nav-link pt-4 ml-5"
                >Anna Ficsor | Portfolio</Link>
              </div>
              <div className="col-6 aboutnav d-none d-xl-block">
                <ul className="nav d-flex justify-content-end pt-3">
                  <li className="nav-item px-3 mx-1">
                    <Link
                    to='/about'
                    className="nav-link"
                    >About</Link>
                  </li>
                  <li className="nav-item px-3 mx-1">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item px-3 ml-1 mr-5">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>

          <Modal/>


          <div className="container">
            <div className="row align-items-center">
              <Fade delay={200}>
                <div className="col text-center">
                  <img className="rounded-circle profileabout"srcSet={`${profile} 1x, ${profile2} 2x, ${profile3} 3x`} alt="Anna" src={profile3} />
                </div>
              </Fade>
            </div>
            <div className="row title align-items-center">
              <div className="col text-center text-light my-5 px-5">
                <h1>Hello!</h1>
              </div>
            </div>
            <div className="row">
              <div className="col bodycopy">
                <Fade bottom>
                  <p className="mx-auto">My name is Anna Ficsor, and I am a (self-taught) <del>nanoninja</del> junior front-end web developer and UI designer.
                  In 2017 I have decided to make a career change and started to learn UI design and code. I have always been interested in the stuff of the internet, and how things work. I love learning and expanding my boundaries.</p>
                  <p className="mx-auto">In November I had been accepted into the Google Developer Challenge Scholarship, and after a 3-month challenge I was selected as one of the 6000 recipients (out of 200K initial  application) to receive a full 6-month Google Developer Nanodegree Scholarship.</p>
                  <p className="mx-auto">I have almost 10 years experience in the marketing industry, and in project management. I am seeking to use my background in problem-solving, planning, developing and overseeing marketing materials to create and maintain web and mobile applications.</p>
                </Fade>
              </div>
            </div>
            <div className="row title align-items-center">
              <div className="col text-center text-light my-5 px-5">
                <h1>Skills</h1>
              </div>
            </div>
            <Fade bottom>
              <div className="row justify-content-center">
                <div className="col skills d-md-flex justify-content-between align-self-center mx-0">
                  <div className="col text-center px-3">
                    <p className="lititle">Code</p>
                    <ul className="pl-0">
                      <li>JavaScript</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>React</li>
                      <li>Angular</li>
                      <li>jQuery</li>
                      <li>Git, GitHub</li>
                      <li>Bootstrap</li>
                      <li>SASS</li>
                    </ul>
                  </div>
                  <div className="col text-center px-3">
                  <p className="lititle">Design</p>
                    <ul className="pl-0">
                      <li>UI/UX Design</li>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>Wireframing</li>
                      <li>Sketching</li>
                      <li>Information architecture</li>
                      <li>Responsive design</li>
                    </ul>
                  </div>

                  <div className="col text-center px-3">
                  <p className="lititle">Management</p>
                    <ul className="pl-0">
                      <li>Development</li>
                      <li>Research</li>
                      <li>Accuracy</li>
                      <li>Logical thinking</li>
                      <li>Collaboration</li>
                      <li>Flexibility</li>
                      <li>Time management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <Projects/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default About;
