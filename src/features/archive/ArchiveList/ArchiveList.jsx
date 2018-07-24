import React, { Component } from 'react';
import ArchiveListItem from './ArchiveListItem';
import InfiniteScroll from 'react-infinite-scroller';

class ArchiveList extends Component {
  render() {
    const { archives, getNextArchives, loading, moreArchives } = this.props;
    return (
      <div>
        {archives &&
          archives.length !== 0 && (
            <InfiniteScroll
              pageStart={0}
              loadMore={getNextArchives}
              hasMore={!loading && moreArchives}
              initialLoad={false}
            >
              {archives && archives.map(archive => <ArchiveListItem key={archive.id} archive={archive}/>)}
            </InfiniteScroll>
          )}
      </div>
    );
  }
}

export default ArchiveList;
