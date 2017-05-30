import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

class AutoFocusInput extends Component {

  componentDidMount() {
    this.input.focus();
  }

  focus() {
    this.input.focus();
  }

  render() {
    return <input ref={(input) => this.input = input} />
  }
}

class Index extends Component {

  handleButtonClick = () => this.refs.autoFocusInput.focus();

  render () {
    return (
      <div>
        <AutoFocusInput ref="autoFocusInput" />
        <button onClick={this.handleButtonClick}>focus !</button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
