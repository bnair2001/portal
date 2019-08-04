import React from 'react';
import { Segment, Grid, Icon} from 'semantic-ui-react';
import format from 'date-fns/format';
const ArchiveDetailedInfo = ({archive}) => {
  let archiveDate;
  if(archive.date){
    archiveDate = archive.date.toDate();
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
            <span>{format(archiveDate, 'dddd Do MMMM')}</span>
          </Grid.Column>
        </Grid>
      </Segment>

    </Segment.Group>
  );
};

export default ArchiveDetailedInfo;
