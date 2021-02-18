import React from 'react';
import './Card.css'


 const EventCard = ({event}) =>{
     //object deconstruction
let {name, image, content} = event  
    return (
      <div className = 'card-container'>
        <div className="card-title">   
            <h2>{name}</h2>
        </div>   

        <div className="card-image">
            <img src={ image } alt={name} className="event-pic" />
         </div>   
        <div className='card-content'>   
            <p>{ content }</p>
        </div>   
        <div className='btn'>
            <button>
                <a>
                Add Event
                </a> 
            </button>
        </div>
       
      </div>
    )
}
export default EventCard;
