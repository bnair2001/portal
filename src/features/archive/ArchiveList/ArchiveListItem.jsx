import React, { Component } from 'react';
import { Segment, Item, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

import format from 'date-fns/format'
class ArchiveListItem extends Component {
  render() {
    const {archive, deleteArchive} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={archive.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{archive.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{archive.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{format(archive.date.toDate(), 'dddd Do MMMM')} at {format(archive.date.toDate(), 'HH:mm')}
          </span>
        </Segment>
        
        <Segment clearing>
        <span>{archive.description}</span>
          <Button onClick={deleteArchive(archive.id)} as="a" color="red" floated="right" content="Delete" />
          <Button as={Link} to={`/archive/${archive.id}`} color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default ArchiveListItem;
