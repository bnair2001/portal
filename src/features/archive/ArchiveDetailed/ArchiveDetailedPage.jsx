import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirestore, firebaseConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import ArchiveDetailedHeader from './ArchiveDetailedHeader';
import ArchiveDetailedInfo from './ArchiveDetailedInfo';
import ArchiveDetailedChat from './ArchiveDetailedChat';
import ArchiveDetailedSidebar from './ArchiveDetailedSidebar';
import { objectToArray, createDataTree } from '../../../app/common/util/helpers';
import { goingToArchive, cancelGoingToArchive } from '../../user/userActions';
import { addArchiveComment } from '../archiveActions';

const mapState = (state, ownProps) => {
  let archive = {};

  if (state.firestore.ordered.archives && state.firestore.ordered.archives[0]) {
    archive = state.firestore.ordered.archives[0];
  }

  return {
    archive,
    auth: state.firebase.auth,
    archiveChat:
      !isEmpty(state.firebase.data.archive_chat) &&
      objectToArray(state.firebase.data.archive_chat[ownProps.match.params.id])
  };
};

const actions = {
  goingToArchive,
  cancelGoingToArchive,
  addArchiveComment
};

class ArchiveDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`archive/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`archive/${match.params.id}`);
  }

  render() {
    const { archive, auth, goingToArchive, cancelGoingToArchive, addArchiveComment, archiveChat } = this.props;
    const attendees = archive && archive.attendees && objectToArray(archive.attendees);
    const isHost = archive.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    const chatTree = !isEmpty(archiveChat) && createDataTree(archiveChat)
    return (
      <Grid>
        <Grid.Column width={10}>
          <ArchiveDetailedHeader
            archive={archive}
            isHost={isHost}
            isGoing={isGoing}
            goingToArchive={goingToArchive}
            cancelGoingToArchive={cancelGoingToArchive}
          />
          <ArchiveDetailedInfo archive={archive} />
          <ArchiveDetailedChat archiveChat={chatTree} addArchiveComment={addArchiveComment} archiveId={archive.id} />
        </Grid.Column>
        <Grid.Column width={6}>
          <ArchiveDetailedSidebar attendees={attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => [`archive_chat/${props.match.params.id}`])
)(ArchiveDetailedPage);
