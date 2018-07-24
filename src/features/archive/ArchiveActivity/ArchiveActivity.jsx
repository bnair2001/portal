import React from 'react'
import { Header, Segment, Feed, Sticky } from 'semantic-ui-react'
import ArchiveActivityItem from './ArchiveActivityItem'


const ArchiveActivity = ({activities, contextRef}) => {
  return (
    <Sticky context={contextRef} offset={100}>
      <Header attached='top' content='Recent Activity'/>
      <Segment attached>
        <Feed>
          {activities && activities.map((activity) => (
            <ArchiveActivityItem key={activity.id} activity={activity}/>
          ))}
        </Feed>
      </Segment>
    </Sticky>
  )
}

export default ArchiveActivity
