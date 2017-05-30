import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

class Header extends Component {

  constructor () {
    super();
    console.log('construct');
  }

  componentWillMount () {
    console.log('component will mount');
  }

  componentDidMount () {
    console.log('component did mount');
  }

  render () {
    console.log('render');
    return (
      <div>
        <h1 className="title">React 小书</h1>
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
