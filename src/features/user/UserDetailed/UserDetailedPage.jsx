import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux'
import UserDetailedHeader from './UserDetailedHeader'
import UserDetailedDescription from './UserDetailedDescription'
import UserDetailedPhotos from './UserDetailedPhotos'
import UserDetailedSidebar from './UserDetailedSidebar'
import UserDetailedEvents from './UserDetailedEvents'
import UserDetailedArchives from './UserDetailedArchives'
import { userDetailedQuery } from '../userQueries'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { getUserEvents, followUser, unfollowUser, getUserArchives } from '../userActions'

const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile
  } else {
    profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    profile,
    userUid,
    events: state.events,
    archives: state.archives,
    eventsLoading: state.async.loading,
    archivesLoading: state.async.loading,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting,
    following: state.firestore.ordered.following
  }
}


const actions = {
  getUserEvents,
  followUser,
  unfollowUser,
  getUserArchives
}

class UserDetailedPage extends Component {

  async componentDidMount() {
    let events = await this.props.getUserEvents(this.props.userUid);
    console.log(events);
  }

  changeTab = (e, data) => {
    this.props.getUserEvents(this.props.userUid, data.activeIndex)
  }

  async componentDidMount() {
    let archives = await this.props.getUserArchives(this.props.userUid);
    console.log(archives);
  }

  changeTab = (e, data) => {
    this.props.getUserArchives(this.props.userUid, data.activeIndex)
  }


  render() {
    const {profile, photos, auth, match, requesting, events, eventsLoading, followUser, following, unfollowUser, archives, archivesLoading} = this.props;
    const isCurrentUser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a === true);
    const isFollowing = !isEmpty(following)

    if (loading) return <LoadingComponent inverted={true}/>
    return (
      <Grid>
        <UserDetailedHeader profile={profile}/>
        <UserDetailedDescription profile={profile}/>
        <UserDetailedSidebar unfollowUser={unfollowUser} isFollowing={isFollowing} profile={profile} followUser={followUser} isCurrentUser={isCurrentUser}/>
        {photos && photos.length > 0 &&
        <UserDetailedPhotos photos={photos}/>}
        <UserDetailedEvents changeTab={this.changeTab} events={events} eventsLoading={eventsLoading}/>
        <UserDetailedArchives changeTab={this.changeTab} archives={archives} archivesLoading={archivesLoading}/>
      </Grid>
    );
  }
}

export default compose(
  connect(mapState, actions),
  firestoreConnect((auth, userUid, match) => userDetailedQuery(auth, userUid, match)),
)(UserDetailedPage);
