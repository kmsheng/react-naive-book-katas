import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class LikeButton extends Component {

  static defaultProps = {
    likeText: '點讚',
    cancelText: '取消'
  };

  constructor() {
    super();
    this.state = {isLiked: false};
  }

  handleClickOnLikeButton = () => {
    this.setState((prevState) => ({isLiked: ! prevState.isLiked}));
  };

  render () {
    const {isLiked} = this.state;
    const {likeText, cancelText} = this.props;
    return (
      <button onClick={this.handleClickOnLikeButton}>
        {isLiked ? cancelText : likeText} 👍
      </button>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton likeText="like" cancelText="cacnel" />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
