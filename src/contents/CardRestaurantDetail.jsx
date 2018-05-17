import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { shadowZ3 } from '../styles/appCss';

const imgUrl = '../images/afuri.jpg'

const styles = StyleSheet.create({
  resContainer: {
    padding: '1.3rem 2rem',
    // res-contentsのwidthと密接な関わり。気を付ける
  },

  resContents: {
    minHeight: '11.7rem',
    height: '37vw', // 動作未確認　vwでheightを定義
    maxHeight: '14rem',
    margin: '0 auto',
    minWidth: '28rem',
    width: '100%', // vwに直す
    maxWidth: '34rem',
    borderRadius: '5px',
    position: 'relative',
    ...shadowZ3,
    background: '#E5E5E5',
  },

  resImage: {
    width: '100%',
    height: '10.9rem', // TODO: ここはもう少し、デバイス見て確認する必要あり */
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat: 'no-repeat',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },

  resName: {
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: '2.4rem',
    fontWeight: 'bold',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認
    padding: '.1em .5em',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0', 
  },

  resInfo: {
    fontSize: '1.6rem',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認*
    position: 'relative',
    padding: '.3rem 1rem',
  },

  resDistance: {
    position: 'absolute',
    top: '-3rem',
    right: '.8em',
    background: '#60493B',
    fontSize: '.9em',
    color: 'white',
    padding: '0 .5rem',
    verticalAlign: 'middle',
    borderRadius: '20px',
  },

  resComment: { 
    fontSize: '1em', // .res-infoで決定したfont-sizeを引き継いでいるが、念のため */
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

});

const backImage = {
  width: '100%',
  height: '10.9rem', // TODO: ここはもう少し、デバイス見て確認する必要あり */
  backgroundPosition: 'top center',
  backgroundSize: 'cover',
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundRepeat: 'no-repeat',
  borderRadius: 'inherit',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
}

const CardRestaurantDetail = (props) => {
  return (
    <div className={css(styles.resContainer)}>
      <div className={css(styles.resContents)}>
        <div style={backImage}></div>
        <div className={css(styles.resName)}>{props.name}</div>
        <div className={css(styles.resInfo)}>
          <div className={css(styles.resDistance)}>{props.distance}</div>
          <div className={css(styles.resComment)}>{props.comment}</div>
        </div>
      </div>
    </div>
  );
}

export default CardRestaurantDetail;