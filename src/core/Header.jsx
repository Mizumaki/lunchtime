import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { darkBrown, lightBrown } from '../styles/colors';
import { menu_transform } from '../styles/css';
import coffee from '../icon/coffee.svg';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import IconSearch from '../icon/IconSearch';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '5rem',
    background: 'white',
    display: 'flex',
    alignItems: 'center', // 中心にcontentsを持ってくる
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '100',
  },
  
  contents: {
    width: '100%',
    position: 'relative',
    color: darkBrown,
  },

  siteName: {
    position: 'relative',
    left: '1rem', // 疑似要素が入るため中心より少し左にずらす
    textAlign: 'center',
    fontSize: '2.1rem', // 疑似要素や他のアイコンとの関係上、可変では困る
    fontWeight: 'bold',
    '::after': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${coffee})`,
      width: '1em',
      height: '1em',
      margin: '-1px .4rem'
    },
  },

  menuButton: {
    position: 'absolute',
    top: '-.4rem',
    left: '1.7rem',
    width: '15%', // リンクの範囲を広く
  },

  searchIcon: {
    position: 'absolute',
    top: '.4rem',
    right: '1.7rem',
    width: '15%', // リンクの範囲を広く
    textAlign: 'right', // widthを広くした分、右寄せ
  },

  slide_menu_shown: {
    ...menu_transform.open
  },

  slide_menu_not_shown: {
    ...menu_transform.close
  },
});


const Header = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <div className={css(styles.contents)}>
        <div className={css(styles.menuButton)}>
          <MenuButton {...props} />
        </div>
        <div className={props.is_menu_shown ? (css(styles.slide_menu_shown)) : (css(styles.slide_menu_not_shown))}>
          <Link to='/'>
            <p className={css(styles.siteName)}>NOMADTIME</p>
          </Link>
          <Link to='/search' className={css(styles.searchIcon)}>
            <IconSearch color={lightBrown} size="24" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;