import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase';
import ArchiveDetailedHeader from './ArchiveDetailedHeader';
import ArchiveDetailedInfo from './ArchiveDetailedInfo';
import ArchiveDetailedChat from './ArchiveDetailedChat';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const mapState = state => {
  
  let archive = {};

  if (state.firestore.ordered.Archives && state.firestore.ordered.Archives[0]) {
    archive = state.firestore.ordered.Archives[0];
    
  }

  return {
    archive,
    auth:state.firebase.auth
  }
}



class ArchiveDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`Archives/${match.params.id}`);
    
  }
  render(){
    const {archive,auth} = this.props;
    const isHost = archive.hostUid === auth.uid;
    if(!isLoaded(archive) || isEmpty(archive))return <LoadingComponent inverted={true} />
    return (
      <Grid>
      <Grid.Column width={12}>
        <ArchiveDetailedHeader archive={archive}  isHost={isHost}/>
        <ArchiveDetailedInfo archive={archive} />
        <ArchiveDetailedChat />
      </Grid.Column>
     
    </Grid>
    )
  }
}


export default  withFirestore(connect(mapState)(ArchiveDetailedPage));
