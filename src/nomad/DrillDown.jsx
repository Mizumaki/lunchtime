import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadDrillDown from '../contents/NomadDrillDown';
import present_location from './present_location';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
  container: {
    padding: '0 .3rem',
  },

  contents: {
    background: '#E5E5E5',
    borderRadius: '4rem',
    padding: '1rem 2.5rem',
    fontWeight: 'bold',
  },

  or: {
    textAlign: 'center',
    padding: '1rem',
  },

  searchButtonWrap: {
    textAlign: 'center',
    padding: '1rem',
  },

  searchButton: {
    background: 'white',
    width: '100%',
    padding: '1rem',
  },


});

class NomadSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_area: [],
      selected_chain: [],
      selecting_station: false,
      search_query: '',
      data: [],
      loading: false,
    }
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.handleChainChange = this.handleChainChange.bind(this);
    this.handelSearchQueryChange = this.handelSearchQueryChange.bind(this);
    this.handleSearchResultsChange = this.handleSearchResultsChange.bind(this);
  }

  // 親に伝える
  handleSearchResultsChange(value) {
    this.props.onDataChange(value);
  }

  async handleAreaChange(value) {
    this.setState({
      selected_area: value,
      loading: true,
    });

    this.props.onAreaChange(value);

    let search_by = ""
    switch (value) {
      case "現在地":
        this.setState({ selecting_station: false });
        search_by = "location";
        console.log("現在地取得に入る")
        const lonlat = await present_location.getPosition();
        this.props.onMyLocationChange(lonlat);
        const lonlat_query = `lon=${lonlat.longitude}&lat=${lonlat.latitude}`
        this.setState({ search_query: lonlat_query });
        console.log("現在地をsetState完了")
        break;
      case "駅名":
        search_by = "station";
        this.setState({ selecting_station: true }); // await すること
        console.log("駅名")
        break;
      case "建物名":
        this.setState({ selecting_station: false });
        search_by = "name";
        console.log("建物名")
        break;
      default:
        break;
    }

    console.log("fetch処理に移る")
    console.log(this.state.search_query)
    console.log("in if")
    fetch(`https://lunchtime-db.herokuapp.com/nmdp/${search_by}?${this.state.search_query}`, {
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
          this.handleSearchResultsChange(result);
          this.setState({
            data: result,
            loading: false,
          });
        },
        (error) => {
          this.setState({
            data: error,
            loading: false,
          });
        }
      )
  }

  async handelSearchQueryChange(value) {
    this.setState({ search_query: value });
    const search_query = await value
    console.log("fetch処理に移る")
    console.log(this.state.search_query)
    console.log("in if")
    fetch(`https://lunchtime-db.herokuapp.com/nmdp/station?id=${this.state.search_query}`, {
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
          this.handleSearchResultsChange(result);
          this.setState({
            data: result,
            loading: false,
          });
        },
        (error) => {
          this.setState({
            data: error,
            loading: false,
          });
        }
      )
    
  }

  handleChainChange(value) {
    this.setState({
      selected_chain: value
    });
    this.props.onChainChange(value);
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.contents)}>
          <NomadDrillDown {...this.state} onAreaChange={this.handleAreaChange} onChainChange={this.handleChainChange} onSearchQueryChange={this.handelSearchQueryChange} />
          <div className={css(styles.searchButtonWrap)}>
            <Link to='/results'>
              <button className={css(styles.searchButton)}>検索する</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NomadSearch;
