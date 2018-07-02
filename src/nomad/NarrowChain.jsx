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
        <p>STEP2 : チェーンで絞り込む</p>
        <div className={css(styles.moreButtonPosition)} >
          <ButtonMore />
        </div>
        <CircleButtons use="chain_main" checkBox={true} onChange={this.props.onChange} {...this.props} />
      </div>
    );
  }
}

export default NarrowChain;