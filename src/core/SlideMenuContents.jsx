import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  wrap: {
    paddingTop:   '5rem',
  },
  ul: {
    borderTop: '1px solid white',
  },
  list: {
    width: '100%',
    padding: '1em',
    borderBottom: '1px solid white',
  }
});

const SlideMenuContents = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <ul className={css(styles.ul)}>
        <Link to='/' className={css(styles.link)} onClick={props.onClick} ><li className={css(styles.list)}>トップページ　＞</li></Link>
        <Link to='/search' className={css(styles.link)} onClick={props.onClick}><li className={css(styles.list)}>検索ページ　＞</li></Link>
      </ul>
    </div>
  );
}

export default SlideMenuContents;