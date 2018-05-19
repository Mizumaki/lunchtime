import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { shadowZ3 } from '../styles/appCss';
import RestaurantInfo from './RestaurantInfo';
import iconShow from '../images/arrow_down.svg';
import iconClose from '../images/arrow_up.svg';
import imgUrl from '../images/afuri.jpg';

const styles = StyleSheet.create({
  resContainer: {
    padding: '1.3rem 2rem',
    // res-contentsのwidthと密接な関わり。気を付ける
  },

  resContents: {
    margin: '0 auto',
    minWidth: '28rem',
    width: '100%', // vwに直す
    maxWidth: '34rem',
    borderRadius: '5px',
    position: 'relative',
    ...shadowZ3,
    background: '#E5E5E5',
  },

  resImage: {
    width: '100%',
    height: '11rem', // TODO: デバイスサイズにより、動的に変更 */
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundImage: `url(${imgUrl})`,
    backgroundRepeat: 'no-repeat',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },

  resHeader: {
    position: 'absolute',
    top: '0',
    left: '0',
    fontWeight: 'bold',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認
    padding: '0 .5em',
    background: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    display: 'flex',
    justifyContent: 'space-between',
  },

  resName: {
    lineHeight: '1.3em'
  },

  resButton: {
    outline: 'none',
    height: '3rem',
  },

  resInfo: {
    fontSize: '1.6rem',
    width: '100%', // %で指定ということは、親がwidth持たなくなったら機能しない？　要確認*
    position: 'relative',
    padding: '.3rem 1rem',
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
    
    const resDetail = showDetail ? (<RestaurantInfo />) : null;

    return (
      <div className={css(styles.resContainer)}>
        <div className={css(styles.resContents)}>
          <div className={css(styles.resImage)}></div>
          <div className={css(styles.resHeader)}>
            <h2 className={css(styles.resName)}>{this.props.name}</h2>
            <button onClick={() => this.handleClick()} className={css(styles.resButton)}>{btnIcon}</button> {/* TODO: outline: none */}
          </div>
          <div className={css(styles.resInfo)}>
            <div className={css(styles.resDistance)}>{this.props.distance}</div>
            <div className={css(styles.resComment)}>{this.props.comment}</div>
            {resDetail}
          </div>
        </div>
      </div>
    );
  }
}

export default CardRestaurantDetail;