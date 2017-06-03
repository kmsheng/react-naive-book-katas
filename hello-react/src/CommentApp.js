import React, {Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';
import resolve from './helpers/resolve';

const CACHE_KEY = 'comments';

const doAsyncStuff = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
};

class CommentApp extends Component {

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

  handleDeleteButtonClick = (targetIndex) => {
    this.setState((prevState, props) => {
      const newComments = prevState.comments.filter((comment, index) => index !== targetIndex);
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

export default resolve(doAsyncStuff)(CommentApp);
