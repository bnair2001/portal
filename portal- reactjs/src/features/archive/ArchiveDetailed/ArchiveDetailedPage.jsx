import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded, isEmpty, firebaseConnect } from 'react-redux-firebase';
import { compose } from "redux";
import ArchiveDetailedHeader from './ArchiveDetailedHeader';
import ArchiveDetailedInfo from './ArchiveDetailedInfo';
import ArchiveDetailedChat from './ArchiveDetailedChat';
import { objectToArray, createDataTree } from '../../../app/common/util/helpers';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { addArchiveComment } from "../archiveActions";
import ArchiveData from "./ArchiveData";
const mapState = (state, ownProps) => {
  
  let archive = {};

  if (state.firestore.ordered.Archives && state.firestore.ordered.Archives[0]) {
    archive = state.firestore.ordered.Archives[0];
    
  }

  return {
    archive,
    auth:state.firebase.auth,
    archiveChat:
      !isEmpty(state.firebase.data.archive_chat) &&
      objectToArray(state.firebase.data.archive_chat[ownProps.match.params.id])
  }
}
const actions = {
  
  addArchiveComment
};


class ArchiveDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`Archives/${match.params.id}`);
    
  }
  render(){
    const {archive,auth,addArchiveComment, archiveChat} = this.props;
    const isHost = archive.hostUid === auth.uid;
    const chatTree = !isEmpty(archiveChat) && createDataTree(archiveChat)
    if(!isLoaded(archive) || isEmpty(archive))return <LoadingComponent inverted={true} />
    return (
      <Grid>
      <Grid.Column width={12}>
        <ArchiveDetailedHeader archive={archive}  isHost={isHost}/>
        <ArchiveDetailedInfo archive={archive} />
        <ArchiveData archive={archive}/>
        <ArchiveDetailedChat archiveChat={chatTree} addArchiveComment={addArchiveComment} archiveId={archive.id} />
      </Grid.Column>
     
    </Grid>
    )
  }
}


export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => [`archive_chat/${props.match.params.id}`])
)(ArchiveDetailedPage);

