import React from 'react';
import Hello from '../Hello/';
import What from '../What/';
import Where from '../Where/';
import How from '../How/';
import Touch from '../Touch/';
const stylesheet = require('./app.less');

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Hello />
        <What />
        <Where />
        <How />
        <Touch />
      </div>
    )
  }
}

export default App
