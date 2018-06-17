import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    margin: '1rem',
    background: 'white',
    border: '1px solid grey',
  },
  station: {
    width: '100%',
    height: '3em',
    borderBottom: '1px solid grey',
  },
  name: {
    fontSize: '1.5em',
    marginRight: '1rem',
  },
  company: {
    color: 'dimgrey',
  },
});

class StationsResults extends React.Component {
  constructor(props) {
    super(props);
    this.clickStation = this.clickStation.bind(this);
  }

  clickStation(e) {
    this.props.onClick(e.currentTarget.value);
    console.log(e.currentTarget.value);
    console.log("its me")
  }

  render() {
    //const clickStation = (e) => { this.props.onClick(e.target.value); console.log(e.target.value); console.log("its me")}
    const results = this.props.stations.map((station) => {
      return (
        <button className={css(styles.station)} key={station.id} value={station.id} onClick={this.clickStation}>
          <span className={css(styles.name)}>{station.name}</span>
          <span className={css(styles.company)}>{station.company_name}</span>
        </button>
      )
    })
    return (
      <div className={css(styles.wrap)}>
        {results}
      </div>
    );
  }
}

export default StationsResults;