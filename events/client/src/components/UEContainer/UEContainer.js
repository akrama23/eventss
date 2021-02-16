import React, { Component } from 'react';

export default class UEContainer extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.user_event.location}</h2>
        <h2>{this.props.user_event.venue}</h2>
        <h2>{this.props.user_event.date}</h2>
        <h2>{this.props.user_event.time}</h2>
        
      </div>
    )
  }
}