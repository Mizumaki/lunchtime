import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Route } from 'react-router-dom';
import PageTop from '../nomad/PageTop';
import PageSearch from '../nomad/PageSearch';
import PageSearchResults from '../nomad/PageSearchResults';

const styles = StyleSheet.create({
  wrap: {
    maxWidth: '40rem',
    margin: '0 auto', // maxWidthより大きくなった際に、中央寄せ
  },
});

const HandlePages = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <Route exact path='/' render={() => <PageTop />} />
      <Route path='/search' render={() => <PageSearch onDataChange={props.onDataChange} onNarrowsChange={props.onNarrowsChange} onMyLocationChange={props.onMyLocationChange} />} />
      <Route path='/results' render={() => <PageSearchResults data={props.data} narrowDistance={props.narrowDistance} onNarrowDistanceChange={props.onNarrowDistanceChange} narrows={props.narrows} my_location={props.my_location} />} />
    </div>
  );
}

export default HandlePages;