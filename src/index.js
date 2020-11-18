import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = undefined;
  }

  render() {
    return (
      <div>Hello world</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
