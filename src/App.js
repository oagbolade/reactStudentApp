import React, { Component } from 'react';
import ViewStudent from './components/ViewStudent';
import './components/mystyle.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ViewStudent />
      </div>
    );
  }
}

export default App;
