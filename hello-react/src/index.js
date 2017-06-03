import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';

class Header extends Component {
  render () {
    return (
    <div>
      <h2>This is header</h2>
      <Title />
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main</h2>
      <Content />
    </div>
    )
  }
}

class Title extends Component {

  static contextTypes = {
    date: PropTypes.object
  };

  render () {
    return (
      <div>
        <h1>React.js 小书标题</h1>
        <div>現在時間: {this.context.date.toString()}</div>
      </div>
    )
  }
}

class Content extends Component {

  static contextTypes = {
    date: PropTypes.object
  };

  render () {
    return (
    <div>
      <h2>React.js 小书内容</h2>
      <div>現在時間: {this.context.date.toString()}</div>
    </div>
    )
  }
}

class Index extends Component {

  static childContextTypes = {
    date: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      date: new Date()
    };
  }

  getChildContext() {
    return {date: this.state.date};
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
