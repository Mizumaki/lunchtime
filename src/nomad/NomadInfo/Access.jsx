import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Black } from '../../styles/colors';
import iconNext from '../../icon/arrow_next.svg';
import MyMapComponent from '../../core/MyMapComponent';

const styles = StyleSheet.create({
  header: {
    padding: '1rem',
  },
  map: {
    width: '100%',
    height: '20rem',
  },
  mapToApps: {
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  mapUrlButton: {
    width: '45%',
    padding: '.4em',
    background: 'white',
    border: `1px solid ${Black.light}`,
    borderRadius: '1.3rem',
    color: Black.light,
    fontSize: '1.5rem',
    textAlign: 'center',
  },

  arrow: {
    verticalAlign: 'top',
    '::after': {
      content: `url(${iconNext})`,
      display: 'inline-block',
      width: '1em',
      height: '1em',
    },
  }
});

const Access = (props) => {
  const content = navigator.onLine ? (
    <div>
      <div className={css(styles.map)}>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbyNSrNpnNSw7vOXTHC1Kd35OP3GlmGy8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          location={props.location}
        />
      </div>
      <div className={css(styles.mapToApps)}>
        <div className={css(styles.mapUrlButton)}>
          <a href={props.ios_map_url}><p className={css(styles.arrow)}>iOS用マップ</p></a>
        </div>
        <div className={css(styles.mapUrlButton)}>
          <a href={props.android_map_url}><p className={css(styles.arrow)}>Googleマップ</p></a>
        </div>
      </div>
    </div>
  ) : (<p>sorry</p>);

  return (
    <div>
      <h3 className={css(styles.header)}>アクセス</h3>
      {content}
    </div>
  );
}

export default Access;