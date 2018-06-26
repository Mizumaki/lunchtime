import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './core/Header'
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages-copy';

// あとあと消す
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleNarrowsChange = this.handleNarrowsChange.bind(this);
    this.state = {
      data: [],
      narrows: [],
    };
  }

  handleDataChange(value) {
    this.setState({ data: value });
  }

  handleNarrowsChange(value) {
    this.setState({ narrows: value });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <SubHeader />
          <HandlePages onDataChange={this.handleDataChange} onNarrowsChange={this.handleNarrowsChange} {...this.state} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
