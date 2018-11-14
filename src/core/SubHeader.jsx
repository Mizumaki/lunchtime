import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SelctBox from '../utils/SelectBox';
import SelectBox from '../utils/SelectBox';

const styles = StyleSheet.create({
  wrap: {
    display:  'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '1.8rem',
    padding: '1.5rem 0',
    maxWidth: '36rem',
    margin: '0 auto'
  },

  item: {
    flex: '1 1 0',
    width: '33%',
    textAlign: 'center'
  },

  active: {
    width: '90%',
    margin: '0 5% 0 5%',
    color: '#FAAF3B',
    fontWeight: 'bold',
    borderBottom: '4px solid #FAAF3B'
  },
});

const SubHeader = (props) => {
  const path = window.location.pathname
  const condition = (() => {
    switch (true) {
      case path == "/":
        return "トップページ"
      case /\/search*./.test(path):
        return "絞り込み検索"
      case /\/results*./.test(path):
        return "検索結果"
      default:
        return null
    }
  })();
  return (
    <div className={css(styles.wrap)}>
      <div className={css(styles.item)}></div>
      <div className={css(styles.item)}>
        <div className={css(styles.active)}>
          {condition}
        </div>
      </div>
      <div className={css(styles.item)}>
        {window.location.pathname == "/results" ? <SelectBox type="distance" now={props.narrowDistance} onChange={props.onNarrowDistanceChange} /> : null}
      </div>
    </div>
  );
}

export default SubHeader;
