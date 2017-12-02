import React, { Component } from 'react';
import './App.css';
import ListContent from './components/ListContent/ListContent';

class App extends Component {
  render() {
    return (
      <div className='wrap-container'>

        <div className='main-container'>

        {/* the header area of the page */}

          <div className='header' >

          </div>

        {/* the container contains the functionalities
            (form to add new entry and a display table) */}

          <ListContent />

        </div>

      </div>
    );
  }
}

export default App;
