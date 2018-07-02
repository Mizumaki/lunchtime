import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Brown } from '../styles/colors';
import searchIcon from '../icon/search.svg';
import { Link } from 'react-router-dom';
import TextSearch from './TextSearch';
import DrillDown from './DrillDown';
import Narrows from './Narrows';
import SearchButton from '../contents/SearchButton';

const styles = StyleSheet.create({
  container: {
    padding: '0 1rem',
    marginBottom: '5rem',
  },

  contents: {
    borderRadius: '4rem',
    padding: '1rem 2.5rem',
    background: '#FFFFFF',
    fontWeight: 'bold',
  },

  topStringDiv: {
    marginBottom: '.6rem',
    textAlign: 'center',
    color: Brown.strong,
    fontSize: '1.4em',
  },

  topString: {
    verticalAlign: 'middle', // 疑似要素と文字列の高さを揃える
    ':before': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${searchIcon})`,
      backgroundSize: '1.4em',
      width: '1.4em',
      height: '1.4em',
    },
  },

  searchWrap: {
    padding: '.5rem 1rem',
    color: Brown.dark,
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

  optionButtonsWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.7rem',
  },

  optionButton: {
    flex: '0 0 48%',
    display: 'block',
    padding: '.5rem 1rem',
    borderRadius: '5rem',
    background: 'white',
    textAlign: 'center',
  },
});

// 実際はdataを親に伝えるだけだから、constで良い？

class PageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrillDownSelectDone = this.handleDrillDownSelectDone.bind(this);
    this.handleCondition = this.handleCondition.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      is_drill_down_selected: false,
      condition: "",
      data_fetch_error: "",
      error_string: "",
    }
  }

  // 必須項目であるエリア絞り込みがなされたらtrue、未完了の場合はfalseを返す
  handleDrillDownSelectDone(boolean) {
    this.setState({ is_drill_down_selected: boolean });
  }

  // 現在の状態の変更
  handleCondition(value) {
    this.setState({ condition: value });
  }

  // エラー文の表示
  handleError(value) {
    this.setState({ data_fetch_error: value });
    // TODO: data_fetch_errorの種類によりerror_stringのstateを変える
    switch (value) {
      case "":
        this.setState({ error_string: value });
        break;
      default:
        this.setState({ error_string: "" });
        break;
    }
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.contents)}>
          <div className={css(styles.topStringDiv)}>
            <p className={css(styles.topString)}>検索</p>
          </div>
          <div className={css(styles.searchWrap)}>
            <TextSearch /> {/* 今のところ null */}
            <DrillDown onDataChange={this.props.onDataChange} onDone={this.handleDrillDownSelectDone} onCondition={this.handleCondition} onError={this.handleError} error={this.state.data_fetch_error} onMyLocationChange={this.props.onMyLocationChange} />
            <Narrows onNarrowsChange={this.props.onNarrowsChange} />
            {/* 
            <div className={css(styles.optionButtonsWrap)}>
              <button className={css(styles.optionButton)}>
                まだ決めてない
            </button>
              <button className={css(styles.optionButton)}>
                さらに見る
            </button>
            </div>
          */}
          </div>
          <div className={css(styles.searchButtonWrap)}>
            <Link to='/results'>
              <SearchButton canClick={this.state.is_drill_down_selected} default="場所を絞り込んでください！" string={this.state.condition} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PageSearch;