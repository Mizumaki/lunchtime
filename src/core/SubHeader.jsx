import React from 'react';
import {StyleSheet,css} from 'aphrodite';

const styles = StyleSheet.create({
});

const SubHeader = (props) => {
  return (
    <div className='under-header-menu'>
      <div className='button'>近い順</div>
      <div className='button active'>人気順</div>
      <div className='button'>新着順</div>
    </div>
  );
}

export default SubHeader;
