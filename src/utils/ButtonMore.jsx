import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import iconPlus from '../images/plus.svg';
import iconMinus from '../images/minus.svg';

// props list
// size, string, left (boolean)

// TODO: 文字列に、開いた時、閉じた時によって可変するよう追加
// TODO: prop types しないと

const styles = StyleSheet.create({
  button: {
    background: 'white',
    borderRadius: '5rem',
    padding: '0',
    outline: 'none',
    display: 'flex',
    // width, height はclass内で指定
  },
});

class ButtonMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const expanded = this.state.expanded;

    const string = (<p>{this.props.string}</p>);

    const size = (this.props.size) ? this.props.size
      : (this.props.string) ? 'auto'
        : '22px';
    
    const left = (this.props.left) ? 'auto'
      : '0';  

    const style = {
      btn: {
        width: size,
        height: size,
        marginLeft: left,
      },
    }
    const iconBtn = expanded ?
      (<img src={iconMinus} alt="" width={size} />) : (<img src={iconPlus} alt="" width={size} />);

    return (
      <button className={css(styles.button)} style={style.btn} onClick={() => this.handleClick()}>
        {iconBtn}{string}
      </button>
    );
  }
}
//　ボタンサイズは、デフォルト22で、propsで変更可能にする。
//　文字列付きもpropsで作成可能に
//

export default ButtonMore;