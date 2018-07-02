import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {logoColor} from '../styles/colors';
import { Shadow } from '../styles/css';
import NomadInfo from './NomadInfo';
import iconShow from '../images/arrow_down.svg';
import iconClose from '../images/arrow_up.svg';

const styles = StyleSheet.create({
  resContents: {
    position: 'relative',
    minWidth: '28rem', // これ以下にサイズがなる場合は伸縮させない
    width: '100%',
    marginBottom: '2.6rem',
    background: '#FFFFFF',
    borderRadius: '5px',
    ...Shadow.z1,
    fontWeight: 'bold',
  },

  resHeader: {
    width: '100%',
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
    background: logoColor.starbucks,
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
    fontSize: '1em', // .res-infoで決定したfont-sizeを引き継いでいるが、念のため */
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
      



    const bsh = (nmdp.bsh.saturday == nmdp.bsh.sunday) ?
      (<div>月～金： {nmdp.bsh.weekday}<br />土日： {nmdp.bsh.saturday}</div>) : 
      (<div>月～金： {nmdp.bsh.weekday}<br />土： {nmdp.bsh.saturday}<br />日： {nmdp.bsh.sunday}</div>);
    console.log(bsh)

    return (
      <div className={css(styles.resContents)}>
        <div className={css(styles.resButton)} onClick={() => this.handleClick()}>
          <h2 className={css(styles.resName)}>
            {nmdp.chain_name}<br />
            {nmdp.name}
          </h2>
          <div className={css(styles.nomadInfo)}>
            <div>
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
            </div>
            <div>{btnIcon}</div>
          </div>
        </div>
        <div className={css(styles.resInfo)}>
          <div className={css(styles.resDistance)}>{nmdp.distance}</div>
          {resDetail}
        </div>
      </div>
    );
  }
}

export default CardDetail;