import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    padding: '1rem',
  },

  table: {
    width: '100%',
    fontSize: '.8em',
  },

  th: {
    width: '35%',
  },

  td: {
    padding: '.5rem',
  },
});

const BasicInfo = (props) => {
  return (
    <div>
      <h3 className={css(styles.header)}>基本情報</h3>
      <table className={css(styles.table)}>
        <tbody>
          <tr>
            <th className={css(styles.th)}>電話番号</th>
            <td className={css(styles.td)}>{props.phone_number}</td>
          </tr>
          <tr>
            <th className={css(styles.th)}>住所</th>
            <td className={css(styles.td)}>{props.address}</td>
          </tr>
          <tr>
            <th className={css(styles.th)}>営業時間</th>
            <td className={css(styles.td)}>{props.bsh}</td>
          </tr>
          <tr>
            <th className={css(styles.th)}>定休日</th>
            <td className={css(styles.td)}>{props.day_off}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BasicInfo;