import React from 'react';
import { Route } from 'react-router-dom';
import PageTop from '../nomad/PageTop';
import PageSearch from '../nomad/PageSearch';
import PageSearchResults from '../nomad/PageSearchResults';

const HandlePages = (props) => {
  return (
    <div>
      <Route exact path='/' render={() => <PageTop />} />
      <Route path='/search' render={() => <PageSearch onDataChange={props.onDataChange} onNarrowsChange={props.onNarrowsChange} />} />
      <Route path='/results' render={() => <PageSearchResults data={props.data} narrows={props.narrows} />} />
    </div>
  );
}

export default HandlePages;