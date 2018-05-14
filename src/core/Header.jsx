import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AnytimeMenu from './AnytimeMenu';

const styles = StyleSheet.create({
});


const Header = () => {
  return (
    <div className="header">
      <AnytimeMenu />
      <div className='header-string'>
        {/* TODO: classNameの名前はもっとましなものにしたい */}
        <div className='site-name'>LUNCHTIME</div>
        {/* TODO: 疑似要素で検索アイコンsvgを挿入 */}
        <div className='now-address'>現在地 / ラーメン・つけ麺</div>
      </div>
    </div>
  );
}

export default Header;