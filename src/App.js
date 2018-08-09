import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './main.css';
import Main from './Main';
import About from './About';
import CaseStudy from './CaseStudy';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/:name' component={CaseStudy}/>
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
