import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SearchBox from '../contents/SearchBox';
import SearchButton from './SearchButton';

const styles = StyleSheet.create({
  wrap: {
    marginBottom: '1em',
  },
  buttonWrap: {
    width: '50%',
    margin: '0 auto',
    marginTop: '.7em',
  },
});

class SearchStationName extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      search_box_is_focused: false, // 今のところ使われていない
      station_name_in_search_box: "",
    };
  }

  handleSearchBoxChange(value) {
    this.setState({ station_name_in_search_box: value });
  }

  handleFocus() {
    this.setState({ search_box_is_focused: true });
  }

  handleBlur() {
    this.setState({ search_box_is_focused: false });
  }

  handleSearch() {
    console.log("search station")
    fetch(`https://lunchtime-db.herokuapp.com/station/name?name=${this.state.station_name_in_search_box}`, { // `http://localhost:3018/station/name?name=${this.state.station_name_in_search_box}`
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.props.onDataChange(result);
        },
        (error) => {
          console.log(error)
          this.setState({ error });
        }
      )
  }

  render() {
    return (
      <div className={css(styles.wrap)}>
        <SearchBox label="駅名検索" value={this.state.station_name_in_search_box} onChange={this.handleSearchBoxChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
        <div className={css(styles.buttonWrap)}>
          <SearchButton canClick={true} onClick={this.handleSearch} default="駅名を入力してください" />
        </div>
      </div>
    );
  }
}

export default SearchStationName;