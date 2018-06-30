import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Header from './core/Header';
import MenuButton from './core/MenuButton';
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages';

// あとあと消す
import './App.css';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
  },
  slide_menu_shown: {
    transform: 'translate(200px, 0)',
    transitionDuration: '300ms',
  },
  slide_menu_not_shown: {
    transform: 'translate(0, 0)',
    transitionDuration: '300ms',
  },
  overflowHidden: {
    overflow: 'hidden',
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleNarrowsChange = this.handleNarrowsChange.bind(this);
    this.handleMyLocationChange = this.handleMyLocationChange.bind(this);
    this.handleSlideMenuShown = this.handleSlideMenuShown.bind(this);
    this.state = {
      data: [{ "id": 1581, "name": "田町センタービル店", "address": "東京都港区芝５‐３４‐７ 田町センタービル", "location": "POINT (139.7469212 35.6462308)", "phone_number": "03-3451-7779", "description": null, "has_charge": false, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "0", "business_hours": [{ "id": 10812, "day": 1, "start_time": "2000-01-02T07:10:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1581, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10813, "day": 2, "start_time": "2000-01-02T07:10:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1581, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10814, "day": 3, "start_time": "2000-01-02T07:10:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1581, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10815, "day": 4, "start_time": "2000-01-02T07:10:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1581, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10816, "day": 5, "start_time": "2000-01-02T07:10:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1581, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10817, "day": 6, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T19:00:00.000+09:00", "nomad_place_id": 1581, "created_at": "2018-06-11T13:28:01.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1806, "name": "三田店", "address": "東京都港区芝５‐２７‐１２ 豊田ビル１Ｆ", "location": "POINT (139.746492 35.6470005)", "phone_number": "03-3455-8635", "description": null, "has_charge": false, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "0", "business_hours": [{ "id": 12376, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1806, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12377, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1806, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12378, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1806, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12379, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1806, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12380, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1806, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12381, "day": 6, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T15:00:00.000+09:00", "nomad_place_id": 1806, "created_at": "2018-06-11T13:29:15.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1546, "name": "三田３丁目店", "address": "東京都港区三田３‐４‐１１", "location": "POINT (139.7440613 35.6471081)", "phone_number": "03-3453-8254", "description": null, "has_charge": false, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "", "business_hours": [{ "id": 10575, "day": 0, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T18:30:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10576, "day": 1, "start_time": "2000-01-02T07:20:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10577, "day": 2, "start_time": "2000-01-02T07:20:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10578, "day": 3, "start_time": "2000-01-02T07:20:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10579, "day": 4, "start_time": "2000-01-02T07:20:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10580, "day": 5, "start_time": "2000-01-02T07:20:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10581, "day": 6, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T18:30:00.000+09:00", "nomad_place_id": 1546, "created_at": "2018-06-11T13:27:46.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 696, "name": "田町駅西口店", "address": "108-0014 東京都 港区 芝5-33-8 第一田町ビル 1F", "location": "POINT (139.746003 35.648697)", "phone_number": "03-3452-8840", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-10T20:58:54.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 4734, "day": 0, "start_time": "2000-01-01T09:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:54.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 4735, "day": 1, "start_time": "2000-01-02T06:30:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:54.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 4736, "day": 2, "start_time": "2000-01-02T06:30:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:54.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 4737, "day": 3, "start_time": "2000-01-02T06:30:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:54.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 4738, "day": 4, "start_time": "2000-01-02T06:30:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:55.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 4739, "day": 5, "start_time": "2000-01-02T06:30:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:55.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 4740, "day": 6, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 696, "created_at": "2018-06-10T20:58:55.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1705, "name": "芝浦３丁目店", "address": "東京都港区芝浦３‐１１‐７ 根本ビル１Ｆ", "location": "POINT (139.7498156 35.6427449)", "phone_number": "03-3454-3460", "description": null, "has_charge": false, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "", "business_hours": [{ "id": 11672, "day": 0, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T18:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 11673, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 11674, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 11675, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 11676, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 11677, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T20:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 11678, "day": 6, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T18:00:00.000+09:00", "nomad_place_id": 1705, "created_at": "2018-06-11T13:28:40.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }],
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
        <div className={this.state.is_slide_menu_shown? (css(styles.wrap, styles.overflowHidden)):(css(styles.wrap))}>
          <MenuButton is_menu_shown={this.state.is_slide_menu_shown} onMenuButtonClick={this.handleSlideMenuShown} />
          {main}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
