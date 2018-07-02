import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  wrap: {
    display:  'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '1.8rem',
    padding: '1.5rem 0',
  },

  active: {
    color: '#FAAF3B',
    fontWeight: 'bold',
    borderBottom: '4px solid #FAAF3B',
  },
});

const SubHeader = (props) => {
  const path = window.location.pathname
  const condition = (() => {
    switch (true) {
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
      <div className={css(styles.active)}>{condition}</div>
    </div>
  );
}

export default SubHeader;
