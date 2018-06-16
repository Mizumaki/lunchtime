import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Narrow from './Narrow';
import StationSelect from '../core/StationSelect';

const styles = StyleSheet.create({
  wrap: {
    padding: '.5rem 1rem',
  },

  optionButtonsWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.7rem',
  },

  optionButton: {
    flex: '0 0 48%',
    display: 'block',
    padding: '.5rem 1rem',
    borderRadius: '5rem',
    background: 'white',
    textAlign: 'center',
  },

  none: {
    display: 'none',
  },
});

const DrillDown = (props) => {
  return (
    <div>
      <div>探す場所を選んでね！
        <div className={css(styles.wrap)}>
          <Narrow type="area" onChange={props.onAreaChange} />
          <StationSelect display={props.selecting_station} onChange={props.onSearchQueryChange} />
          <Narrow type="chain" onChange={props.onChainChange} />
          <div className={css(styles.optionButtonsWrap)}>
            <button className={css(styles.optionButton)}>
              まだ決めてない
            </button>
            <button className={css(styles.optionButton)}>
              さらに見る
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DrillDown;