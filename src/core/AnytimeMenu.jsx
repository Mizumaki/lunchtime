import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import menu from '../images/button_menu.svg';

const styles = StyleSheet.create({
});

const AnytimeMenu = (props) => {
  return (
    <div className='menu-icon'>
      <img src={menu} alt="menu button" width="40px" />
    </div>
  );
}

export default AnytimeMenu;
