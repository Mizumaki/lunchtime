import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AnytimeMenu from './AnytimeMenu';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  header: {
    minHeight: '6rem',
    height: '11%', // vhに直す
    maxHeight: '7rem',
    position: 'relative',
    marginTop: '1rem',
    color: 'white',
  },

  headerLink: {
    textDecoration: 'none',
    color: 'inherit',
  },

  headerString: {
    paddingTop: '1rem',
    textAlign: 'center',
    fontSize: '2rem',
    height: '100 %',
  },

  siteName: {
    fontSize: '1.3em',
  },
});


const Header = () => {
  return (
    <div className={css(styles.header)}>
      <AnytimeMenu />
      <Link to='/search' className={css(styles.headerLink)}>
        <div className={css(styles.headerString)}>
          {/* TODO: classNameの名前はもっとましなものにしたい */}
          <div className={css(styles.siteName)}>Nomad Time</div>
          {/* TODO: 疑似要素で検索アイコンsvgを挿入 */}
          <div>ノマドプレイス</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;