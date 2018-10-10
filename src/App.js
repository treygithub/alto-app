import React, { Component } from 'react';
import './css/font-familes.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p style={{fontFamily:"PxGrotesk-Screen"}}>THIS IS A TEST, this is a test</p>
        </div>
        <div>
          <p style={{fontFamily:"OptimaLTStd-BlackItalic"}}>THIS IS A TEST, this is a test</p>
        </div>
      </div>
    );
  }
}

export default App;
