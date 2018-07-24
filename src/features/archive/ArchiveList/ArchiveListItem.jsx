import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import ArchiveListAttendee from './ArchiveListAttendee'
import format from 'date-fns/format'
import { objectToArray } from '../../../app/common/util/helpers'

class ArchiveListItem extends Component {
  render() {
    const {archive} = this.props
    return (
    <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={archive.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/archive/${archive.id}`}>{archive.title}</Item.Header>
                <Item.Description>
                  Hosted by <Link to={`/profile/${archive.hostUid}`}>{archive.hostedBy}</Link>
                </Item.Description>
                {archive.cancelled &&
                <Label style={{top: '-40px'}} ribbon='right' color='red' content='This archive has been cancelled'/>}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {format(archive.date.toDate(), 'dddd Do MMMM')} at {format(archive.date.toDate(), 'HH:mm')}|
            <Icon name="marker" /> {archive.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {archive.attendees && objectToArray(archive.attendees).map((attendee) => (
            <ArchiveListAttendee key={attendee.id} attendee={attendee}/>
          ))}

          </List>
        </Segment>
        <Segment clearing>
        <span>{archive.description}</span>
          <Button as={Link} to={`/archive/${archive.id}`} color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default ArchiveListItem;
