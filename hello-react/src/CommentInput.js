import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component {

  static propTypes = {
    onSubmit: PropTypes.func
  };

  constructor () {
    super()
      this.state = {
        username: '',
        content: ''
      }
  }

  handleUsernamChange = (event) => {
    this.setState({username: event.target.value});
  };

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  };

  handleSubmit = () => {
    const {onSubmit} = this.props;
    if (onSubmit) {
      const {username, content} = this.state;
      onSubmit({username, content});
    }
    this.setState({content: ''});
  };

  render () {

    const {username, content} = this.state;

    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
          <input value={username} onChange={this.handleUsernamChange} />
        </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
          <textarea onChange={this.handleContentChange} value={content} />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    );
  }
}
