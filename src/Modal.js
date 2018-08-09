import React from 'react';
import menu from './assets/menu.svg';
import { Link } from 'react-router-dom';

class Modal extends React.Component {

  state = {
  visible: false
  }

  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }

  render() {
    var visibility = "hide";

    if (this.state.visible) {
      visibility = "show";
      document.body.style.overflow = "hidden";
    } else if (!this.state.visible) {
      visibility = "hide";
      document.body.style.overflow = "scroll";
      document.body.style.overflowX = "hidden";
    }

    return (
      <div className="container-fluid px-0">
        <div className="row fixed-top d-xl-none d-flex justify-items-end">
          <div className="col">
            <img className="menu d-xl-none pt-4" alt="menu icon" src={menu} onClick={(event) => this.toggleMenu(event)}/>
          </div>
        </div>
        <div id="flyoutMenu"
        onClick={(event) => this.toggleMenu(event)}
        className={`${visibility} text-dark text-center row align-items-center no-gutters`}>
          <div className="col">
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/about'><h2>About</h2></Link>
            <h2><a href="#projects">Projects</a></h2>
            <h2><a href="#contact">Contact</a></h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
