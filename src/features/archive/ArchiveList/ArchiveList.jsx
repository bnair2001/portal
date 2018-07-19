import React, { Component } from 'react';
import ArchiveListItem from './ArchiveListItem';

class ArchiveList extends Component {
  render() {
    const { archives, deleteArchive } = this.props;
    return (
      <div>
        {archives && archives.map(archive => (
          <ArchiveListItem
            key={archive.id}
            archive={archive}
            deleteArchive={deleteArchive}
          />
        ))}
      </div>
    );
  }
}

export default ArchiveList;
