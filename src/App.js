import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';
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
        <Analytics id="UA-132812766-1">
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/:index/:project' component={CaseStudy}/>
            </Switch>
          </ScrollToTop>
        </Analytics>
      </div>
    );
  }
}

export default App;
