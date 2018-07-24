import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

class ArchiveActivityItem extends Component {
  renderSummary = activity => {
    switch (activity.type) {
      case 'newArchive':
        return (
          <div>
            New Archive!{' '}
            <Feed.User as={Link} to={{ pathname: '/profile/' + activity.hostUid }}>
              {activity.hostedBy}
            </Feed.User>{' '}
            is hosting <Link to={{ pathname: '/archive/' + activity.archiveId }}>{activity.title}</Link>
          </div>
        );
      case 'cancelledArchive':
        return (
          <div>
            Archive Cancelled!{' '}
            <Feed.User as={Link} to={{ pathname: '/profile/' + activity.hostUid }}>
              {activity.hostedBy}
            </Feed.User>{' '}
            has cancelled <Link to={{ pathname: '/archive/' + activity.archiveId }}>{activity.title}</Link>
          </div>
        );
      default:
        return;
    }
  };

  render() {
    const { activity } = this.props;

    return (
      <Feed.Archive>
        <Feed.Label>
          <img src={activity.photoURL || '/assets/user.png'} alt="" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>{this.renderSummary(activity)}</Feed.Summary>
          <Feed.Meta>
            <Feed.Date>{distanceInWordsToNow(activity.timestamp.toDate())} ago</Feed.Date>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Archive>
    );
  }
}

export default ArchiveActivityItem;
