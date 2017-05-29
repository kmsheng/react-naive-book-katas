import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default class CommentList extends Component {

  static propTypes = {
    comments: PropTypes.array
  };

  static defaultProps = {
    comments: []
  };

  renderComments() {
    const {comments} = this.props;
    return comments.map((comment, index) => {
      return <Comment comment={comment} key={index} />;
    });
  }

  render() {
    return (
      <div>{this.renderComments()}</div>
    );
  }
}
