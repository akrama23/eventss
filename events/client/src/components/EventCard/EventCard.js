import React, { Component } from 'react';

export default class EventCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.event.name}</h2>
        <img src={this.props.event.image } alt={this.props.event.name } className="event-pic" />
        <p>{this.props.event.content }</p>
        
        
      </div>
    )
  }
}