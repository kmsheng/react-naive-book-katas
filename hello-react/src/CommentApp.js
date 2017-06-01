import React, {Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

const CACHE_KEY = 'comments';

export default class CommentApp extends Component {

  constructor() {
    super();
    const comments = JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    this.state = {comments};
  }

  handleCommentSubmit = (comment) => {
    const {comments} = this.state;
    const newComments = [...comments, comment];
    this.setState({comments: newComments});
    localStorage.setItem(CACHE_KEY, JSON.stringify(newComments));
  };

  handleDeleteButtonClick = (targetComment) => {
    this.setState((prevState, props) => {
      const newComments = prevState.comments.filter((comment) => {
        return (comment.username !== targetComment.username) ||
          (comment.createdAt !== targetComment.createdAt) ||
          (comment.content !== targetComment.content);
      });
      localStorage.setItem(CACHE_KEY, JSON.stringify(newComments));
      return {
        comments: newComments
      };
    });
  };

  render() {
    const {comments} = this.state;
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleCommentSubmit} />
        <CommentList comments={comments} onDeleteButtonClick={this.handleDeleteButtonClick} />
      </div>
    );
  }
}
