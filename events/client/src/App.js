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

state = {
  events: [],
  user_events: []
}

componentDidMount () {

  fetch("http://localhost:3000/api/v1/events")
    .then(res => res.json())
    .then(eventData => this.setState({
      events: eventData
    }))
    console.log(this.state.events)
  }

  componentDidMount () {

    fetch("http://localhost:3000/api/v1/user_events")
      .then(res => res.json())
      .then(ueventData => this.setState({
        user_events: ueventData
      }))
      console.log(this.state.user_events)
    }


  

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
              <OurEvents events = {this.state.events}/>
            </Route>

            <Route path ="/HostProfile">
                <HostProfile user_events = {this.state.user_events}/>
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

