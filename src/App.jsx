import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { menu_transform } from './styles/css';
import Header from './core/Header';
import SubHeader from './core/SubHeader';
import HandlePages from './core/HandlePages';
import CoverAll from './core/CoverAll';
import './Nomad.css';
import UpperContent from './nomad/UpperContent';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  main: {
    paddingTop: '5rem', // Header の height: 5rem; に依存
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
    this.handleNarrowDistanceChange = this.handleNarrowDistanceChange.bind(this);
    this.handleMyLocationChange = this.handleMyLocationChange.bind(this);
    this.handleSlideMenuShown = this.handleSlideMenuShown.bind(this);
    this.state = {
      data: [],
      narrowDistance: 500,
      narrows: [],
      my_location: { latitude: '', longitude: '' },
      is_slide_menu_shown: false,
      is_cover_all_shown: false,
      is_upper_content_shown: false,
      upper_content: "",
    };
  }

  handleDataChange(value) {
    this.setState({ data: value });
  }

  handleNarrowsChange(value) {
    this.setState({ narrows: value });
  }

  handleNarrowDistanceChange(value) {
    this.setState({ narrowDistance: value });
  }

  handleMyLocationChange(lonlat) {
    this.setState({ my_location: lonlat });
  }

  handleSlideMenuShown() {
    this.setState({ is_slide_menu_shown: !this.state.is_slide_menu_shown });
  }

  handleCoverAllShown() {
    this.setState({ is_cover_all_shown: !this.state.is_cover_all_shown });
  }

  handleUpperContentChange(value) {
    this.setState({ upper_content: value })
  }

  handleUpperContentShown() {
    this.setState({ is_upper_content_shown: !this.state.is_upper_content_shown });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={css(styles.wrap)}>
          <Header is_menu_shown={this.state.is_slide_menu_shown} onMenuButtonClick={this.handleSlideMenuShown} />
          <div className={this.state.is_slide_menu_shown ? (css(styles.slide_menu_shown, styles.main)) : (css(styles.slide_menu_not_shown, styles.main))}>
            <SubHeader onNarrowDistanceChange={this.handleNarrowDistanceChange} narrowDistance={this.state.narrowDistance} />
            <HandlePages onDataChange={this.handleDataChange} onNarrowsChange={this.handleNarrowsChange}
              onNarrowDistanceChange={this.handleNarrowDistanceChange}
              onMyLocationChange={this.handleMyLocationChange} onCoverAllShown={this.handleCoverAllShown}
              onUpperContentChange={this.handleUpperContentChange} onUpperContentShown={this.handleUpperContentShown} {...this.state} />
          </div>
          <CoverAll is_shown={this.state.is_cover_all_shown} onClick={this.handleCoverAllShown} is_grey />
          <UpperContent is_shown={this.state.is_upper_content_shown} content={this.state.upper_content} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
