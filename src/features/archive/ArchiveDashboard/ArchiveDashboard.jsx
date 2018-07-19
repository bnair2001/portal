import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteArchive } from "../archiveActions";
import ArchiveList from "../ArchiveList/ArchiveList";

const mapState = state => ({
  archives: state.firestore.ordered.Archives
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
          <ArchiveList
            deleteArchive={this.handleDeleteArchive}
            archives={archives}
          />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "Archives" }])(ArchiveDashboard));
