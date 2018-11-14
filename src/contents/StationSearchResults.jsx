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

const StationSearchResults = (props) => {
  const clickStation = (e) => {
    props.onClick(e.currentTarget.id, e.currentTarget.name, e.currentTarget.dataset.location);
    console.log(e.currentTarget.dataset.location);
  }

  const results = props.data.map((station) => {
    return (
      <button className={css(styles.station)} key={station.id} id={station.id} name={station.name} data-location={station.location} onClick={clickStation}>
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

export default StationSearchResults;