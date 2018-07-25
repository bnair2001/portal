import React, { Component } from 'react';
import { Segment, Grid, Icon} from 'semantic-ui-react';
import ArchiveDetailedMap from './ArchiveDetailedMap'
import format from 'date-fns/format'

class ArchiveDetailedInfo extends Component {
  state = {
    showMap: false
  }

  componentWillUnmount() {
    this.setState({
      showMap: false
    })
  }

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }

  render() {
    const { archive } = this.props;
    let archiveDate;
    if (archive.date) {
      archiveDate = archive.date.toDate()
    }
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{archive.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{format(archiveDate, 'dddd Do MMM')} at {format(archiveDate, 'h:mm A')}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{archive.venue}</span>
            </Grid.Column>
            
          </Grid>
        </Segment>
        {this.state.showMap &&
        <ArchiveDetailedMap lat={archive.venueLatLng.lat} lng={archive.venueLatLng.lng}/>}
      </Segment.Group>
    );
  }
}

export default ArchiveDetailedInfo;
