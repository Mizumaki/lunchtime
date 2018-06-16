import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadDrillDown from '../contents/NomadDrillDown';
import NarrowNomad from '../contents/NarrowNomad';
import present_location from './present_location';

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

});

class PageSearch extends React.Component {
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
  }

  async handleAreaChange(value) {
    this.setState({
      selected_area: value,
      loading: true,
    });

    let search_by = ""
    switch (value) {
      case "現在地":
        this.setState({ selecting_station: false });
        search_by = "location";
        this.setState({ search_query: await present_location.getPosition() });
        console.log("現在地")
        break;
      case "駅名":
        search_by = "station";
        this.setState({ selecting_station: !this.state.selecting_station });
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

    console.log(this.state.search_query)

    fetch(`ttps://lunchtime-db.herokuapp.com/nmdp/${search_by}?${this.state.search_query}`, {
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

  handelSearchQueryChange(value) {
    this.setState({ search_query: value });
  }

  handleChainChange(value) {
    this.setState({
      selected_chain: value
    });
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.contents)}>
          <NomadDrillDown {...this.state} onAreaChange={this.handleAreaChange} onChainChange={this.handleChainChange} onSearchQueryChange={this.handelSearchQueryChange} />
          <NarrowNomad chains={this.state.selected_chain} />
        </div>
      </div>
    );
  }
}

export default PageSearch;
