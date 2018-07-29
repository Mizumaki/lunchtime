import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrap: {
    zIndex: '1200',
    position: 'fixed',
    top: '0',
    left: '0',
    background: 'red',
  },
});

const ChangeInfo = (props) => {
  return (
    <div className={css(styles.wrap)}>
      <form action="http://localhost:3018/nmdp/update" method="post">
        <label>Wifi :</label>
        <p>
          <input type="radio" name="wifi" value="true" />あり
        <input type="radio" name="wifi" value="false" />なし
      </p>
        <p><input type="submit" value="送信する" /></p>
      </form>
    </div>
  );
}

export default ChangeInfo;