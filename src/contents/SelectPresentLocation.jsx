import React from 'react';
import present_location from './present_location';

// present_location.jsを実行して、onSelected の引数として返す。
class SelectPresentLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("現在地取得に入る")
    const lonlat = await present_location.getPosition();
    lonlat === "error" ? (
      console.log("現在地の取得に失敗")
    ) : (
      this.props.onSelected(lonlat),
      console.log("現在地取得が完了")
    );
  }

  render() {
    return (
      null
    );
  }
}

export default SelectPresentLocation;