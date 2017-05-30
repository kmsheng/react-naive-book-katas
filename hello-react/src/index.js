import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

class Index extends Component {

  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
