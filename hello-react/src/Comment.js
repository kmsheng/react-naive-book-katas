import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {

  static contextTypes = {
    now: PropTypes.number
  };

  renderCreatedAt() {
    const {now} = this.context;
    const {comment} = this.props;
    const secs = Math.round((now - comment.createdAt) / 1000);
    if (secs > 0) {
      return <span>created {secs} seconds ago</span>;
    }
  }

  render () {
    const {comment} = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{comment.username}</span>：
        </div>
        <p>{comment.content}</p>
        {this.renderCreatedAt()}
      </div>
    )
  }
}
