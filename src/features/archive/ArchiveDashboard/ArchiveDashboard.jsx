import React, { Component } from "react";
import { Grid, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { getArchivesForDashboard } from "../archiveActions";
import ArchiveList from "../ArchiveList/ArchiveList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ArchiveActivity from '../ArchiveActivity/ArchiveActivity';


const query = [
  {
    collection: 'activity_arc',
    orderBy: ['timestamp', 'desc'],
    limit: 5
  }
]
const mapState = state => ({
  archives: state.archives,
  loading: state.async.loading,
  activities: state.firestore.ordered.activity_arc
});

const actions = {
  getArchivesForDashboard
};

class ArchiveDashboard extends Component {
  state = {
    moreArchives: false,
    loadingInitial: true,
    loadedArchives: [],
    contextRef: {}
  };

  async componentDidMount() {
    let next = await this.props.getArchivesForDashboard();

    if (next && next.docs && next.docs.length >= 1) {
      this.setState({
        moreArchives: true,
        loadingInitial: false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.archives !== nextProps.archives) {
      this.setState({
        loadedArchives: [...this.state.loadedArchives, ...nextProps.archives]
      });
    }
  }

  getNextArchives = async () => {
    const { archives } = this.props;
    let lastEvent = archives && archives[archives.length - 1];
    let next = await this.props.getArchivesForDashboard(lastEvent);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreArchives: false
      });
    }
  };
  handleContextRef = contextRef => this.setState({contextRef})
  render() {
    const { loading, activities } = this.props;
    const { moreArchives, loadedArchives } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent inverted={true} />;
    return (
      <Grid>
        <Grid.Column width={10}>
          <ArchiveList
            loading={loading}
            moreArchives={moreArchives}
            archives={loadedArchives}
            getNextArchives={this.getNextArchives}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <ArchiveActivity activities={activities} contextRef={this.state.contextRef} />
        </Grid.Column>

        <Grid.Column width={10}>
          <Loader active={loading} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect(query)(ArchiveDashboard));
