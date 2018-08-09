import React from 'react';
import project from './data.json';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {
  render() {

    return (
      <div className="container mb-5">
        <Fade delay={200}>
          <div className="row title align-items-center">
            <div className="col text-center text-light my-5 px-5">
              <h1 id="projects">Projects</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {project.map((project, index) => (
              <div className="thum col-9 col-sm-6 col-lg-4 mb-4" key={index}>
                <img className="image" alt="" srcSet={`${project.thumb.first} 1x, ${project.thumb.second} 2x, ${project.thumb.third} 3x`} src={project.thumb.third} />
                <div className="overlay">
                  <div className="text">
                    <h1 className="pt-4">{project.name}</h1>
                    <p>{project.descript}</p>
                    <Link
                    to={`/${index}`}
                    ><button className="mb-2">Read the case study &#62;&#62; </button></Link>
                    {project.github && (
                      <div>
                      <a href={project.github} target="_blank"><button className="mb-2">View repo on GitHub &#62;&#62; </button></a>
                      <a href={project.site} target="_blank"><button className="mb-2">Visit website &#62;&#62; </button></a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Projects;
