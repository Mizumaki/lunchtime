import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {},
});

class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(e) {
    console.log(e);
    console.log(e.target.value);
    this.props.onChange(e.target.value);
  }

  render() {
    switch (this.props.type) {
      case 'distance':
        return (
          <select value={this.props.now} onChange={this.changeSelected}>
            <option value="100">100m</option>
            <option value="300">300m</option>
            <option value="500">500m</option>
            <option value="1000">1000m</option>
            <option value="2000">2000m</option>
            <option value="3000">3000m</option>
          </select>
        );
      default:
        break;
    }
  }
}

export default SelectBox;