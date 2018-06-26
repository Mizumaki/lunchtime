import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CircleButton from './CircleButton-copy';

const styles = StyleSheet.create({
  checkBoxes: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '.5rem 0',
  },
});

// 選択したラジオボタンのnameが this.state.selected でわかる
// onClick をpropsで持ち、それにthis.state.selected の値が引数として代入されている
// this.state.selected によりbuttonのcssを分けているが、NotAutoSelectをpropsに持つ場合のみ、親からのbuttonsのis_selectの値を引き継ぐ
class RadioCircleButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: '',
    };
  }

  handleClick(value) {
    this.setState({ selected: value });
    this.props.onClick(value);
  }

  render() {
    // .mapで配列として返すために、連想配列である this.props.buttons を配列化
    const buttons_data = []
    const data = this.props.buttons
    for (const key in data) {
      buttons_data.push(data[key])
    }

    const buttons = buttons_data.map((button, index) => {
      // is_selected は NotAutoSelect がある場合にはそれに従い、またなくともerrorがあれば、selectは消される。
      const is_selected = this.props.NotAutoSelect ? (button.is_selected) :
        (this.props.error ? (false) : (this.state.selected == button.name ? (true) : (false)));
      const btn = (<CircleButton name={button.name} can_click={button.can_click} onClick={this.handleClick} is_selected={is_selected} key={index} />)
      return (
        btn
      );
    })

    return (
      <div className={css(styles.checkBoxes)}>
        {buttons}
      </div>
    );
  }
}

export default RadioCircleButtons;