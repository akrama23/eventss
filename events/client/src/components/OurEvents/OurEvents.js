import React from "react";
import EventList from './EventList'
import Search from "../Search/Search"

export default class OurEvents extends React.Component{

  state = {
    events: [],
    search: ''
  }
  
  componentDidMount = () => {
  
    fetch("http://localhost:3000/api/v1/events")
      .then(res => res.json())
      .then(eventData => this.setState({
        events: eventData
      }))
  }

  theSearch = (search) => {
    this.setState({search})
  }
  

  displayEvent = () => this.state.events.filter(event=> event.name.toLowerCase().includes(this.state.search.toLowerCase()))
    
  
    render(){
      return( 
      <div id="event-options">
        <Search search={this.theSearch} />
        <EventList events={this.displayEvent()}/>
        
      </div>
      )
    }

}





 

  
  