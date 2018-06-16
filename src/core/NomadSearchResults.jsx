import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadCardsRestaurantDetail from '../contents/NomadCardsRestaurantDetail';

const styles = StyleSheet.create({
  container: {
    padding: '0 2rem',
  },
});

const PageRestaurantSearchResults = (props) => {
  return (
    <div className={css(styles.container)}>
      <NomadCardsRestaurantDetail />
    </div >
  );
}

export default PageRestaurantSearchResults;