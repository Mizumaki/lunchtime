import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import IconSearch from '../icon/IconSearch';

const styles = StyleSheet.create({
  searchBox: {
    height: '3rem',
    width: '28rem',
    verticalAlign: 'middle',
    background: 'white',
    padding: '0px 0.5rem',
    margin: '0px auto',
  },

  iconSearch: {
    display: 'inline-block',
    verticalAlign: 'text-top',
  },

  searchField: {
    width: '24rem',
    height: '100%',
    margin: '0px auto',
    padding: '0px 0.5em',
    border: `1px solid black`,
  },
});

// onChange と onFocus と onBlur と value が props として必要
const SearchBox = (props) => {
  const handleChange = (e) => { props.onChange(e.target.value); }
  return (
    <div>
      <label for="searchBoxInSearch">{props.label}</label>
      <br />
      <div className={css(styles.searchBox)}>
        <div className={css(styles.iconSearch)}>
          <IconSearch color="black" size="24" />
        </div>
        <input type="text" className={css(styles.searchField)} id="searchBoxInSearch" value={props.value} onChange={handleChange} onFocus={props.onFocus} onBlur={props.onBlur} >
        </input>
      </div>
    </div>
  );
}

export default SearchBox;