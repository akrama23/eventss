import React, { Component } from 'react';
import EventDetails from "./EventDetails"
import './UEContainer.css'


export default class UEContainer extends Component {



  render() {
    return (
    
      <div className="card-container">
        
          <div className="card-title">
              <h2>{this.props.user_event.location}</h2>
          </div>
          <div>
              <h2>{this.props.user_event.venue}</h2>
          </div>
          <div>
              <h2>{this.props.user_event.date}</h2>
          </div>
          <div>
              <h2>{this.props.user_event.time}</h2>
          </div>
          
        
        {/* <EventDetails event={this.props.user_event.event} />  */}
        
      </div>


          
    )
  }
}