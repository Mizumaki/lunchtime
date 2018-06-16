import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Narrow from './Narrow';
import NarrowChain from './NarrowChain';
import { Link } from 'react-router-dom';
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

  searchButtonWrap: {
    textAlign: 'center',
    padding: '1rem',
  },

  searchButton: {
    background: 'white',
    width: '100%',
    padding: '1rem',
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
          <div className={css(styles.searchButtonWrap)}>
            <Link to='/results'>
              <button className={css(styles.searchButton)}>検索する</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrillDown;