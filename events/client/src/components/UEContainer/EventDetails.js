import React from 'react';



export default class EventDetails extends React.Component {

  render() {
    return (
      <div className="card">
        
        <div>
        <img src={this.props.event.image } alt={this.props.event.name } className="event-pic" />

        <h2>{this.props.event.name}</h2>
        <h2>{this.props.event.content}</h2>
        </div>
      </div>
    )
  }
}