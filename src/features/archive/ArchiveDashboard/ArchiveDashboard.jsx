import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteArchive } from '../archiveActions';
import ArchiveList from '../ArchiveList/ArchiveList';

const mapState = state => ({
  archives: state.archives
});

const actions = {
  deleteArchive
};

class ArchiveDashboard extends Component {
  handleDeleteArchive = ArchiveId => () => {
    this.props.deleteArchive(ArchiveId);
  };

  render() {
    const { archives } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <ArchiveList deleteArchive={this.handleDeleteArchive} Archives={Archives} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(mapState, actions)(ArchiveDashboard);
