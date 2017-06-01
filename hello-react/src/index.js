import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';

class Editor extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render () {
    const {message} = this.props;
    return (
      <div className="editor-wrapper">
        {message}
        <div style={{fontSize: '30px'}} dangerouslySetInnerHTML={{__html: message}} />
      </div>
    )
  }
}

class Index extends Component {

  render() {
    return (
      <div>
        <Editor message="hello world" />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
