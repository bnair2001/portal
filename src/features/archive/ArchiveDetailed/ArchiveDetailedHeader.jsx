import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';


const archiveImageStyle = {
    filter: 'brightness(30%)'
};

const archiveImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const ArchiveDetailedHeader = ({archive, isHost}) => {
  let archiveDate;
  if(archive.date){
    archiveDate = archive.date.toDate();
  }
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={`/assets/categoryImages/${archive.category}.jpg`} fluid style={archiveImageStyle} />

        <Segment basic style={archiveImageTextStyle}>
        <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={archive.title}
                  style={{ color: 'white' }}
                />
                <p>{format(archiveDate, 'dddd Do MMMM')}</p>
                <p>
                  Hosted by <strong>{archive.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        

        {isHost && (
          <Button
            as={Link}
            to={`/manageArchive/${archive.id}`}
            color="orange"
          >
            Manage Archive
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default ArchiveDetailedHeader;
