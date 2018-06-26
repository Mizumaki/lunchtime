import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    background: 'white',
    width: '100%',
    padding: '1rem',
},
  searchButton: {
    width: '100%',
  },
});

// can_click, onClick, defalult, error を props に持つ
const SearchButton = (props) => {
  const message = props.string ? (props.string) : (props.default);
  const search_button = props.canClick ?
    (<button className={css(styles.searchButton)} onClick={props.onClick} >検索する</button>) :
    (<button className={css(styles.searchButton)} disabled="true" >{message}</button>);

  return (
    <div className={css(styles.wrap)}>
      {search_button}
    </div>
  );
}

export default SearchButton;