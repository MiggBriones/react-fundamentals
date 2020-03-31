import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Contador from './Contador';

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <Contador />
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));
