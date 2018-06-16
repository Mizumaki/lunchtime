import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NomadCardRestaurantDetail from './NomadCardRestaurantDetail';

const styles = StyleSheet.create({
});

const CardsRestaurantDetail = (props) => {
  return (
    <div>
      <NomadCardRestaurantDetail chainName="マクドナルド" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="スターバックス" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="ドトール" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="サンマルクカフェ" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="タリーズ" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="ベローチェ" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="プロント" name="恵比寿店" distance="200m"/>
      <NomadCardRestaurantDetail chainName="エクセルシオール" name="恵比寿店" distance="400m"/>
      <NomadCardRestaurantDetail chainName="カフェドクリエ" name="恵比寿店" distance="300m"/>
      <NomadCardRestaurantDetail chainName="上島珈琲" name="恵比寿店" distance="350m"/>
      <NomadCardRestaurantDetail chainName="コメダ珈琲" name="恵比寿店" distance="350m"/>
      <NomadCardRestaurantDetail chainName="ルノアール" name="恵比寿店" distance="350m"/>
      <NomadCardRestaurantDetail chainName="カフェミヤマ" name="恵比寿店" distance="350m"/>
    </div>
  );
}

export default CardsRestaurantDetail;