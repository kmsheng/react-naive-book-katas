import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {

  static propTypes = {
    onDeleteButtonClick: PropTypes.func.isRequired
  };

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

  handleDeleteButtonClick = (comment) => {
    return () => this.props.onDeleteButtonClick(comment);
  };

  renderCommntContent() {
    const {comment} = this.props;
    return comment.content.replace(/`(.+)`/, (match, word) => `<code>${word}</code>`);
  }

  render () {
    const {comment} = this.props;
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{comment.username}</span>：
        </div>
        {/*this might cause xss. e.g. <img src="" onerror="alert(1)" />*/}
        <p dangerouslySetInnerHTML={{__html: this.renderCommntContent()}} />
        {this.renderCreatedAt()}
        <button onClick={this.handleDeleteButtonClick(comment)}>delete</button>
      </div>
    )
  }
}
