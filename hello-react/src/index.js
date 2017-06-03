import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';

class Index extends Component {

  render () {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
