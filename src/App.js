import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import history from "./history";


import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Blogs from './components/Blogs';


class App extends Component {
  render() {

    return (
  
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/Statistics" component={Statistics} />
              <Route exact path="/Blogs" component={Blogs} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;