import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import ArchiveDetailedHeader from './ArchiveDetailedHeader';
import ArchiveDetailedInfo from './ArchiveDetailedInfo';
import ArchiveDetailedChat from './ArchiveDetailedChat';
import ArchiveDetailedSidebar from './ArchiveDetailedSidebar';

const mapState = (state, ownProps) => {
  const archiveId = ownProps.match.params.id;

  let archive = {};

  if (archiveId && state.archives.length > 0) {
    archive = state.archives.filter(archive => archive.id === archiveId)[0]
  }

  return {
    archive
  }
}

const ArchiveDetailedPage = ({archive}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ArchiveDetailedHeader archive={archive} />
        <ArchiveDetailedInfo archive={archive} />
        <ArchiveDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ArchiveDetailedSidebar attendees={archive.attendees}/>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(ArchiveDetailedPage);
