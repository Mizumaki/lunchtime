import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
    background: '#E5E5E5',
    position: 'relative',
  },

  resName: {
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: '2.4rem',
    fontWeight: 'bold',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認
    padding: '.1em .5em',
  },

  resInfo: {
    fontSize: '1.6rem',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認*
    height: '4.2em', // ここの高さで、.res-distanceと.res-commentの距離を調整*/
    position: 'absolute',
    bottom: '0',
    left: '0',
  },

  resDistance: {
    position: 'absolute',
    top: '0',
    right: '.8em',
    background: '#60493B',
    fontSize: '.9em',
    color: 'white',
    padding: '0 .5rem',
    verticalAlign: 'middle',
    borderRadius: '20px',
  },

  resComment: { // TODO: 2行にしないように工夫が必要 
    position: 'absolute',
    bottom: '0',
    left: '0',
    fontSize: '1em', // .res-infoで決定したfont-sizeを引き継いでいるが、念のため */
    fontWeight: 'bold',
    padding: '.3em .5em',
    overflow: 'hidden',
  },

});

const CardRestaurantDetail = (props) => {
  return (
    <div className={css(styles.resContainer)}>
      <div className={css(styles.resContents)}>
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