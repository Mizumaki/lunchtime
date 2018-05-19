import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchBox from '../contents/SearchBox';
import DrillDown from '../contents/DrillDown';

const styles = StyleSheet.create({
  container: {
    padding: '0 .3rem',
  },

  contents: {
    background: '#E5E5E5',
    borderRadius: '4rem',
    padding: '1rem 2.5rem',
    fontWeight: 'bold',
  },

  or: {
    textAlign: 'center',
    padding: '1rem',
  },

});

const PageSearch = (props) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.contents)}>
        <SearchBox />
        <p className={css(styles.or)}>または</p>
        <DrillDown />
      </div>
    </div>
  );
}

export default PageSearch;
