import React, { Component } from 'react';
import { Segment, Header, Comment } from 'semantic-ui-react';
import ArchiveDetailedChatForm from './ArchiveDetailedChatForm';
import { Link } from 'react-router-dom';
import distanceInWords from 'date-fns/distance_in_words';

class ArchiveDetailedChat extends Component {
  state = {
    showReplyForm: false,
    selectedCommentId: null
  };

  handleOpenReplyForm = id => () => {
    this.setState({
      showReplyForm: true,
      selectedCommentId: id
    });
  };

  handleCloseReplyForm = () => {
    this.setState({
      selectedCommentId: null,
      showReplyForm: false
    });
  };

  render() {
    const { addArchiveComment, archiveId, archiveChat } = this.props;
    const { showReplyForm, selectedCommentId } = this.state;
    return (
      <div>
        <Segment textAlign="center" attached="top" inverted color="teal" style={{ border: 'none' }}>
          <Header>Chat about this archive</Header>
        </Segment>

        <Segment attached>
          <Comment.Group>
            {archiveChat &&
              archiveChat.map(comment => (
                <Comment key={comment.id}>
                  <Comment.Avatar src={comment.photoURL || '/assets/user.png'} />
                  <Comment.Content>
                    <Comment.Author as={Link} to={`/profile/${comment.uid}`}>
                      {comment.displayName}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{distanceInWords(comment.date, Date.now())} ago</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action onClick={this.handleOpenReplyForm(comment.id)}>Reply</Comment.Action>
                      {showReplyForm &&
                        selectedCommentId === comment.id && (
                          <ArchiveDetailedChatForm
                            form={`reply_${comment.id}`}
                            addArchiveComment={addArchiveComment}
                            archiveId={archiveId}
                            closeForm={this.handleCloseReplyForm}
                            parentId={comment.id}
                          />
                        )}
                    </Comment.Actions>
                  </Comment.Content>

                  {comment.childNodes &&
                    comment.childNodes.map(child => (
                      <Comment.Group>
                        <Comment key={child.id}>
                          <Comment.Avatar src={child.photoURL || '/assets/user.png'} />
                          <Comment.Content>
                            <Comment.Author as={Link} to={`/profile/${child.uid}`}>
                              {child.displayName}
                            </Comment.Author>
                            <Comment.Metadata>
                              <div>{distanceInWords(child.date, Date.now())} ago</div>
                            </Comment.Metadata>
                            <Comment.Text>{child.text}</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action onClick={this.handleOpenReplyForm(child.id)}>Reply</Comment.Action>
                              {showReplyForm &&
                                selectedCommentId === child.id && (
                                  <ArchiveDetailedChatForm
                                    form={`reply_${child.id}`}
                                    addArchiveComment={addArchiveComment}
                                    archiveId={archiveId}
                                    closeForm={this.handleCloseReplyForm}
                                    parentId={child.parentId}
                                  />
                                )}
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    ))}
                </Comment>
              ))}
          </Comment.Group>
          <ArchiveDetailedChatForm parentId={0} form={'newComment'} addArchiveComment={addArchiveComment} archiveId={archiveId} />
        </Segment>
      </div>
    );
  }
}

export default ArchiveDetailedChat;
