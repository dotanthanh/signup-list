import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListContent from './components/ListContent';

class App extends Component {
  render() {
    return (
      <div className='wrap-container'>

        <div className='main-container'>

          <Header />
          <ListContent />

        </div>

      </div>
    );
  }
}

export default App;
