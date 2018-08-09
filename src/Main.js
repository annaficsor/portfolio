import React, { Component } from 'react';
import Modal from './Modal';
import Footer from './Footer';
import Projects from './Projects';
import arrow from './assets/arrow-down.svg';
import Head from './Head';

class Main extends Component {


  render() {

    return (
      <div>
        <Head/>
        <Modal/>
        <div className="row text-center">
          <div className="col-12 mt-5">
            <img alt="" className="mt-5 arrow" src={arrow}/>
          </div>
        </div>
        <Projects/>
        <Footer/>
      </div>

    )
  }
}

export default Main;
