import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import generateInfo from './generateInfo';
import geolib from 'geolib';
import CardDetail from './CardDetail';

const styles = StyleSheet.create({
});

const CardsDetail = (props) => {
  const my_location = props.my_location
  const cards = props.data.length !== 0 ? 
  (props.data.map((nmdpData) => {
    const nmdpInfo = new generateInfo(nmdpData, my_location).getArray()
    return (
      <CardDetail nmdp={nmdpInfo} />
      //<CardDetail nmdp={nmdp} chain_name={nmdp.chain_name} distance={`${nmdp.distance}`} day_off={nmdp.day_off} weekday={nmdp.bsh.weekday} saturday={nmdp.bsh.saturday} sunday={nmdp.bsh.sunday} location={nmdp.location} key={nmdp.id} />
    )})
  ) : (<p>検索結果は0件です。</p>)
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardsDetail;