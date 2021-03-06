import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NarrowChain from './NarrowChain';
import NarrowType from './NarrowType';

const styles = StyleSheet.create({
  wrap: {},
});

class Narrows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  componentDidMount = () => {
    this.props.onNarrowsChange([]);
  }

  render() {
    return (
      <div className={css(styles.wrap)}>
        <NarrowChain onChange={this.props.onNarrowsChange} />
        <NarrowType /> {/* 今のところnull */}
      </div>
    );
  }
}

export default Narrows;