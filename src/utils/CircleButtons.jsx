import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CircleButton from './CircleButton';

const styles = StyleSheet.create({
  checkBoxes: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '.5rem 0',
  },

  checkBoxWrap: {
    flex: '0 0 33%',
    display: 'flex', // 子要素のlabelをblock要素にする必要があるが、labelはdisplay: flex;をすでに指定されているので、親側でflexにすることで指定
    padding: '.7rem',
    ':before': {
      content: '""',
      display: 'block',
      paddingTop: '105%',
    }
  },

  checkBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    borderRadius: '5rem',
    width: '100%',
    height: '100%',
  },

  none: {
    display: 'none',
  },

});

class CircleButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: [] } // ここでstateを作り、値を中継している。これがないと、addかdelかで動作を分ける作業がこのcomponentに内包できない問題が生じるため、削除しないこと！
    this.addCheck = this.addCheck.bind(this);
    this.delCheck = this.delCheck.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
  }

  addCheck(value) {
    this.setState(() => ({
      selected: this.state.selected.concat(value)
    }));
    this.props.onChange(this.state.selected.concat(value));
  }

  delCheck(value) {
    this.setState(() => ({
      selected: this.state.selected.filter((element) => element !== value)
    }));
    this.props.onChange(this.state.selected.filter((element) => element !== value));
  }

  handleRadioButton(value) {
    this.props.onChange(value);
  }

  render() {
    let contents = [];

    switch (this.props.use) {
      case "area":
        contents = [{ name: "現在地" }, { name: "駅名" }];
        //contents = [{ name: "現在地" }, { name: "駅名" }, { name: "建物名" }];
        break;
      case "chain_main":
        contents = [{ name: "マック", id: 100 }, { name: "スタバ", id: 1 }, { name: "ドトール", id: 2 }];
        contents = [{ name: "スタバ", id: 1 }, { name: "ドトール", id: 2 }];
        break;
      case "chain_sub":
        contents = ["サンマルク", "タリーズ", "ベローチェ", "プロント", "エクセルシオール", "カフェドクリエ", "上島珈琲", "コメダ珈琲", "ルノアール", "カフェミヤマ"];
        break;
      default:
        contents = [""];
        break;
    }

    //const checkBoxes = contents.map((content_name) => {
    //  const button = this.props.checkBox ?
    //    (<CircleButton name={content_name} addCheck={this.addCheck} delCheck={this.delCheck} checkBox={true} ref="checkBox" key={content_name.id} />)
    //    : (<CircleButton name={content_name} onChange={this.handleRadioButton} checkBox={false} key={content_name.id} />);
    //  return (
    //    button
    //  );
    //}

    const checkBoxes = contents.map((content) => {
      const button = this.props.checkBox ?
        (<CircleButton name={content.name} addCheck={this.addCheck} delCheck={this.delCheck} checkBox={true} ref="checkBox" key={content.id} id={content.id} />)
        : (<CircleButton name={content.name} onChange={this.handleRadioButton} checkBox={false} key={content.id} id={content.id} />);
      return (
        button
      );
    }
    );

    return (
      <div className={css(styles.checkBoxes)}>
        {checkBoxes}
      </div>
    );
  }
}

export default CircleButtons;
