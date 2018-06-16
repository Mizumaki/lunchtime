import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadDrillDown from '../contents/NomadDrillDown';
import NarrowNomad from './NarrowNomad';

const styles = StyleSheet.create({
  container: {
    padding: '0 .3rem',
  },

  contents: {
    background: '#E5E5E5',
    borderRadius: '4rem',
    padding: '1rem 2.5rem',
    fontWeight: 'bold',
  },

  or: {
    textAlign: 'center',
    padding: '1rem',
  },

});

class PageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_area: [],
      selected_chain: [],
      data: [],
    }
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleChainChange = this.handleChainChange.bind(this);
  }

  getPosition() {
    // 現在地を取得
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        (position) => {
          alert("緯度:" + position.coords.latitude + ",経度" + position.coords.longitude);
          const lon = position.coords.longitude
          const lat = position.coords.latitude
          const result = `lon=${lon}&lat=${lat}`
          console.log(result)
          resolve(result);
        },
        // 取得失敗した場合
        (error) => {
          switch (error.code) {
            case 1: //PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: //POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: //TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:" + error.code + ")");
              break;
          }
          console.log(error.code);
          resolve(error.code);
        }
      );
    })
  }

  async handleAreaChange(value) {
    this.setState({
      selected_area: value
    });

    let search_by = ""
    let search_query = ""
    switch (value) {
      case "現在地":
        search_by = "location";
        search_query = await this.getPosition();
        console.log("現在地")
        break;
      case "駅名":
        search_by = "station";
        console.log("駅名")
        break;
      case "建物名":
        search_by = "name";
        console.log("建物名")
        break;
      default:
        break;
    }
    
    console.log(search_query)

    fetch(`https://lunchtime-db.herokuapp.com/nmdp/${search_by}?${search_query}`, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
          });
        },
        (error) => {
          this.setState({
            data: error
          });
        }
      )
  }

  handleChainChange(value) {
    this.setState({
      selected_chain: value
    });
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.contents)}>
          <NomadDrillDown {...this.state} onAreaChange={this.handleAreaChange} onChainChange={this.handleChainChange} />
          <NarrowNomad chains={this.state.selected_chain} />
        </div>
      </div>
    );
  }
}

export default PageSearch;
