import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NarrowStation from '../contents/NarrowStation';
import StationsResults from '../contents/StationsResults'

const styles = StyleSheet.create({
});

class StationSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station_name: '',
      is_focused: false,
      stations: [{ "id": 1380, "name": "田町", "company_name": "JR東日本" }, { "id": 8893, "name": "田町", "company_name": "岡山電気軌道" }],
    };
    this.handleStationNameChange = this.handleStationNameChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.searchStation = this.searchStation.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // onChangeにサーチクエリの変更を入れる
  handleStationNameChange(value) {
    this.setState({ station_name: value });
  }

  handleFocus() {
    this.setState({ is_focused: true });
  }

  handleBlur() {
    this.setState({ is_focused: false });
  }

  handleOnClick(value) {
    this.props.onChange(value)
  }

  searchStation() {
    console.log("search station")
    console.log(this.state.station_name)
    fetch(`https://lunchtime-db.herokuapp.com/station/name?name=${this.state.station_name}`, {
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
          console.log(result)
          this.setState({ stations: result });
        },
        (error) => {
          console.log(error)
          this.setState({ error });
        }
      )
  }

  render() {
    const contents = this.props.display ?
      (<div>
        <NarrowStation onChange={this.handleStationNameChange} onClick={this.searchStation} onFocus={this.handleFocus} onBlur={this.handleBlur} {...this.state} />
        <StationsResults stations={this.state.stations} onClick={this.props.onChange} />
      </div>) : (null);

    return (
      contents
    );
  }
}

export default StationSelect;