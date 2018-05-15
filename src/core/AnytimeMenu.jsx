import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import menu from '../images/button_menu.svg';

const styles = StyleSheet.create({
  menuIcon: {
    position: 'absolute',
    top: '1rem',
    left: '1.5rem',
  }
});

const AnytimeMenu = (props) => {
  return (
    <div className={css(styles.menuIcon)}>
      <img src={menu} alt="menu button" width="40px" />
    </div>
  );
}

export default AnytimeMenu;
