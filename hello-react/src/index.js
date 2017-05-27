import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

class Header extends Component {

  renderMyHtml() {
    return <div>My HTML</div>;
  }

  render() {
    const isGoodWord = true;
    const pieceOfHtml = isGoodWord ? <span>yes its good word</span> : null;
    return (
      <div>
        <h1 className="title">React 小書</h1>
        {isGoodWord && <strong>is good</strong>}
        {false ? <strong>is good</strong> : <span>is not good</span>}
        {pieceOfHtml}
        {this.renderMyHtml()}
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
