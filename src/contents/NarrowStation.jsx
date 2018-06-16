import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchBox from './SearchBox';

const styles = StyleSheet.create({
  wrap: {
    marginBottom: '1em',
  },
  buttonWrap: {
    textAlign: 'center',
    marginTop: '.7em',
  },
  button: {
    background: 'white',
  },
});

const NarrowStation = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <SearchBox label="駅名検索" value={props.station_name} {...props} />
      <div className={css(styles.buttonWrap)}>
        <button className={css(styles.button)} onClick={props.onClick}>検索を実行</button>
      </div>
    </div>
  );
}

export default NarrowStation;