import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
});

const SubHeader = (props) => {
  return (
    <div className='under-header-menu'>
      <Link to='/'><div className='button'>近い順</div></Link>
      <Link to='/room'><div className='button active'>人気順</div></Link>
        <Link to='/friends'><div className='button'>新着順</div></Link>
    </div>
  );
}

export default SubHeader;
