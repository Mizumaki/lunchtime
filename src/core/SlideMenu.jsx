import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SlideMenuContents from './SlideMenuContents';

const styles = StyleSheet.create({
  wrap: {
    position: 'fixed', // これにより、要素のサイズを0に
    top: '0',
    left: '0',
    zIndex: '1200',
    marginLeft: '-200px', // 初期では表示しないため、左に-200pxの場所に設置
    width: '200px',
    height: '100vh',
    background: 'sandybrown',
    color: 'white',
  },
  show: {
    transform: 'translate(200px, 0)', // 初期では左に -200px の場所に存在するdivを、右に200px移動する
    transitionDuration: '300ms',
  },
  not_show: {
    transform: 'translate(0, 0)',
    transitionDuration: '300ms',
  }
});

const AnytimeMenu = (props) => {
  const menu = props.is_shown ?
    (
      <div className={css(styles.wrap, styles.show)}>
        <SlideMenuContents onClick={props.onClick}/>
    </div>
    ) : (
      <div className={css(styles.wrap, styles.not_show)}>
        <SlideMenuContents />
    </div>
    );
  return (
    menu
  );
}

export default AnytimeMenu;
