import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import geolib from 'geolib';
import CardNomadDetail from './CardNomadDetail';

const styles = StyleSheet.create({
});

const CardsNomadDetail = (props) => {
  const my_location = props.my_location
  const cards = props.data.map((nmdp) => {
    let chain_name = ""
    switch (nmdp.chain_id) {
      case 1:
      chain_name = "スターバックス"
      break;
      case 2:
      chain_name = "ドトール"
      default:
      break;  
    }
    
    const point = nmdp.location
    const reg = /\d+\.\d+/g
    const lonlat = point.match(reg);
    const lon = lonlat[0]
    const lat = lonlat[1]
    const nmdp_location = { latitude: lat, longitude: lon }
    let distance = ""
    if (my_location != null && nmdp_location !== null) {
      const dis = geolib.getDistance(my_location, nmdp_location);
      distance = `${dis}m`
    }
    console.log(point)
    console.log(lon)
    console.log(lat)
    console.log(`${nmdp.name} - ${distance}m`);

    // TODO: Fix 日曜日の休みしか対応していない。また、複数の休みに対応していない。
    let day_off = "不定休"
    switch (nmdp.day_off) {
      case "0":
        day_off = "日";
        break;
      case "6":
        day_off = "土";
        break;
      case "0,6":
        day_off = "土、日";
        break;
      case "":
        day_off = "なし";
        break;
      default:
        break;
    }

    // 営業時間
    const cutting = (time) => {
      const reg_time = /(\d{2}:\d{2}):.+/
      const result = time.match(reg_time);
      return result[1];
    }
    const weekday = { start: cutting(nmdp.business_hours[1].start_time), end: cutting(nmdp.business_hours[1].end_time)}
    const saturday = nmdp.business_hours[6] ? { start: cutting(nmdp.business_hours[6].start_time), end: cutting(nmdp.business_hours[6].end_time)}:{};
    const sunday = nmdp.business_hours[0] ? {start: cutting(nmdp.business_hours[0].start_time), end: cutting(nmdp.business_hours[0].end_time) }:{};

    return (<CardNomadDetail nmdp={nmdp} chain_name={chain_name} distance={`${distance}`} day_off={day_off} weekday={weekday} saturday={saturday} sunday={sunday} location={nmdp_location} key={nmdp.id} />)
  })
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardsNomadDetail;