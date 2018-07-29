import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    position: "fixed",
    top: '5rem',
    lef: '5rem',
    background: "grey",
  },
});

const UpperContent = (props) => {
  const content = props.is_shown ? ("a"):(null)
  return (
    <div className={css(styles.wrap)}>
      {content}
    </div>
  );
}

export default UpperContent;