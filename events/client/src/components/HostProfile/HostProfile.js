import React from 'react';
import UEContainer from '../UEContainer/UEContainer'

function HostProfile(props) {
    return( 
    <div id="ue_container">
        <h1>Host Profile</h1>
    {
    props.user_events.map((user_event)=> { 
    return <UEContainer user_event={user_event}
    />
    })

  }
  </div>
    )

}

  export default HostProfile;