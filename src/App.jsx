import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './core/Header'
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages';

// あとあと消す
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <SubHeader />
          <HandlePages />
          
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
