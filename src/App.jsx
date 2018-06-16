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
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.state = {
      search_results: [],
      search_query: {area: "", chain: ""},
    };
  }
  
  handleSearchResultsChange(data) {
    this.setState({search_results: data});
  }

  handleSearchQueryChange(query) {
    this.setState({search_query: query});
  }

  render() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SubHeader />
        <HandlePages {...this.state}/>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
