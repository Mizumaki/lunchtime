import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import icon from '../images/plus.svg';
import MyMapComponent from '../core/MyMapComponent';
import ButtonMore from '../utils/ButtonMore';

const styles = StyleSheet.create({
  resMenu: {
    width: '100%',
  },

  resMenuTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },

  resMenuTableRow: {
    borderBottom: '1px solid black',
  },

  resMenuTableCell: {
    padding: '.5rem 1rem',
  },

  foodNameCell: {
    textAlign: 'left',
  },

  priceCell: {
    textAlign: 'right',
  },

  moreButtonWrap: {
    textAlign: 'right',
    marginTop: '1rem',
  },

  moreButton: {
    background: 'white',
    borderRadius: '5rem',
    outline: 'none',
    '::before': {
      content: `url(${icon})`,
    }
  },

  resAbout: {},
  resImages: {},
  resReviews: {},
  resAccess: {},
  mapToApps: {
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'space-around',
  },
  mapUrl: {
    width: '45%',
    padding: '.4em',
    background: 'white',
    borderRadius: '1.3rem',
    color: 'dimgrey',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  resBasicInfo: {},
});

const NomadInfo = (props) => {
  const map_query = `?q=${props.name}&z=20`
  const ios_map_url = `http://maps.apple.com/maps${map_query}`
  const android_map_url = `http://maps.google.com/maps${map_query}`
  return (
    <div>
      {/* <div className={css(styles.resMenu)}>
        <h3>メニュー</h3>
        <table className={css(styles.resMenuTable)}>
          <tbody>
            <tr className={css(styles.resMenuTableRow)}>
              <td className={css(styles.foodNameCell, styles.resMenuTableCell)}>ゆず塩麺</td>
              <td className={css(styles.foodNameCell, styles.resMenuTableCell)}>850円</td>
            </tr>
            <tr className={css(styles.resMenuTableRow)}>
              <td className={css(styles.foodNameCell, styles.resMenuTableCell)}>ゆず塩麺</td>
              <td className={css(styles.foodNameCell, styles.resMenuTableCell)}>850円</td>
            </tr>
            <tr className={css(styles.resMenuTableRow)}>
              <td className={css(styles.foodNameCell, styles.resMenuTableCell)}>ゆず塩麺</td>
              <td className={css(styles.foodNameCell, styles.resMenuTableCell)}>850円</td>
            </tr>
          </tbody>
        </table>
        <div className={css(styles.moreButtonWrap)}>
          <ButtonMore string="もっと見る" left={true} />
        </div>
      </div> */}
      <div className={css(styles.resAccess)}>
        <p>地図 from Google</p>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbyNSrNpnNSw7vOXTHC1Kd35OP3GlmGy8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `200px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          location={props.location}
        />
        <div className={css(styles.mapToApps)}>
          <div className={css(styles.mapUrl)}><a href={ios_map_url}>iOS用マップ ＞</a></div>
          <div className={css(styles.mapUrl)}><a href={android_map_url}>Googleマップ ＞</a></div>
        </div>
      </div>  
      <div className={css(styles.resBasicInfo)}>
        <h3>基本情報</h3>
        <p>電話番号：<br/>{props.phone_number}</p>
        <p>住所：<br/>{props.address}</p>
      </div>
    </div>
  );
}

export default NomadInfo;