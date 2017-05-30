import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

class Clock extends Component {

  constructor() {
    super();
    this.state = {
      date: new Date(),
      timer: null
    };
  }

  /*shouldComponentUpdate(nextProps, nextState) {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }*/

  tick = () => {
    this.setState({
      date: new Date(),
      timer: requestAnimationFrame(this.tick)
    });
  };

  componentWillMount() {
    this.setState({timer: requestAnimationFrame(this.tick)});
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.timer);
  }

  render() {
    const {date} = this.state;
    return (
      <div>{`${date.toLocaleTimeString()}:${date.getMilliseconds()}`}</div>
    );
  }
}

class Index extends Component {

  constructor() {
    super();
    this.state = {isClockVisible: true};
  }

  toggleClock = () => {
    this.setState(({isClockVisible}) => ({isClockVisible: ! isClockVisible}));
  };

  render () {
    const {isClockVisible} = this.state;
    return (
      <div>
        {isClockVisible && <Clock />}
        <button onClick={this.toggleClock}>Toggle Clock</button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
