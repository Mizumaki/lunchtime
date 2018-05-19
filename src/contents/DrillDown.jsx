import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  conditions: {
    padding: '.5rem 1rem',
  },

  condition: {
    position: 'relative',
  },

  moreButtonPosition: {
    position: 'absolute',
    top: '.2rem',
    left: '-2.8rem',
  },

  moreButton: {
    background: 'white',
    borderRadius: '5rem',
    padding: '0',
    width: '22px',
    height: '22px', //* imgのサイズと相関あり
  },

  checkBoxes: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '.5rem 0',
  },

  checkBoxWrap: {
    flex: '0 0 33%',
    display: 'flex', // 子要素のlabelをblock要素にする必要があるが、labelはdisplay: flex;をすでに指定されているので、親側でflexにすることで指定
    padding: '.7rem',
    ':before': {
      content: '""',
      display: 'block',
      paddingTop: '105%',
    }
  },

  checkBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
    borderRadius: '5rem',
    width: '100%',
    height: '100%',
  },

  checkButtonWrap: {
    flex: '0 0 50%',
    padding: '.7rem',
  },

  checkButton: {
    display: 'block',
    padding: '.5rem 1rem',
    width: '100%',
    height: '100%',
    borderRadius: '5rem',
    background: 'white',
    textAlign: 'center',
  },

  none: {
    display: 'none',
  },

  searchButtonWrap: {
    textAlign: 'center',
    padding: '1rem',
  },

  searchButton: {
    background: 'white',
    width: '100%',
    padding: '1rem',
  },

});

const DrillDown = (props) => {
  return (
    <div className={css(styles.drillDownSection)}>
      絞り込み検索（条件１ + 条件２
      <div className={css(styles.conditions)}>
        <div className={css(styles.condition)}>
          - 条件１：エリア・駅名・建物名
          <div className={css(styles.moreButtonPosition)}>
            <button className={css(styles.moreButton)}>
              <img src="./images/remove.svg" alt="" width="22px" />
            </button>
          </div>
          <div className={css(styles.checkBoxes)}>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                現在地<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                駅名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                建物名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
          </div>
        </div>
        <div className={css(styles.condition)}>
          - 条件２：食べたい料理のジャンル
          <div className={css(styles.moreButtonPosition)}>
            <button className={css(styles.moreButton)}>
              <img src="./images/remove.svg" alt="" width="22px" />
            </button>
          </div>
          <div className={css(styles.checkBoxes)}>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                現在地<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                駅名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                建物名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                現在地<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                駅名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                建物名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                現在地<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                駅名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkBoxWrap)}>
              <label className={css(styles.checkBox)}>
                建物名<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkButtonWrap)}>
              <label className={css(styles.checkButton)}>
                まだ決めてない<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
            <div className={css(styles.checkButtonWrap)}>
              <label className={css(styles.checkButton)}>
                詳細検索<input type="checkbox" className={css(styles.none)} />
              </label>
            </div>
          </div>
        </div>
        <div className={css(styles.condition)}>
          価格帯：ノーマル
          <div className={css(styles.moreButtonPosition)}>
            <button className={css(styles.moreButton)}>
              <img src="./images/remove.svg" alt="" width="22px" />
            </button>
          </div>
        </div>
        <div className={css(styles.searchButtonWrap)}>
          <button className={css(styles.searchButton)}>検索する</button>
        </div>
      </div>
    </div>
  );
}

export default DrillDown;