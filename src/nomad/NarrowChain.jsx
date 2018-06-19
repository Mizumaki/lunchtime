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


class NarrowChain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.relative)}>
        - 任意：チェーン店名で絞り込む
        <div className={css(styles.moreButtonPosition)} >
          <ButtonMore />
        </div>
        <CircleButtons use="chain_main" checkBox={true} {...this.props} />
      </div>
    );
  }
}

export default NarrowChain;