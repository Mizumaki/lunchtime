import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route, Link } from 'react-router-dom';
import PageOfRestaurantSearchResults from './PageOfRestaurantSearchResults';
import PageSearch from './PageSearch';

const HandlePages = (props) => {
  return (
    <div>
      <Route exact path='/' render={() => <PageOfRestaurantSearchResults />} />
      <Route path='/search' render={() => <PageSearch />} />
      <Route path='/friends' component={inFriends} />
    </div>
  );
}

const inRoom = () => (
  <div>
    <h2>Room</h2>
    <p>Welcome to Room</p>
  </div>
);

const inFriends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
);

export default HandlePages;