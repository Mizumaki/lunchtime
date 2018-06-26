/*
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { shadowZ3 } from '../styles/appCss';
import NomadInfo from './NomadInfo';
import iconShow from '../images/arrow_down.svg';
import iconClose from '../images/arrow_up.svg';

// CSSのnomadContents などを resContentsにおきかえる

const styles = StyleSheet.create({
  resContents: {
    minWidth: '28rem', // TODO: ここらへんのサイズ指定は、一つ上のcard上で行いたい
    width: '100%', // vwに直す
    maxWidth: '34rem',
    borderRadius: '5px',
    position: 'relative',
    ...shadowZ3,
    background: '#E5E5E5',
    margin: '0 auto',
    marginBottom: '2.6rem',
  },

  resHeader: {
    fontWeight: 'bold',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    justifyContent: 'space-between',
  },

  resButton: {
    outline: 'none',
    width: '100%',
    padding: '0',
    textAlign: 'center',
  },

  resName: {
    lineHeight: '1.3em',
    padding: '.5rem',
  },

  resInfo: {
    fontSize: '1.6rem',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認*
    position: 'relative',
    padding: '0 1rem',
  },

  resDistance: {
    position: 'absolute',
    top: '-3rem',
    right: '.8em',
    background: '#60493B',
    fontSize: '.9em',
    color: 'white',
    padding: '0 .5rem',
    verticalAlign: 'middle',
    borderRadius: '20px',
  },

  resComment: {
    fontSize: '1em', // .res-infoで決定したfont-sizeを引き継いでいるが、念のため 
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  nomadInfo: {
    padding: '.5rem 2rem 0 2rem',
  },

  nomadTimeDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.4rem',
  },

  nomadApplianceDetail: {
    display: 'flex',
    justifyContent: 'space-between',
  }

});

class CardNomadDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    };
  }

  handleClick() {
    this.setState({ showDetail: !this.state.showDetail });
  }

  render() {
    const showDetail = this.state.showDetail;
    const btnIcon = showDetail ?
      (<img src={iconClose} alt="" width="30px" />) : (<img src={iconShow} alt="" width="30px" />);


    const nmdp = this.props.nmdp
    // データの型がbooleanなどもあるため、ここで関数に代入しておく
    const name = nmdp.name
    const chain_name = this.props.chain_name
    const day_off = this.props.day_off
    const address = nmdp.address
    const phone_number = nmdp.phone_number

    const resDetail = showDetail ? (<NomadInfo address={address} phone_number={phone_number} location={this.props.location} />) : null;
    let has_wifi = "不明"
    switch (nmdp.has_wifi) {
      case true:
        has_wifi = "あり";
        break;
      case null:
        has_wifi = "データなし";
        break;
      case false:
        has_wifi = "なし";
        break;
      default:
        break;
    }

    let has_charge = "不明"
    switch (nmdp.has_charge) {
      case true:
        has_charge = "あり";
        break;
      case null:
        has_charge = "不明";
        break;
      case false:
        has_charge = "なし";
        break;
      default:
        break;
    }

    const weekday = `${this.props.weekday.start}～${this.props.weekday.end}`
    const saturday = `${this.props.saturday.start}～${this.props.saturday.end}`
    const sunday = (this.props.day_off == "日") ?
      "-" : `${this.props.sunday.start}～${this.props.sunday.end}`;

    const bsh = (saturday == sunday) ?
      (<div>月～金： {weekday}<br />土日： {saturday}</div>) : (<div>月～金： {weekday}<br />土： {saturday}<br />日： {sunday}</div>);
    console.log(bsh)

    return (
      <div className={css(styles.resContents)}>
        <div className={css(styles.resHeader)}>
          <div onClick={() => this.handleClick()} className={css(styles.resButton)}>
            <h2 className={css(styles.resName)}>
              {chain_name}<br />
              {name}
            </h2>
            <div className={css(styles.nomadInfo)}>
              <div>
                <div className={css(styles.nomadTimeDetail)}>
                  <div>営業<br />時間</div>
                  {bsh}
                  <div>定休日：{day_off}</div>
                </div>
                <div className={css(styles.nomadApplianceDetail)}>
                  <div>電源：</div>
                  <div>{has_charge}</div>
                  <div>無料Wifi：</div>
                  <div>{has_wifi}</div>
                </div>
              </div>
              <div>{btnIcon}</div>
            </div> 
          </div>
          <div className={css(styles.resInfo)}>
            <div className={css(styles.resDistance)}>{this.props.distance}</div>
            {resDetail}
          </div>
        </div>
      </div>
    );
  }
}

export default CardNomadDetail;
*/