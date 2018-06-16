import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadCardRestaurantDetail from './NomadCardRestaurantDetail';

const styles = StyleSheet.create({
});

const CardsRestaurantDetail = (props) => {
  return (
    <div>
      <NomadCardRestaurantDetail name="AFURI 恵比寿" distance="200m" comment="さっぱりした味が女性に人気のラーメン屋" />
      <NomadCardRestaurantDetail name="ルワンジュ東京" distance="400m" comment="六本木にあるラグジュアリーケーキ屋さん" />
      <NomadCardRestaurantDetail name="フレンチ　シンシア" distance="300m" comment="予約が最も取れないフレンチ" />
      <NomadCardRestaurantDetail name="ラ・メゾンクルティーヌ" distance="350m" comment="阿佐ヶ谷にあるフレンチ" />
    </div>
  );
}

export default CardsRestaurantDetail;