import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CardsRestaurantDetail from '../contents/CardsRestaurantDetail';

const styles = StyleSheet.create({
  container: {
    padding: '0 2rem',
  },
});

const PageRestaurantSearchResults = (props) => {
  return (
    <div className={css(styles.container)}>
      <CardsRestaurantDetail />
    </div >
  );
}

export default PageRestaurantSearchResults;