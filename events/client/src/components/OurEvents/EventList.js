import React, { Component } from 'react';
import EventCard from './EventCard'

const EventList =({events})=> {


    return (
      <div id="myDiv">
       {events.map(event => <EventCard event ={event} key={event.id}/>)}
        
        
        
      </div>
    )
  
}
export default EventList;
