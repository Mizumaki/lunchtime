import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchStationName from './SearchStationName';
import StationSearchResults from './StationSearchResults';

const styles = StyleSheet.create({
});

// onSelected をpropsで持ち、それで親にselectされたstationのidを伝播
class SelectStation extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.state = {
      data: [],
      selected_station_id: '',
      selected_station_name: '',
    };
  }

  handleDataChange(value) {
    // SearchStationNameでの駅名検索結果をdataに代入
    this.setState({data: value});
  }

  handleSelected(id, name) {
    // stateへの代入と、親へのselectされたstation id の伝播
    this.setState({
      selected_station_id: id,
      selected_station_name: name,
    });
    this.props.onSelected(id);
  }

  render() {
    return (
      <div className={css(styles.wrap)}>
        <SearchStationName onDataChange={this.handleDataChange} />
        <StationSearchResults data={this.state.data} onClick={this.handleSelected} />
      </div>
    );
  }
}

export default SelectStation;