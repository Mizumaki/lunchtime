import React, { Component } from 'react';
import menu from "./images/button_menu.svg";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className='menu-icon'>
            <img src={menu} alt="menu button" width="40px" />
          </div>
          <div className='header-string'>
            {/* TODO: classNameの名前はもっとましなものにしたい */}
            <div className='site-name'>LUNCHTIME</div>
            {/* 疑似要素で検索アイコンsvgを挿入 */}
            <div className='now-address'>現在地 / ラーメン・つけ麺</div>
          </div>
        </div>
        <div className='under-header-menu'>
          <div className='button'>近い順</div>
          <div className='button active'>人気順</div>
          <div className='button'>新着順</div>
        </div>
        <div className='res-container'>
          <div className='res-contents z-depth-3'>
            <div className='res-name'>AFURI 恵比寿</div>
            <div className='res-info'>
              <div className='res-distance'>200m</div>
              <div className='res-comment'>さっぱりした味が女性に人気のラーメン屋</div>
            </div>
          </div>
        </div>
        <div className='res-container'>
          <div className='res-contents z-depth-3'>
            <div className='res-name'>ルワンジュ東京</div>
            <div className='res-info'>
              <div className='res-distance'>400m</div>
              <div className='res-comment'>六本木にあるラグジュアリーケーキ屋さん</div>
            </div>
          </div>
        </div>
        <div className='res-container'>
          <div className='res-contents z-depth-3'>
            <div className='res-name'>フレンチ　シンシア</div>
            <div className='res-info'>
              <div className='res-distance'>350m</div>
              <div className='res-comment'>予約が最も取れないフレンチ</div>
            </div>
          </div>
        </div>
        <div className='res-container'>
          <div className='res-contents z-depth-3'>
            <div className='res-name'>フレンチ　シンシア</div>
            <div className='res-info'>
              <div className='res-distance'>350m</div>
              <div className='res-comment'>予約が最も取れないフレンチ</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
