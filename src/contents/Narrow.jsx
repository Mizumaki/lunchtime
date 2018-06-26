import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ButtonMore from '../utils/ButtonMore';
import CircleButtons from '../utils/CircleButtons';

const styles = StyleSheet.create({
  relative: {
    position: 'relative',
  },
  moreButtonPosition: {
    position: 'absolute',
    top: '.2rem',
    left: '-2.8rem',
  },
});


const Narrow = (props) => {
  let string = "";
  let buttons = (<CircleButtons />);
  switch (props.type) {
    case "area":
      string = "- 必須：エリア・駅名・建物名";
      buttons = (<CircleButtons use="area" checkBox={false} {...props} />);
      break;
    case "chain":
      string = "- 任意：チェーン店名で絞り込む";
      buttons = (<CircleButtons use="chain_main" checkBox={true} {...props} />);
      break;
    default:
      break;
  }

  return (
    <div className={css(styles.relative)}>
      {string}
      <div className={css(styles.moreButtonPosition)} >
        <ButtonMore />
      </div>
      {buttons}
    </div>
  );
}

export default Narrow;