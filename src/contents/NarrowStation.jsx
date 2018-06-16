import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchBox from './SearchBox';

const styles = StyleSheet.create({
  wrap: {
    marginBottom: '1em',
  },
});

const NarrowStation = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <SearchBox label="駅名検索" value={props.station_name} onChange={props.onChange} />
    </div>
  );
}

export default NarrowStation;