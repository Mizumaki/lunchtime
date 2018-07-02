import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Header from './core/Header';
import MenuButton from './core/MenuButton';
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages';
import './Nomad.css';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  slide_menu_shown: {
    transform: 'translate(200px, 0)',
    transitionDuration: '300ms',
  },
  slide_menu_not_shown: {
    transform: 'translate(0, 0)',
    transitionDuration: '500ms',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleNarrowsChange = this.handleNarrowsChange.bind(this);
    this.handleMyLocationChange = this.handleMyLocationChange.bind(this);
    this.handleSlideMenuShown = this.handleSlideMenuShown.bind(this);
    this.state = {
      data: [{"id":1266,"name":"CIAL鶴見店","address":"230-0051 神奈川県 横浜市鶴見区 鶴見中央1-1-2 CIAL鶴見","location":"POINT (139.676807 35.507957)","phone_number":"045-508-6522","description":null,"has_charge":null,"has_wifi":true,"chain_id":1,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:50:52.391+09:00","day_off":null,"business_hours":[{"id":8639,"day":0,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"},{"id":8640,"day":1,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"},{"id":8641,"day":2,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"},{"id":8642,"day":3,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"},{"id":8643,"day":4,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"},{"id":8644,"day":5,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"},{"id":8645,"day":6,"start_time":"2000-01-02T07:00:00.000+09:00","end_time":"2000-01-01T22:30:00.000+09:00","nomad_place_id":1266,"created_at":"2018-06-11T12:39:32.000+09:00","updated_at":"2018-06-13T20:53:59.432+09:00"}]}],
      narrows: [],
      my_location: { latitude: '', longitude: '' },
      is_slide_menu_shown: false,
    };
  }

  handleDataChange(value) {
    this.setState({ data: value });
  }

  handleNarrowsChange(value) {
    this.setState({ narrows: value });
  }

  handleMyLocationChange(lonlat) {
    this.setState({ my_location: lonlat });
  }

  handleSlideMenuShown() {
    this.setState({ is_slide_menu_shown: !this.state.is_slide_menu_shown });
  }

  render() {
    const main = this.state.is_slide_menu_shown ? (
      <div className={css(styles.wrap, styles.slide_menu_shown)}>
        <Header />
        <SubHeader />
        <HandlePages onDataChange={this.handleDataChange} onNarrowsChange={this.handleNarrowsChange} onMyLocationChange={this.handleMyLocationChange} {...this.state} />
      </div>
    ) : (
        <div className={css(styles.wrap, styles.slide_menu_not_shown)}>
          <Header />
          <SubHeader />
          <HandlePages onDataChange={this.handleDataChange} onNarrowsChange={this.handleNarrowsChange} onMyLocationChange={this.handleMyLocationChange} {...this.state} />
        </div>
      );

    return (
      <BrowserRouter>
        <div className={css(styles.wrap)}>
          <MenuButton is_menu_shown={this.state.is_slide_menu_shown} onMenuButtonClick={this.handleSlideMenuShown} />
          {main}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
