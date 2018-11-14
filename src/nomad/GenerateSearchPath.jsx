import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SelectStation from '../contents/SelectStation';
import SelectBuilding from '../contents/SelectBuilding';
import SelectPresentLocation from '../contents/SelectPresentLocation';

const styles = StyleSheet.create({
});

class GenerateSearchPath extends React.Component {
  constructor(props) {
    super(props);
    this.handleStationSelected = this.handleStationSelected.bind(this);
    this.handleLocationSelected = this.handleLocationSelected.bind(this);
    this.state = {
      search_path: "",
    };
  }

  handleStationSelected(id, name, location) {
    console.log(location);
    const regLocation = location.match(/(\d+\.\d+)\s(\d+\.\d+)/);
    const lon = parseFloat(regLocation[1]);
    const lat = parseFloat(regLocation[2]);
    this.props.onMyLocationChange({longitude: lon, latitude: lat});
    // StationSelectでclickされたstationのidをもとにサーチパスを生成、親に伝播
    const search_path = `station?id=${id}`
    this.setState({ search_path: search_path });
    this.props.onChange(search_path);
  }

  handleLocationSelected(lonlat) {
    this.props.onMyLocationChange(lonlat);
    const search_path = `location?lon=${lonlat.longitude}&lat=${lonlat.latitude}`
    this.setState({ search_path: search_path });
    this.props.onChange(search_path);
  }

  render() {
    // 選択されている絞り込みボタンに該当するComponentをMountする
    const select_component = (() => {
      switch (this.props.selectedDrillButton) {
        case "現在地": return (<SelectPresentLocation onSelected={this.handleLocationSelected} />)
        case "駅名": return (<SelectStation onSelected={this.handleStationSelected} onError={this.props.onError} />)
        case "建物名": return (<SelectBuilding onSelected={this.handleLocationSelected} />)
        default: return (null)
      }
    })();
    return (
      <div className={css(styles.wrap)}>
        {select_component}
      </div>
    );
  }
}

export default GenerateSearchPath;