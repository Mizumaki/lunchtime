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
      is_searching: false,
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
    this.setState({is_searching: true});
    fetch(`http://localhost:3018/station/name?name=${this.state.station_name_in_search_box}`, { // `https://lunchtime-db.herokuapp.com/station/name?name=${this.state.station_name_in_search_box}`
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
          this.setState({is_searching: false});
        },
        (error) => {
          console.log(error)
          this.setState({ error });
          this.setState({is_searching: false});
        }
      )
  }

  render() {
    return (
      <div className={css(styles.wrap)}>
        <SearchBox label="駅名検索" value={this.state.station_name_in_search_box} onChange={this.handleSearchBoxChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
        <div className={css(styles.buttonWrap)}>
          <SearchButton canClick={!this.state.is_searching} onClick={this.handleSearch} string="駅を検索中" />
        </div>
      </div>
    );
  }
}

export default SearchStationName;