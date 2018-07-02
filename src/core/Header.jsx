import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { darkBrown, lightBrown } from '../styles/colors';
import search from '../icon/search.svg';
import coffee from '../icon/coffee.svg';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  wrap: {
    //minHeight: '5rem',
    //height: '11%',
    //maxHeight: '7rem',
    height: '5rem',
    paddingTop: '1rem',
    background: 'white',
    color: darkBrown,
  },
  
  contents: {
    position: 'relative',
  },

  siteName: {
    position: 'relative',
    left: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.3em',
    '::after': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${coffee})`,
      width: '1em',
      height: '1em',
      margin: '-2px .4rem'
    },
  },

  searchIcon: {
    position: 'absolute',
    top: '.4rem',
    right: '1.7rem',
    width: '15%', // リンクの範囲を広く
    textAlign: 'right',
  },
});


const Header = (props) => {
  const searchSvg = (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill={lightBrown} />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>)
  return (
    <div className={css(styles.wrap)}>
      <div className={css(styles.contents)}>
      <Link to='/'>
        <p className={css(styles.siteName)}>NOMADTIME</p>
        </Link>
        <Link to='/search' className={css(styles.searchIcon)}>
        {searchSvg}
        </Link>
      </div>
    </div>
  );
}

export default Header;