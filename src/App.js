import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContent from './components/ListContent/ListContent';

class App extends Component {
  render() {
    return (
      <div className='wrap-container'>

        <div className='main-container'>

          <div className='header' >

          </div>

          <ListContent />

        </div>

      </div>
    );
  }
}

export default App;
