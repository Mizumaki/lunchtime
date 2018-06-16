import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import searchIcon from '../images/search.svg';

const styles = StyleSheet.create({
  searchBox: {
    background: 'white',
    height: '3rem',
    width: '28rem',
    verticalAlign: 'middle',
    padding: '0 .5rem',
    margin: '0 auto',
  },

  iconSearch: {
    display: 'inline-block',
    verticalAlign: 'text-top',
  },

  searchField: {
    width: '24rem',
    /* 本当はできる限り広く取りたいが、iconとの関係上計算しなければならない */
    height: '100%',
    background: 'white',
    margin: '0 auto',
    padding: '0 .5em',
  },

});

// onChange と onFocus と value が props として必要

const SearchBox = (props) => {
  const handleChange = (e) => { props.onChange(e.target.value); }
  const handleFocus = () => {}
  const handleBlur = () => {}
  return (
    <div>
      <label for="searchBoxInSearch">{props.label}</label>
      <br />
      <div className={css(styles.searchBox)}>
        <div className={css(styles.iconSearch)}>
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" className={css(styles.searchField)} id="searchBoxInSearch" value={props.value} onChange={handleChange} onFocus={props.onFocus} onBlur={props.onBlur} >
        </input>
      </div>
    </div>
  );
}

export default SearchBox;