import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchBuildingName from './SearchBuildingName';
import BuildingSearchResults from './BuildingSearchResults';

const styles = StyleSheet.create({
});

class SelectBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      lonlat: {},
    };
  }

  render() {
    return (
      <div className={css(styles.wrap)}>
        <SearchBuildingName />
        <BuildingSearchResults />
      </div>
    );
  }
}

export default SelectBuilding;