import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NarrowStation from '../contents/NarrowStation';

const styles = StyleSheet.create({
});

class StationSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station_name: '',
      is_focused: false,
    };
    this.handleStationNameChange = this.handleStationNameChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  // onChangeにサーチクエリの変更を入れる
  handleStationNameChange(value) {
    this.setState({ station_name: value });
  }

  handleFocus() {
    this.setState({ is_focused: true});
  }

  handleBlur( ){
    this.setState({ is_focused: false});
  }

  componentDidUpdate() {
    if (this.state.is_focused == false) {
      console.log("in update");
    fetch(`ttps://lunchtime-db.herokuapp.com/station/name?name=${this.state.station_name}`, {
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
        },
        (error) => {
        }
      )
    }
  }

  render() {
    const contents = this.props.display ?
      (<NarrowStation onChange={this.handleStationNameChange} onFocus={this.handleFocus} onBlur={this.handleBlur} {...this.state} />) : (null);

    return (
      contents
    );
  }
}

export default StationSelect;