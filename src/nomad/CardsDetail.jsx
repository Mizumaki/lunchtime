import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import generateInfo from './generateInfo';
import CardDetail from './CardDetail';

const styles = StyleSheet.create({
  wrap: {
    paddingTop: '.5rem',
  },
});

const CardsDetail = (props) => {
  const my_location = props.my_location
  let count = 0;
  let dataExist = false;
  let cards = props.data.length !== 0 ?
    (props.data.map((nmdpData) => {
      dataExist = true;
      const nmdpInfo = new generateInfo(nmdpData, my_location).getArray();
      if (nmdpInfo.distance < props.narrowDistance) {
        count += 1;
        return (<CardDetail nmdp={nmdpInfo} key={nmdpData.id} />)
      } else {
        return;
      }
    })
    ) : (<p>1km以内に当サイトが検索できるカフェは0件です。</p>);
  if (count == 0 && dataExist) {
    cards = (<p>{`${props.narrowDistance}m 以内には見つかりませんでした。範囲を広くしてみてください。`}</p>)
  }
  return (
    <div className={css(styles.wrap)}>
      {cards}
    </div>
  );
}

export default CardsDetail;