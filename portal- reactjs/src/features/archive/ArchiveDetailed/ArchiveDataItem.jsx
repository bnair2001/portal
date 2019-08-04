import React, { Component } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import firebase from "../../../app/config/firebase";
class ArchiveDataItem extends Component {
  runDown(file) {
    var storage = firebase.storage();
    let storageRef = storage.ref();
    storageRef
      .child("images/"+file)
      .getDownloadURL()
      .then(function(url) {
        
        window.open(url, "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const { file } = this.props;
    return (
      <Table.Row>
        <Table.Cell>
          <Icon name="file" />
          <Button content={file} onClick={() => this.runDown(file)} />
        </Table.Cell>
      </Table.Row>
    );
  }
}
export default ArchiveDataItem;
