import EventCard from '../EventCard/EventCard'

function OurEvents(props) {
    return( 
    <div id="event-options">
    {
    props.events.map((event)=> { 
    return <EventCard event={event}
    />
    })

  }
  </div>
    )

}





  export default OurEvents;


  
  