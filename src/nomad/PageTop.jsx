import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { darkBrown} from '../styles/colors';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  wrap: {
    textAlign: 'center',
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: darkBrown,
  },
  
  searchButton: {
    marginTop: '1em',
    background: 'white',
    opacity: '0.5',
    padding: '0 1rem',
    color: 'black',
    fontWeight: 'bold',
  },
});

const PageTop = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <p>近くのノマドプレイスを<br />30秒で探そう！</p>
      <Link to='/search'>
        <button type='button' className={css(styles.searchButton)}>今すぐ検索！</button>
      </Link>
    </div>
  );
}

export default PageTop;