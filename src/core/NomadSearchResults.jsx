import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadCardsRestaurantDetail from '../contents/NomadCardsRestaurantDetail';

const styles = StyleSheet.create({
  container: {
    padding: '0 2rem',
  },
});

// data と chains を props にもつ
class NomadSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    const data_all = this.props.data
    const chains = this.props.chains
    console.log(data_all)
    console.log(chains)
    let results = []
    chains.map((chain_id) => {
      console.log(`chain : ${chain_id} の処理を開始`)
      console.log(Number(chain_id))
      const filtered_data = data_all.filter((value) => {
        return value.chain_id == Number(chain_id)
      });
      console.log(filtered_data)
      results = results.concat(filtered_data);
    });
    console.log(results); 
    this.setState({results: results});
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <NomadCardsRestaurantDetail />
      </div >
    );
  }
}

export default NomadSearchResults;