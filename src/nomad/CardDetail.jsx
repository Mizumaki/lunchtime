import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Black, Brown } from '../styles/colors';
import { Shadow, chainCss } from '../styles/css';
import NomadInfo from './NomadInfo';
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
    fontWeight: 'bold',
  },

  cardHead: {
    outline: 'none',
    borderRadius: 'inherit',
    textAlign: 'center', // ボタンを真ん中に配置
  },

  nmdNameDiv: {
    padding: '.5rem',
    textAlign: 'center',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },

  nmdName: {
    lineHeight: '1.3em',
    fontWeight: 'inherit', // div に適用した場合わけ済みのfont-weightを継承させる
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
    const showDetail = this.state.showDetail;
    const btnIcon = showDetail ?
      (<img src={iconClose} alt="" width="30px" />) : (<img src={iconShow} alt="" width="30px" />);

    const nmdp = this.props.nmdp

    const resDetail = showDetail ?
      (<NomadInfo address={nmdp.address} phone_number={nmdp.phone_number} location={nmdp.location} name={`${nmdp.chain_name}${nmdp.name}`} />) : null;

    // 営業時間を、土日が一致するか否かで表示分け
    const bsh = (nmdp.bsh.saturday === nmdp.bsh.sunday) ?
      (<div>月～金： {nmdp.bsh.weekday}<br />土日： {nmdp.bsh.saturday}</div>) :
      (<div>月～金： {nmdp.bsh.weekday}<br />土： {nmdp.bsh.saturday}<br />日： {nmdp.bsh.sunday}</div>);

    // h2 の親のdivの背景色、文字色をチェーンによって場合分け
    const nmdNameDivStyle = (() => {
      switch (nmdp.chain_name) {
        case "スターバックス":
          return chainCss.starbucks
        case "ドトール":
          return chainCss.doutor
        default:
          return { background: '#FFFFFF', color: Black.normal, fontWeight: 'bold', }
      }
    })();

    return (
      <div className={css(styles.cardWrap)}>
        <div className={css(styles.cardHead)} onClick={() => this.handleClick()}>
          <div className={css(styles.nmdNameDiv)} style={nmdNameDivStyle} >
            <h2 className={css(styles.nmdName)}>
              {nmdp.chain_name}<br />
              {nmdp.name}
            </h2>
          </div>
          <div className={css(styles.nomadInfo)}>
            <div className={css(styles.nomadTimeDetail)}>
              <div>営業<br />時間</div>
              {bsh}
              <div>定休日：{nmdp.day_off}</div>
            </div>
            <div className={css(styles.nomadApplianceDetail)}>
              <div>電源：</div>
              <div>{nmdp.has_charge}</div>
              <div>無料Wifi：</div>
              <div>{nmdp.has_wifi}</div>
            </div>
            <div>{btnIcon}</div>
          </div>
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