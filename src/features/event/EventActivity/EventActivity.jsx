import React from 'react'
import { Header, Segment, Sticky } from 'semantic-ui-react'

const EventActivity = () => {
  return (
    <Sticky offset={100}>
      <Header attached='top' content='Recent Activity'/>
      <Segment attached>
        <p>Recent archives</p>
      </Segment>
    </Sticky>
  )
}

export default EventActivity
