import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SlideMenuContents from './SlideMenuContents';
import {menu_transform} from '../styles/css';

const styles = StyleSheet.create({
  wrap: {
    position: 'fixed', // これにより、要素のサイズを0に
    top: '0',
    left: '0',
    width: '200px',
    height: '100%',
    height: '100vh',
    zIndex: '1200',
    marginLeft: '-200px', // 初期では表示しないため、左に-200pxの場所に設置
    background: '#FFFFFF'
  },

  show: {
   ...menu_transform.open
  },

  not_show: {
    ...menu_transform.close
  },
});

const SlideMenu = (props) => {
  return (
    <div className={props.is_shown ? (css(styles.wrap, styles.show)) : (css(styles.wrap, styles.not_show))}>
      <SlideMenuContents onClick={props.onClick} />
    </div>
  );
}

export default SlideMenu;
