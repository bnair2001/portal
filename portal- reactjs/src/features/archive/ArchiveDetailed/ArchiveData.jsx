import React from 'react'
import { Table } from 'semantic-ui-react'
import ArchiveDataItem from "./ArchiveDataItem";
import { objectToArray } from "../../../app/common/util/helpers";
const ArchiveData = ({archive}) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>{archive.title}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {archive.files && objectToArray(archive.files).map((file,index) => (
            <ArchiveDataItem key={index} file={file}/>
          ))}
    </Table.Body>
  </Table>
)

export default ArchiveData;