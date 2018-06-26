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
  resBasicInfo: {},
});

const RestaurantInfo = (props) => {
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
      </div>
      <div className={css(styles.resBasicInfo)}>
        <h3>基本情報</h3>
        <p>電話番号：<br/>{props.phone_number}</p>
        <p>住所：<br/>{props.address}</p>
      </div>
    </div>
  );
}

export default RestaurantInfo;