import React from 'react';
import { Card, Grid, Header, Image, Segment, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'

const panes = [
  {menuItem: 'All Archives', pane: {key: 'allArchives'}},
  {menuItem: 'Past Archives', pane: {key: 'pastArchives'}},
  {menuItem: 'Future Archives', pane: {key: 'futureArchives'}},
  {menuItem: 'Hosting', pane: {key: 'hosted'}},
]

const UserDeteiledArchives = ({ archives, archivesLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached loading={archivesLoading}>
        <Header icon="zip" content="Archives" />
        <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary: true, pointing: true}}/>
        <br/>

        <Card.Group itemsPerRow={5}>
          {archives &&
            archives.map(archive => (
              <Card as={Link} to={`/archive/${archive.id}`} key={archive.id}>
                <Image src={`/assets/categoryImages/${archive.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign="center">{archive.title}</Card.Header>
                  <Card.Meta textAlign="center">
                    <div>{format(archive.date.toDate(), 'DD MMM YYYY')}</div>
                    <div>{format(archive.date.toDate(), 'h:mm A')}</div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDeteiledArchives;
