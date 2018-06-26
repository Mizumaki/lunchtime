import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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

  none: {
    display: 'none',
  },
});

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.state = {is_selected: false};
  }

  handleRadioButton(e) {
    this.props.onChange(e.target.name);
    this.setState(prevState => ({
      is_selected: !prevState.is_selected
    }));
  }

  handleCheckBox(e) {
    this.state.is_selected ? this.props.delCheck(e.target.id) : this.props.addCheck(e.target.id);
    this.setState(prevState => ({
      is_selected: !prevState.is_selected
    }));
  }

  render() {
    const cssStyle = this.state.is_selected ? (css(styles.checkBoxSelected)):(css(styles.checkBox));
    const main = this.props.checkBox ?
      (
        <label className={cssStyle}>
          {this.props.name}<input type="checkbox" className={css(styles.none)} name={this.props.name} onClick={this.handleCheckBox} id={this.props.id} />
        </label>
      ) : (
        <button className={cssStyle} name={this.props.name} onClick={this.handleRadioButton} >
          {this.props.name}
        </button>
      );

    return (
      <div className={css(styles.checkBoxWrap)}>
        {main}
      </div>
    );  }
}

export default CircleButton;
