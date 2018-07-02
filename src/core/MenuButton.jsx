import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SlideMenu from './SlideMenu';
import CoverAll from './CoverAll';
import menu from '../images/button_menu.svg';

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
  },
  menuIcon: {
    position: 'absolute',
    top: '.5rem',
    left: '1.5rem',
    zIndex: '1201', // SlideMenuのzIndexが1200のため
  },
});

    
const Header = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <div className={css(styles.menuIcon)} onClick={props.onMenuButtonClick}>
        <img src={menu} alt="menu button" width="40px" />
      </div>
      <SlideMenu is_shown={props.is_menu_shown} onClick={props.onMenuButtonClick} />
      <CoverAll is_shown={props.is_menu_shown} onClick={props.onMenuButtonClick} />
    </div>
  );
}

export default Header;