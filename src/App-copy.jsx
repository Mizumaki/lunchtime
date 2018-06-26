import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './core/Header'
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages-copy';

// あとあと消す
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleNarrowsChange = this.handleNarrowsChange.bind(this);
    this.state = {
      data: [{ "id": 1266, "name": "CIAL鶴見店", "address": "230-0051 神奈川県 横浜市鶴見区 鶴見中央1-1-2 CIAL鶴見", "location": "POINT (139.676807 35.507957)", "phone_number": "045-508-6522", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 8639, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8640, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8641, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8642, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8643, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8644, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8645, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1266, "created_at": "2018-06-11T12:39:32.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }],
      narrows: [],
    };
  }

  handleDataChange(value) {
    this.setState({data: value});
  }

  handleNarrowsChange(value) {
    this.setState({narrows: value});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <SubHeader />
          <HandlePages onDataChange={this.handleDataChange} onNarrowsChange={this.handleNarrowsChange} {...this.state}  />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
