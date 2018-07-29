import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Menu from './NomadInfo/Menu';
import Access from './NomadInfo/Access';
import BasicInfo from './NomadInfo/BasicInfo';
import ChangeInfo from './ChangeInfo';
import CoverAll from '../core/CoverAll';

const styles = StyleSheet.create({
  wrap: {
    paddingBottom: '3rem',
  },
});

const NomadInfo = (props) => {
  const map_query = `?q=${props.name}&z=20`
  const ios_map_url = `http://maps.apple.com/maps${map_query}`
  const android_map_url = `http://maps.google.com/maps${map_query}`

  // 営業時間を、土日が一致するか否かで表示分け
  const bsh = (props.bsh.saturday === props.bsh.sunday) ?
    (<div>月～金： {props.bsh.weekday}<br />土日： {props.bsh.saturday}</div>) :
    (<div>月～金： {props.bsh.weekday}<br />土： {props.bsh.saturday}<br />日： {props.bsh.sunday}</div>);

  return (
    <div className={css(styles.wrap)}>
      {/* 
      <Menu />
       */}
      <ChangeInfo />
      <Access map_query={map_query} ios_map_url={ios_map_url} android_map_url={android_map_url} location={props.location} />
      <BasicInfo phone_number={props.phone_number} address={props.address} day_off={props.day_off} bsh={bsh} />
    </div>
  );
}

export default NomadInfo;