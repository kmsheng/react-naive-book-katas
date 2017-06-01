import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';
import CommentApp from './CommentApp';

class Index extends Component {

  static childContextTypes = {
    now: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {now: +new Date()};
    this.timer = null;
  }

  getChildContext() {
    return {
      now: this.state.now
    };
  }

  updateTime = () => {
    this.setState({now: +new Date()});
  };

  componentDidMount() {
    this.timer = setInterval(this.updateTime, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render () {
    return (
      <div>
        <CommentApp />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
