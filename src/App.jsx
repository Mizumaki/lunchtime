import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { menu_transform } from './styles/css';
import Header from './core/Header';
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages';
import './Nomad.css';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  main: {
    marginTop: '5rem', // Header の height: 5rem; に依存
  },
  slide_menu_shown: {
    ...menu_transform.open
  },
  slide_menu_not_shown: {
    ...menu_transform.close
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
      data: [{ "id": 1223, "name": "アトレ川崎店", "address": "210-0007 神奈川県 川崎市川崎区 駅前本町26-1 アトレ川崎", "location": "POINT (139.6978074 35.5311414)", "phone_number": "044-221-6333", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 8352, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8353, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8354, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8355, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8356, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8357, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8358, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1223, "created_at": "2018-06-11T12:35:16.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 2129, "name": "川崎アゼリア店", "address": "神奈川県川崎市川崎区駅前本町２６-２-３００１", "location": "POINT (139.6972155 35.5309336)", "phone_number": "044-211-7561", "description": null, "has_charge": true, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "", "business_hours": [{ "id": 14616, "day": 0, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 14617, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 14618, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 14619, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 14620, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 14621, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 14622, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 2129, "created_at": "2018-06-11T13:31:04.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1224, "name": "アトレ川崎 北側改札内店", "address": "210-0007 神奈川県 川崎市川崎区 駅前本町26-1 アトレ川崎 北側改札内", "location": "POINT (139.6975991 35.5316546)", "phone_number": "044-221-1525", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 8359, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8360, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8361, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8362, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8363, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8364, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8365, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1224, "created_at": "2018-06-11T12:35:22.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1222, "name": "川崎モアーズ店", "address": "210-0007 神奈川県 川崎市川崎区 駅前本町7 川崎モアーズ 2F", "location": "POINT (139.6996382 35.530542)", "phone_number": "044-200-0977", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 8345, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8346, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8347, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8348, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8349, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8350, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8351, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:30:00.000+09:00", "nomad_place_id": 1222, "created_at": "2018-06-11T12:35:10.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1543, "name": "川崎銀柳街店", "address": "神奈川県川崎市川崎区駅前本町４‐１３", "location": "POINT (139.6993014 35.5298226)", "phone_number": "044-244-8737", "description": null, "has_charge": true, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "", "business_hours": [{ "id": 10555, "day": 0, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10556, "day": 1, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10557, "day": 2, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10558, "day": 3, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10559, "day": 4, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10560, "day": 5, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 10561, "day": 6, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1543, "created_at": "2018-06-11T13:27:45.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 2367, "name": "川崎西口店", "address": "神奈川県川崎市幸区堀川町７２-２", "location": "POINT (139.6961461 35.5311002)", "phone_number": "044-276-9970", "description": null, "has_charge": true, "has_wifi": true, "chain_id": 2, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "", "business_hours": [{ "id": 16267, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 16268, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 16269, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 16270, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 16271, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 16272, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 16273, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 2367, "created_at": "2018-06-11T13:32:33.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1885, "name": "川崎ダイス店", "address": "神奈川県川崎市川崎区駅前本町８‐１４", "location": "POINT (139.7003541 35.5314724)", "phone_number": "044-246-5605", "description": null, "has_charge": true, "has_wifi": false, "chain_id": 2, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": "", "business_hours": [{ "id": 12923, "day": 0, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T21:00:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12924, "day": 1, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T21:30:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12925, "day": 2, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T21:30:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12926, "day": 3, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T21:30:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12927, "day": 4, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T21:30:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12928, "day": 5, "start_time": "2000-01-02T07:30:00.000+09:00", "end_time": "2000-01-01T21:30:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 12929, "day": 6, "start_time": "2000-01-02T08:00:00.000+09:00", "end_time": "2000-01-01T21:30:00.000+09:00", "nomad_place_id": 1885, "created_at": "2018-06-11T13:29:44.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1225, "name": "川崎 ラ チッタデッラ店", "address": "210-0023 神奈川県 川崎市川崎区 小川町4-1 LA CITTADELLA", "location": "POINT (139.6979694 35.5280918)", "phone_number": "044-223-1570", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-11T12:35:28.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 8366, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8367, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8368, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8369, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8370, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8371, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8372, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T23:00:00.000+09:00", "nomad_place_id": 1225, "created_at": "2018-06-11T12:35:29.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }, { "id": 1228, "name": "ラゾーナ川崎店", "address": "212-8576 神奈川県 川崎市幸区 堀川町72-1 ラゾーナ川崎プラザ", "location": "POINT (139.6959016 35.5330472)", "phone_number": "044-874-8359", "description": null, "has_charge": null, "has_wifi": true, "chain_id": 1, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:50:52.391+09:00", "day_off": null, "business_hours": [{ "id": 8387, "day": 0, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8388, "day": 1, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8389, "day": 2, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8390, "day": 3, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8391, "day": 4, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8392, "day": 5, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }, { "id": 8393, "day": 6, "start_time": "2000-01-02T07:00:00.000+09:00", "end_time": "2000-01-01T22:00:00.000+09:00", "nomad_place_id": 1228, "created_at": "2018-06-11T12:35:47.000+09:00", "updated_at": "2018-06-13T20:53:59.432+09:00" }] }],
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
    return (
      <BrowserRouter>
        <div className={css(styles.wrap)}>
          <Header is_menu_shown={this.state.is_slide_menu_shown} onMenuButtonClick={this.handleSlideMenuShown} />
          <div className={this.state.is_slide_menu_shown ? (css(styles.slide_menu_shown, styles.main)) : (css(styles.slide_menu_not_shown, styles.main))}>
            <SubHeader />
            <HandlePages onDataChange={this.handleDataChange} onNarrowsChange={this.handleNarrowsChange}
              onMyLocationChange={this.handleMyLocationChange} {...this.state} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
