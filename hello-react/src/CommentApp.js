import React, {Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {

  handleCommentSubmit(comment) {
    console.log('comment', comment);
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleCommentSubmit} />
        <CommentList />
      </div>
    );
  }
}
