import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonMore from '../utils/ButtonMore';
import RadioCircleButtons from '../utils/RadioCircleButtons';

const styles = StyleSheet.create({
  relative: {
    position: 'relative',
  },
  moreButtonPosition: {
    position: 'absolute',
    top: '.2rem',
    left: '-2.8rem',
  },
  error: {
    fontSize: '1.2rem',
    background: 'white',
    padding: '.8rem',
    marginBottom: '1.5rem',
    border: '2px dotted red',
  },
});

// onClick を props で持つ
// onClickで親にselectされたボタン名を伝える
// this.state.buttons で、表示するボタンを管理
// this.state.buttons の連想配列に is_selected を含めた場合、NotAutoSelectがRadioCircleButtonsのpropsにあるときにのみ子のbuttonに伝播される
class DrillButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        "現在地": { name: "現在地", can_click: true },
        "駅名": { name: "駅名", can_click: true },
      },
    };
  }

  render() {
    const buttons = this.state.buttons
    const error = this.props.error ? (
      <div className={css(styles.error)}>
        <p>データの取得でエラーが発生しました。インターネット接続をお確かめの上、再度お試しください。</p>
      </div>
    ) : (null);
    return (
      <div className={css(styles.relative)}>
        <p>STEP1 : 場所を絞り込む</p>
        <div className={css(styles.moreButtonPosition)} >
          <ButtonMore />
        </div>
        <RadioCircleButtons buttons={buttons} onClick={this.props.onClick} error={this.props.error} />
        {error}
      </div>
    );
  }
}

export default DrillButtons;