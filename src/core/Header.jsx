import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AnytimeMenu from './AnytimeMenu';

const styles = StyleSheet.create({
  header: {
    minHeight: '6rem',
    height: '11%', // vhに直す
    maxHeight: '7rem',
    position: 'relative',
    marginTop: '1rem',
    color: 'white',
  },

  headerString: {
    textAlign: 'center',
    fontSize: '2rem',
    height: '100 %',
  },

  siteName: {
    fontSize: '.9em',
  },
});


const Header = () => {
  return (
    <div className={css(styles.header)}>
      <AnytimeMenu />
      <div className={css(styles.headerString)}>
        {/* TODO: classNameの名前はもっとましなものにしたい */}
        <div className={css(styles.siteName)}>LUNCHTIME</div>
        {/* TODO: 疑似要素で検索アイコンsvgを挿入 */}
        <div>現在地 / ラーメン・つけ麺</div>
      </div>
    </div>
  );
}

export default Header;