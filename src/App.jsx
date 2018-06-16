import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './core/Header'
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages';

// あとあと消す
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchResultsChange = this.handleSearchResultsChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleChainChange = this.handleChainChange.bind(this);
    this.state = {
      search_results: [],
      selected_area: [],
      selected_chain: [],
    };
  }
  
  handleSearchResultsChange(data) {
    this.setState({search_results: data});
  }

  handleAreaChange(value) {
    this.setState({selected_area: value});
  }

  handleChainChange(value) {
    this.setState({ selected_chain: value });
  }

  render() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SubHeader />
        <HandlePages onDataChange={this.handleSearchResultsChange} onAreaChange={this.handleAreaChange} onChainChange={this.handleChainChange} {...this.state}/>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
