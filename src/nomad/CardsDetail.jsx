import React from 'react';
import generateInfo from './generateInfo';
import CardDetail from './CardDetail';

const CardsDetail = (props) => {
  const my_location = props.my_location
  const cards = props.data.length !== 0 ?
    (props.data.map((nmdpData) => {
      const nmdpInfo = new generateInfo(nmdpData, my_location).getArray();

      return (<CardDetail nmdp={nmdpInfo} key={nmdpData.id} />)
      })
    ) : (<p>検索結果は0件です。</p>)
  return (
    <div>
      {cards}
    </div>
  );
}

export default CardsDetail;