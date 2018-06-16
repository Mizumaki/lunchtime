import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  subHeaderMenu: {
    minHeight: '3.5rem',
    height: '6.1 %',
    maxHeight: '4rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.8rem',
    margin: '1.5rem 0 1rem 0',
  },

  active: {
    color: '#FAAF3B',
    fontWeight: 'bold',
    borderBottom: '4px solid #FAAF3B',
  },
});

const SubHeader = (props) => {
  return (
    <div className={css(styles.subHeaderMenu)}>
      <div className={css(styles.active)}>近い順</div>
      {/*   
      <div>近い順</div>
      <div className={css(styles.active)}>人気順</div>
      <div>新着順</div>
    */}
    </div>
  );
}

export default SubHeader;
