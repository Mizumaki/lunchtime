import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Brown} from '../styles/colors';

let styles = StyleSheet.create({
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
    border: `1px solid ${Brown.strong}`,
    borderRadius: '5rem',
    width: '100%',
    height: '100%',
  },

  checkBoxSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    border: '5px solid pink',
    borderRadius: '5rem',
    width: '100%',
    height: '100%',
  },
});

// name, canClick, onClick, is_selected を props で持つ
// is_selected の値によりCSSが変化
// can_click の値によりbutton の disable が変化
class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click(e) {
    this.props.onClick(e.target.name);
  }

  render() {
    const string = this.props.name
    const cssStyle = this.props.is_selected ? (css(styles.checkBoxSelected)) : (css(styles.checkBox))
    const button = this.props.can_click ?
      (<button className={cssStyle} onClick={this.click} name={string} >{string}</button>) :
      (<button className={cssStyle} disabled="true" >{string}</button>);

    return (
      <div className={css(styles.checkBoxWrap)}>
        {button}
      </div>
    );
  }
}

export default CircleButton;

// const CircleButton = (props) => {
//   const click = (e) => {props.onClick(e.target.name)}
//   const string = props.name
//   const cssStyle = props.is_selected ? (css(styles.checkBoxSelected)): (css(styles.checkBox));
//   const button = props.can_click ?
//     (<button className={cssStyle} onClick={click} name={string} >{string}</button>) :
//     (<button className={cssStyle} disabled="true" >{string}</button>);
//   
//   return (
//     <div className={css(styles.checkBoxWrap)}>
//       {button}
//     </div>
//   );
// }
