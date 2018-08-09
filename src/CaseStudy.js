import React from 'react';
import project from './data.json';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Projects from './Projects';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';


class CaseStudy extends React.Component {
  render() {
    const study = project[this.props.match.params.name];
    if (!study) {
        return null;
      }

    return (
      <div>
        <div className="container-fluid px-0 case">
          <div className="row">
            <Fade spy={study} appear delay={300}>
              <div className="col-7 d-none d-md-block">
                <svg viewBox="0 0 1267.13 458.27">
                  <g data-name="Layer 2">
                    <path d="M0 0v383.5l478.94 68a684 684 0 0 0 634.56-255.38L1267.13 0z" fill={study.color} data-name="Rome project"/>
                  </g>
                </svg>
              </div>
            </Fade>

            <div className="col-5 d-none d-xl-block">
              <Fade spy={study} appear>
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
              </Fade>
            </div>
          </div>
          <div className="row">
            <Fade spy={study} appear>
              <div className="col-6 casehome position-absolute d-none d-md-block">
                <Link
                to='/'
                className="nav-link pt-4 ml-5"
                >Anna Ficsor | Portfolio</Link>
              </div>
            </Fade>
          </div>

          <Modal/>

          <div className="row title align-items-center">
            <Fade bottom spy={study} appear>
              <div className="col title casename bodycopy text-center text-light my-5 px-5">
                <h1 className="">{study.name}</h1>
                <div className="mt-4 mb-4">
                  {study.heading.map((line, index) => (
                    <h3 key={index} className="display">{line}</h3>
                  ))}
                </div>
                {study.github && (
                  <div>
                  <a href={study.github} target="_blank" rel="noopener noreferrer"><button className="mb-3">View repo on GitHub &#62;&#62; </button></a>
                  <a href={study.site} target="_blank" rel="noopener noreferrer"><button className="mb-4">Visit website &#62;&#62; </button></a>
                  </div>
                )}
                <h4 className="casetitle">Project</h4>
                <p className="text-justify mx-auto">{study.projectbody}</p>
              </div>
            </Fade>
          </div>

          <div className="row title text-center">
            <Fade spy={study} appear>
              <div className="col px-0">
                {study.linkname ==="optics" && (
                  <div className="opticspic pt-4" style={{backgroundColor: study.color2}}>
                    <img className="caseimage text-center mx-auto"srcSet={`${study.desktop.first} 1x, ${study.desktop.second} 2x, ${study.desktop.third} 3x`} src={study.desktop.third} alt="desktop view"/>
                  </div>
                )}
                {study.linkname !=="optics" && (
                  <div className="desktoppic pt-4" style={{backgroundColor: study.color}}>
                    <img className="caseimage mx-auto"srcSet={`${study.desktop.first} 1x, ${study.desktop.second} 2x, ${study.desktop.third} 3x`} src={study.desktop.third} alt="desktop view"/>
                  </div>
                )}
              </div>
            </Fade>
          </div>
          <div className="row title align-items-center">
            <Fade bottom spy={study} appear delay={300}>
              <div className="col bodycopy text-center text-light my-5 px-5">
                {study.tasks && (
                  <div>
                    <h4 className="casetitle">{study.tasks}</h4>
                    {study.tasks === "Wildlife briefing" && (
                      <div>
                        {study.tasksbody.map((line, index) => (
                          <p key={index} className="text-justify mx-auto">{line}</p>
                        ))}
                      </div>
                    )}
                    {study.tasks !== "Wildlife briefing" && (
                      <div>
                        <ul className={`text-justify mx-auto`}>
                          {study.tasksbody.map((line, index) => (
                            <li key={index}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <h4 className="casetitle">{study.solution}</h4>
                    {study.solutionbody.map((line, index) => (
                      <p key={index} className="text-justify mx-auto list">{line}</p>
                    ))}
                  </div>
                )}
              </div>
            </Fade>
          </div>
          <Fade spy={study} appear>
            {study.linkname==="logos" && (
              <div className="row title text-center">
                <div className="col px-0">
                  <div className="desktoppic pt-4" style={{backgroundColor: study.color2}}>
                    <img className="caseimage mx-auto"srcSet={`${study.phone.first} 1x, ${study.phone.second} 2x, ${study.phone.third} 3x`} src={study.phone.third} alt="phone view"/>
                  </div>
                </div>
              </div>
            )}
          </Fade>
          <Fade spy={study} appear>
            {study.linkname!=="logos" && study.linkname!=="optics" && (
              <div className="row title text-left">
                <div className="col px-0">
                  <div className="desktoppic pt-4" style={{backgroundColor: study.color}}>
                    <img className="caseimage mx-auto"srcSet={`${study.phone.first} 1x, ${study.phone.second} 2x, ${study.phone.third} 3x`} src={study.phone.third} alt="phone view"/>
                  </div>
                </div>
              </div>
            )}
          </Fade>
          <Fade spy={study} appear>
            {study.linkname === "optics" && (
              <div className="row title align-items-center">
                <div className="col bodycopy text-center text-light mb-5 mt-0 px-5">
                  <h4 className="casetitle mt-0">{study.built}</h4>
                  {study.builthbody.map((line, index) => (
                    <p key={index} className="text-center mx-auto mb-2 list">{line}</p>
                  ))}
                </div>
              </div>
            )}
          </Fade>
          <Fade bottom spy={study} appear>
            {study.linkname !== "optics" && (
              <div className="row title align-items-center">
                <div className="col bodycopy text-center text-light my-5 px-5">
                  <h4 className="casetitle">{study.built}</h4>
                  {study.builthbody.map((line, index) => (
                    <p key={index} className="text-center mx-auto mb-2 list">{line}</p>
                  ))}
                </div>
              </div>
            )}
          </Fade>
        </div>

        <Projects/>
        <Footer/>

      </div>
    );
  }
}

export default CaseStudy;
