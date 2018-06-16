import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { shadowZ3 } from '../styles/appCss';
import NomadInfo from './NomadInfo';
import iconShow from '../images/arrow_down.svg';
import iconClose from '../images/arrow_up.svg';

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

class CardRestaurantDetail extends React.Component {
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

    const resDetail = showDetail ? (<NomadInfo />) : null;

    return (
      <div className={css(styles.resContents)}>
        <div className={css(styles.resHeader)}>
          <div onClick={() => this.handleClick()} className={css(styles.resButton)}>
            <h2 className={css(styles.resName)}>
              {this.props.chainName}<br />
              {this.props.name}
            </h2>
            <div className={css(styles.nomadInfo)}>
              <div>
                <div className={css(styles.nomadTimeDetail)}>
                  <div>営業<br />時間</div>
                  <div>月～金： 07:00～21:00<br />土： 08:00～18:00</div>
                  <div>定休日：日曜日</div>
                </div>
                <div className={css(styles.nomadApplianceDetail)}>
                  <div>電源：</div>
                  <div>不明</div>
                  <div>無料Wifi：</div>
                  <div>あり</div>
                </div>
              </div>
              <div>{btnIcon}</div>
            </div> {/* TODO: outline: none */}
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

export default CardRestaurantDetail;