import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Black, Brown } from '../styles/colors';
import { Shadow, chainCss } from '../styles/css';
import NomadInfo from './NomadInfo';
import iconTimeAlert from '../icon/time_alert.svg'
import iconWifi from '../icon/wifi.svg';
import iconCharge from '../icon/battery.svg';
import iconCheck from '../icon/check.svg';
import iconX from '../icon/x.svg';
import iconWarning from '../icon/warning.svg';
import iconAlert from '../icon/alert.svg';
import iconShow from '../images/arrow_down.svg';
import iconClose from '../images/arrow_up.svg';

const styles = StyleSheet.create({
  cardWrap: {
    position: 'relative',
    minWidth: '28rem', // これ以下にサイズがなる場合は伸縮させない
    width: '100%',
    marginBottom: '2.6rem',
    background: '#FFFFFF',
    borderRadius: '5px',
    ...Shadow.z1,
    color: Brown.dark,
    fontWeight: 'bold',
  },

  cardHead: {
    outline: 'none',
    borderRadius: 'inherit',
    textAlign: 'center', // ボタンを真ん中に配置
  },

  nmdNameWrap: {
    padding: '.5rem 1rem 1rem 1rem',
    textAlign: 'center',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    // background や color は、チェーンの種類によりコンポーネント内で指定
  },

  bshStatus: {
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '1.2em',
  },

  todayStatusAlert: {
    position: 'absolute',
    top: '-1.8rem',
    left: '0',
    padding: '.2rem 1rem',
    background: '#CC0044',
    borderRadius: '.3rem',
    fontSize: '.9em',
    color: 'white',
    fontWeight: '500',
  },

  timeAlert: {
    verticalAlign: 'text-bottom',
    ':before': {
      content: "''",
      display: 'inline-block',
      marginRight: '.3em',
      backgroundImage: `url(${iconTimeAlert})`,
      backgroundSize: '1.3em',
      width: '1.3em',
      height: '1.3em',
    },
  },

  todayStatus: {
    padding: '.2em',
    borderRadius: '.5rem',
    fontSize: '.9em',
  },

  todayBsh: {
    fontSize: '.7em',
    opacity: '.9',
  },

  nmdNameH2: {
    lineHeight: '1.1em',
    fontWeight: 'inherit', // div に適用した場合分け済みのfont-weightを継承させる
  },

  nmdName: {
    fontSize: '.8em',
    opacity: '.9'
  },

  nomadInfo: {
    padding: '.5rem 2rem',
  },

  nomadApplianceDetail: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '1.2rem .5rem 0 .5rem',
  },

  apInfo: {
    display: 'flex',
    flex: '0 0 16rem',
    justifyContent: 'space-around',
  },

  apInfoHead: {
    verticalAlign: 'text-top',
    textAlign: 'left',
    marginRight: '.6rem',
  },

  freeWifi: {
    ':before': {
      content: "''",
      display: 'inline-block',
      marginRight: '.3em',
      backgroundImage: `url(${iconWifi})`,
      backgroundSize: '1.1em',
      width: '1em',
      height: '1.1em',
    },
  },

  charge: {
    ':before': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${iconCharge})`,
      backgroundSize: '1.1em',
      width: '1em',
      height: '1.1em',
    },
  },

  yes: {
    verticalAlign: 'top',
    ':before': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${iconCheck})`,
      backgroundSize: '1.7em',
      width: '1.7em',
      height: '1.7em',
    },
  },

  no: {
    verticalAlign: 'top',
    ':before': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${iconX})`,
      backgroundSize: '1.7em',
      width: '1.7em',
      height: '1.7em',
    },
  },

  no_data: {
    verticalAlign: 'text-top',
    ':before': {
      content: "''",
      display: 'inline-block',
      backgroundImage: `url(${iconWarning})`,
      backgroundSize: '1.3em',
      width: '1.5em',
      height: '1.5em',
    },
  },

  alert: {
    marginTop: '1.3rem',
    fontSize: '.7em',
    ':before': {
      content: "''",
      display: 'block',
      marginBottom: '-1em',
      marginLeft: '-.5em',
      backgroundImage: `url(${iconAlert})`,
      backgroundSize: '1.8em',
      width: '1.8em',
      height: '1.8em',
    },
  },

  cardDetail: {
    fontSize: '1.6rem',
    width: '100%',
    position: 'relative',
    padding: '0 1rem',
  },

  nmdDistance: {
    position: 'absolute',
    top: '-3rem',
    right: '.8em',
    background: Brown.strong,
    fontSize: '.9em',
    color: 'white',
    padding: '0 .5rem',
    verticalAlign: 'middle',
    borderRadius: '20px',
  },

});

class CardDetail extends React.Component {
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
    const nmdp = this.props.nmdp

    const showDetail = this.state.showDetail;
    const btnIcon = showDetail ?
      (<img src={iconClose} alt="" width="30px" />) : (<img src={iconShow} alt="" width="30px" />);

    const resDetail = showDetail ?
      (<NomadInfo address={nmdp.address} phone_number={nmdp.phone_number} location={nmdp.location} name={`${nmdp.chain_name}${nmdp.name}`} bsh={nmdp.bsh} day_off={nmdp.day_off} />) : null;

    // h2 の親のdivの背景色、文字色をチェーンによって場合分け
    const nmdNameWrapStyle = (() => {
      switch (nmdp.chain_name) {
        case "スターバックス":
          return chainCss.starbucks
        case "ドトール":
          return chainCss.doutor
        default:
          return { background: '#FFFFFF', color: Black.normal, fontWeight: 'bold', }
      }
    })();

    const status = (() => {
      switch (nmdp.status) {
        case "営業中":
          return (<div className={css(styles.todayStatus)}>{nmdp.status}</div>);
        case "営業時間外":
          return (<div className={css(styles.todayStatusAlert)}>{nmdp.status}</div>)
        case "営業終了まで残り1時間以内":
          return (<div className={css(styles.todayStatusAlert, styles.timeAlert)}>{nmdp.status}</div> ,
            <div className={css(styles.todayStatus)}>営業中</div>)
        case "営業終了まで残り30分以内":
          return (<div className={css(styles.todayStatusAlert, styles.timeAlert)}>{nmdp.status}</div> ,
            <div className={css(styles.todayStatus)}>営業中</div>)
        default:
          break;
      }
    })();

    const hasBranch = (value) => {
      switch (value) {
        case "あり":
          return (<div className={css(styles.yes)}>{value}</div>);
        case "なし":
          return (<div className={css(styles.no)}>{value}</div>);
        case "情報なし":
          return (<div className={css(styles.no_data)}>{value}</div>)
        default:
          return (<div className={css(styles.no_data)}>エラー</div>);
      }
    }

    const wifi = hasBranch(nmdp.has_wifi);
    const charge = hasBranch(nmdp.has_charge);

    const alert = nmdp.has_wifi === "情報なし" || nmdp.has_charge === "情報なし" ?
      (null) : (null);
      // TODO : 情報更新が可能になったら、表示するようにする
      // (<div><p className={css(styles.alert)}>情報がないデータがあります。<br />あなたの助けが必要です。データを更新してください！</p></div>) : (null);

    return (
      <div className={css(styles.cardWrap)}>
        <div className={css(styles.cardHead)} onClick={() => this.handleClick()}>
          <div className={css(styles.nmdNameWrap)} style={nmdNameWrapStyle} >
            <div className={css(styles.bshStatus)}>
              {status}
              <p className={css(styles.todayBsh)}>本日の営業時間　{nmdp.bsh.today}</p>
            </div>
            <h2 className={css(styles.nmdNameH2)}>
              {nmdp.chain_name}<br />
              <span className={css(styles.nmdName)}>{nmdp.name}</span>
            </h2>
          </div>
          <div className={css(styles.nomadApplianceDetail)}>
            <div className={css(styles.apInfo)}>
              <div className={css(styles.apInfoHead, styles.freeWifi)}>Wifi</div>
              {wifi}
            </div>
            <div className={css(styles.apInfo)}>
              <div className={css(styles.apInfoHead, styles.charge)}>電源</div>
              {charge}
            </div>
            {alert}
          </div>
          <div>{btnIcon}</div>
        </div>
        <div className={css(styles.cardDetail)}>
          <div className={css(styles.nmdDistance)}>{nmdp.distance}</div>
          {resDetail}
        </div>
      </div>
    );
  }
}

export default CardDetail;