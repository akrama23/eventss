import React from "react";
import About from "./components/About /About";
import Home from "./components/Home/Home";
import OurEvents from "./components/OurEvents/OurEvents";
import HostProfile from './components/HostProfile/HostProfile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component{


  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/OurEvents" > Our Events</Link>
              </li>
              <li>
                <Link to="/HostProfile" > Host Profile</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About/>
            </Route>

            <Route path="/OurEvents">
              <OurEvents />
            </Route>

            <Route path ="/HostProfile">
                <HostProfile />
                </Route> 

            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </div>
      </Router>
    );
          
  }

}

