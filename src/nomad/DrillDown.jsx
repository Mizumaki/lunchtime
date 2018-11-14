import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonMore from '../utils/ButtonMore';
import DrillButtons from './DrillButtons';
import GenerateSearchPath from './GenerateSearchPath';

const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
  },
  moreButtonPosition: {
    position: 'absolute',
    top: '.2rem',
    left: '-2.8rem',
  },
});

// onDataChange, onDone, onError, error をpropsで持つ
// search_pathをもとにデータをfetch、this.state.results に入れつつ、親にdataを返す
class DrillDown extends React.Component {
  constructor(props) {
    super(props);
    this.handelSearchPathChange = this.handelSearchPathChange.bind(this);
    this.handleSelectDrillButton = this.handleSelectDrillButton.bind(this);
    this.state = {
      selected_drill_button: "",
      search_path: '',
      results: [],
    }
  }

  handleSelectDrillButton(value) {
    // selected_drill_button を更新
    this.setState({ selected_drill_button: value });
    this.props.onError(""); // 絞り込みの形式が代わったら、data_fetch_errorを
  }

  // データが見つかった場合は、親にデータを伝える
  // 見つからなかった場合は、エラーであることを伝える
  async handelSearchPathChange(value) {
    this.setState({ search_path: value });
    this.props.onDone(false);
    this.props.onError(""); // error文を初期化
    this.props.onCondition("データを取得中");
    const search_path = await value
    console.log("dataのfetch処理を開始")
    console.log(search_path)
    fetch(`https://lunchtime-db.herokuapp.com/nmdp/${search_path}`, { // `http://localhost:3018/nmdp/${search_path}&distance=3000`
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
          console.log("データのfetchが完了")
          this.props.onDataChange(result);
          this.props.onCondition(""); // 成功したらエラーをクリア
          this.props.onDone(true); // PageSearchにDataの取得が完了したことを伝える
          this.setState({
            results: result,
          });
        },
        (error) => {
          console.log("データのfetchが失敗")
          this.props.onCondition("");
          this.props.onError(error);
          this.props.onDone(false); // デフォルトfalseだが、万が一にもここがtrueとなってしまうと困るので、明示
        }
      )

  }

  render() {
    return (
      <div className={css(styles.wrap)}>
        <p>STEP1 : 場所を絞り込む</p>
        <div className={css(styles.moreButtonPosition)} >
          <ButtonMore />
        </div>
        <DrillButtons onClick={this.handleSelectDrillButton} error={this.props.error} />
        <GenerateSearchPath onChange={this.handelSearchPathChange} selectedDrillButton={this.state.selected_drill_button} onMyLocationChange={this.props.onMyLocationChange} />
      </div>
    );
  }
}

export default DrillDown;
