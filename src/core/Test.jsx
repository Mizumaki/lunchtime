import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
});

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://lunchtime-db.herokuapp.com/res/name?name=牛タンと焼き鳥のお店%20くぐい", {
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const programsData = this.state.data
    const programs = programsData.map((program) => {
      const a = program['name']
      return (
        <p>{a}</p>
      );
    });

    return (
      <h2>{programs}</h2>
    );
  }
}

export default Test;