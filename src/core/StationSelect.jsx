import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NarrowStation from '../contents/NarrowStation';

const styles = StyleSheet.create({
});

class StationSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { station_name: '' };
    this.handleStationNameChange = this.handleStationNameChange.bind(this);
  }

  // onChangeにサーチクエリの変更を入れる
  handleStationNameChange(value) {
    this.setState({ station_name: value });
  }

  render() {
    const contents = this.props.display ?
      (<NarrowStation onChange={this.handleStationNameChange} {...this.state} />) : (null);

    return (
      contents
    );
  }
}

export default StationSelect;