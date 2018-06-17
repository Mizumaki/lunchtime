import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link } from 'react-router-dom';
import PageTop from './PageTop';
import PageRestaurantSearchResults from './PageRestaurantSearchResults';
import PageSearch from './PageSearch';
import NomadSearch from './NomadSearch';
import NomadSearchResults from './NomadSearchResults';
import Test from './Test';

const HandlePages = (props) => {
  return (
    <div>
      <Route exact path='/' render={() => <Test />} />
      <Route path='/search' render={() => <NomadSearch {...props} />} />
      <Route path='/results' render={() => <NomadSearchResults data={props.search_results} chains={props.selected_chain} my_location={props.my_location} />} />
      {/* 以下、LUNCHTIME用のpath
      <Route exact path='/' render={() => <PageTop />} />
      <Route path='/search' render={() => <PageSearch />} />
      <Route path='/results' render={() => <PageRestaurantSearchResults />} />
       */}
    </div>
  );
}

export default HandlePages;