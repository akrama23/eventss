import React from 'react';
import UEContainer from '../UEContainer/UEContainer'

export default class HostProfile extends React.Component {

  state = {
    user_events: []
  }


  componentDidMount = () => {

    fetch("http://localhost:3000/api/v1/user_events")
      .then(res => res.json())
      .then(ueventData => this.setState({
        user_events: ueventData
      }))
      console.log(this.state.user_events)
    }
  render(){
    return( 
      <div id="ue_container">
          <h1>Host Profile</h1>
      {
      this.state.user_events.map((user_event)=> { 
      return <UEContainer user_event={user_event} key={user_event.id}/>
      })

    }
    </div>
      )
  }

}

  