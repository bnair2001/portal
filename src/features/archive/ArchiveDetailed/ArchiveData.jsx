import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const ArchiveData = ({archive}) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>Archive Repository</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     
        <Table.Row>
        <Table.Cell>
          <Icon name='folder' /> test
        </Table.Cell>
        <Table.Cell>{archive.title}</Table.Cell>
        <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
      </Table.Row>
     
     
     
      
    </Table.Body>
  </Table>
)

export default ArchiveData;