import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';

class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  render () {
    return (
      <div className="editor-wrapper">
        {this.state.content}
        <div style={{fontSize: '30px'}} dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    )
  }
}

class Index extends Component {

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
