import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CardsDetail from './CardsDetail';
import ScrollToTopOnMount from '../utils/ScrollToTopOnMount';

const styles = StyleSheet.create({
  container: {
    padding: '0 2rem',
  },
});

class PageSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    const data_all = this.props.data
    const chains = this.props.narrows
    console.log(data_all)
    console.log(chains)
    // TODO: 以下の処理を一つにまとめる
    let results = []
    chains.map((chain_id) => {
      console.log(`chain : ${chain_id} の処理を開始`)
      console.log(Number(chain_id))
      const filtered_data = data_all.filter((value) => {
        return value.chain_id == Number(chain_id)
      })
      console.log(filtered_data)
      results = results.concat(filtered_data);
    });
    if (chains.length === 0) {
      results = data_all
    }
    console.log(results);
    this.setState({ results: results });
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <ScrollToTopOnMount />
        <CardsDetail data={this.state.results} my_location={this.props.my_location} narrowDistance={this.props.narrowDistance} onNarrowDistanceChange={this.props.onNarrowDistanceChange} />
      </div >
    );
  }
}

export default PageSearchResults;