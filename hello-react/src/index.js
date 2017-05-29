import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';

class Input extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    onChange: () => {}
  };

  render () {
    const {onChange, value} = this.props;
    return (
      <div>
        <input type="number" onChange={onChange} value={value} min={0} max={1} step={0.1} />
      </div>
    )
  }
}

class PercentageShower extends Component {

  constructor() {
    super();
    this.state = {inputValue: ''};
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  };

  getPercent() {
    const inputValue = parseFloat(this.state.inputValue);
    if (isNaN(inputValue)) {
      return '0%';
    }
    return `${(inputValue * 100).toFixed(2)}%`;
  }

  render () {
    const {inputValue} = this.state;
    return (
      <div>
        <Input value={inputValue} onChange={this.handleInputChange} />
        <span>{this.getPercent()}</span>
      </div>
    )
  }
}

class PercentageApp extends Component {
  render () {
    return (
      <div>
        <PercentageShower />
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <PercentageApp />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
