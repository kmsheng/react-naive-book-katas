import React, {Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {

  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  handleCommentSubmit = (comment) => {
    console.log('comment', comment);
    const {comments} = this.state;
    this.setState({comments: [...comments, comment]});
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
