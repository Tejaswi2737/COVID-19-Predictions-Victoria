import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import history from "./history";


import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Blogs from './components/Blogs';


class App extends Component {
  render() {

    return (
  
      <div className="App">
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path="/" render={() =><Dashboard/>} />
              <Route exact path="/Statistics" render={() =><Statistics/>} />
              <Route exact path="/Blogs" render={() =><Blogs/>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;