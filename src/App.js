import React, { Component } from 'react';
import { ToDo } from './component/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
