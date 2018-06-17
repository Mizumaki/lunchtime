export default class present_location {

  // TODO: 2つのメソッドの大部分が共通であり、処理を共通化したい

  static getPositionQuery() {
    // 現在地を取得
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        (position) => {
          const lon = position.coords.longitude
          const lat = position.coords.latitude
          const result = `lon=${lon}&lat=${lat}`
          console.log("現在地取得完了")
          resolve(result);
        },
        // 取得失敗した場合
        (error) => {
          switch (error.code) {
            case 1: //PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: //POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: //TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:" + error.code + ")");
              break;
          }
          console.log(error.code);
          reject(error.code);
        }
      );
    })
  }

  static getPosition() {
    // 現在地を取得
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        // 取得成功した場合
        (position) => {
          const lon = position.coords.longitude
          const lat = position.coords.latitude
          const result = {latitude: lat, longitude: lon}
          console.log("現在地取得完了")
          resolve(result);
        },
        // 取得失敗した場合
        (error) => {
          switch (error.code) {
            case 1: //PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: //POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: //TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:" + error.code + ")");
              break;
          }
          console.log(error.code);
          reject(error.code);
        }
      );
    })
  }

}