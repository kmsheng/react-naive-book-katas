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
    console.log('comment', comment);
    const {comments} = this.state;
    const newComments = [...comments, comment];
    this.setState({comments: newComments});
    localStorage.setItem(CACHE_KEY, JSON.stringify(newComments));
  };

  render() {
    const {comments} = this.state;
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleCommentSubmit} />
        <CommentList comments={comments} />
      </div>
    );
  }
}
