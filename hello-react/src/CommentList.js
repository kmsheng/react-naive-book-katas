import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default class CommentList extends Component {

  static propTypes = {
    comments: PropTypes.array,
    onDeleteButtonClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    comments: []
  };

  renderComments() {
    const {comments, onDeleteButtonClick} = this.props;
    return comments.map((comment, index) => {
      return <Comment index={index} comment={comment} key={index} onDeleteButtonClick={onDeleteButtonClick} />;
    });
  }

  render() {
    return (
      <div>{this.renderComments()}</div>
    );
  }
}
