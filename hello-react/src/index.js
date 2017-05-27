import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="title">React 小書</h1>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
