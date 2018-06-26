import React from 'react';
import { Route } from 'react-router-dom';
import PageTop from './PageTop';
import NomadSearch from './NomadSearch';
import NomadSearchResults from './NomadSearchResults';

const HandlePages = (props) => {
  return (
    <div>
      <Route exact path='/' render={() => <PageTop />} />
      <Route path='/search' render={() => <NomadSearch {...props} />} />
      <Route path='/results' render={() => <NomadSearchResults data={props.search_results} chains={props.selected_chain} my_location={props.my_location} />} />      
    </div>
  );
}

export default HandlePages;