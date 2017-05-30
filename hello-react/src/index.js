import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

import './index.css';

export class Breadcrumb extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array.isRequired,
      PropTypes.object.isRequired
    ])
  };

  renderListContent() {

    const {children} = this.props;

    if ('function' === typeof children.map) {
      return children.map((child, index) => {
        return <li key={`breadcrumb-item-${index}`}>{child}</li>;
      });
    }
    return <li key="breadcrumb-item">{children}</li>;
  }

  render() {
    return <ul className="breadcrumb">{this.renderListContent()}</ul>;
  }
}

class Index extends Component {

  render() {
    return (
      <div>
        <Breadcrumb>
          <a href="/hello">hello</a>
          <a href="/world">world</a>
          <a href="/blah">blah</a>
        </Breadcrumb>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
