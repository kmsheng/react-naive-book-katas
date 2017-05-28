import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const HelloWorld = (props) => {
  const sayHi = (event) => console.log('hello world');
  return <div onClick={sayHi}>Hello World</div>;
};

class Index extends Component {
  render () {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
