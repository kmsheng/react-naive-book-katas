import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class LikeButton extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tomy',
      isLiked: false,
      count: 0
    }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  render () {
    const {isLiked, count} = this.state;
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {isLiked ? '取消' : '点赞'} 👍
        {count}
      </button>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
