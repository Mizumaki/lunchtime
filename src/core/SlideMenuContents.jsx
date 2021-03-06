import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Brown } from '../styles/colors';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  wrap: {
    color: Brown.dark,
  },

  headerEqual: {
    height: '5rem', // Header の height に依存
  },

  ul: {
    borderTop: `1px dotted ${Brown.dark}`,
    fontWeight: 'bold',
  },

  list: {
    width: '100%',
    padding: '1em',
    borderBottom: `1px dotted ${Brown.dark}`,
  }
});

const SlideMenuContents = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <div className={css(styles.headerEqual)}></div>
      <ul className={css(styles.ul)}>
        <Link to='/' className={css(styles.link)} onClick={props.onClick} ><li className={css(styles.list)}>トップページ　＞</li></Link>
        <Link to='/search' className={css(styles.link)} onClick={props.onClick}><li className={css(styles.list)}>検索ページ　＞</li></Link>
      </ul>
    </div>
  );
}

export default SlideMenuContents;