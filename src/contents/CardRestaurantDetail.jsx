import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
});

const CardRestaurantDetail = (props) => {
  return (
    <div className='res-container'>
      <div className='res-contents z-depth-3'>
        <div className='res-name'>{props.name}</div>
        <div className='res-info'>
          <div className='res-distance'>{props.distance}</div>
          <div className='res-comment'>{props.comment}</div>
        </div>
      </div>
    </div>
  );
}

export default CardRestaurantDetail;