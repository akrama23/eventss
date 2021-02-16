import React, { Component } from 'react';

export default class EventCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.events.name }</h2>
        <img src={this.props.events.image } alt={this.props.events.name } className="event-pic" />
        <p>{this.props.events.content }</p>
        
        
      </div>
    )
  }
}