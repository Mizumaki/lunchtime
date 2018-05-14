import React, { Component } from 'react';
import Header from './core/Header'
import SubHeader from './core/SubHeader';

// あとあと消す
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
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
