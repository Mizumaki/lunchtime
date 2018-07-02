import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    zIndex: '1000',
  },
  notShown: {
    position: 'fixed',
    top: '0',
    left: '-100%',
    opacity: '0',
    pointerEvents: 'none',
  },
  shown: {
    position: 'fixed',
    top: '0',
    left: '0',
    opacity: '1',
    pointerEvents: 'auto',
    //background: 'rgba(0, 0, 0, 0.54)',
  },
});

const CoverAll = (props) => {
  const div = props.is_shown ?
    (<div className={css(styles.wrap, styles.shown)} onClick={props.onClick} ></div>) :
    (<div className={css(styles.wrap, styles.notShown)}></div>);
  return(
    div
  );
}

export default CoverAll;