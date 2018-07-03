import geolib from 'geolib';

export default class FormatInfo {
  constructor(nmdpData, my_location) {
    this.data = nmdpData;
    this.my_location = my_location;
  }

  getArray() {
    console.log("gInfo was called!!")
    const data = this.data
    return {
      name: data.name,
      address: data.address,
      phone_number: data.phone_number,
      location: this.getLocation(), // 詳細ページでマップを描画する際に必要
      chain_name: this.getChainName(),
      distance: this.getDistance(),
      day_off: this.getDayOff(),
      bsh: this.getBsh(),
      has_wifi: this.getWifi(),
      has_charge: this.getCharge(),
    }
  }
  // 営業中か否か
  getStatus() {
    const now = new Date(); // 現在時刻を取得
    const today_bsh = this.data.business_hours[now.getDay()] // now.getDay()で曜日を呼び出し、それに対応するbshを取り出す
    // 表示のパターン　営業中　本日の営業時間　06:00~26:00、準備中　本日の営業時間　06:00~26:00、（45m ~ 0前まで）営業終了まで残り約30分　本日の営業時間　06:00~26:00、（1h15m ~ 45m前まで）営業終了まで残り約1時間　本日の営業時間　06:00~26:00
    // 準備中　本日の営業時間　定休日
  }

  getChainName() {
    const chain_name = (() => {
      switch (this.data.chain_id) {
        case 1:
          return "スターバックス"
        case 2:
          return "ドトール"
        default:
          break;
      }
    })();

    return chain_name
  }

  getLocation() {
    const point = this.data.location
    const reg = /\d+\.\d+/g
    const lonlat = point.match(reg);
    const lon = lonlat[0]
    const lat = lonlat[1]
    const nmdp_location = {
      latitude: lat,
      longitude: lon
    }
    return nmdp_location
  }

  getDistance() {
    const nmdp_location = this.getLocation();
    const dis = this.my_location.longitude !== "" && this.my_location.latitude !== "" ?
      (geolib.getDistance(this.my_location, nmdp_location)) : ("");
    const distance = dis !== "" ? `${dis}m` : ""

    return distance
  }

  getDayOff() {
    // TODO: 全ての休みパターンに対応
    const day_off = (() => {
      switch (this.data.day_off) {
        case "0":
          return "日";
        case "6":
          return "土";
        case "0,6":
          return "土、日";
        case "":
          return "なし";
        default:
          return "不定休"
      }
    })();

    return day_off
  }

  getBsh() {
    const cutting = (time) => {
      console.log("cutting was called!!!")
      const date = new Date(time);
      const hh = ("0" + date.getHours()).slice(-2); // 後ろから2つだけを取り出す。つまり、07 => 07, 022 => 22 となることで、2桁表示を可能にしている。
      const mm = ("0" + date.getMinutes()).slice(-2);
      return `${hh}:${mm}`
    }

    const nmdp = this.data
    // TODO: 平日の休み、営業時間違いに未対応
    const bsh_sunday = nmdp.business_hours[0].start_time !== null ? {
      start: cutting(nmdp.business_hours[0].start_time),
      end: cutting(nmdp.business_hours[0].end_time)
    } : ("");
    const bsh_weekday = {
      start: cutting(nmdp.business_hours[1].start_time),
      end: cutting(nmdp.business_hours[1].end_time)
    }
    const bsh_saturday = nmdp.business_hours[6].start_time !== null ? {
      start: cutting(nmdp.business_hours[6].start_time),
      end: cutting(nmdp.business_hours[6].end_time)
    } : ("");

    // 対応する文字列に変換
    const weekday = `${bsh_weekday.start}～${bsh_weekday.end}`
    const saturday = `${bsh_saturday.start}～${bsh_saturday.end}`
    const sunday = (bsh_sunday === "") ?
      "-" : `${bsh_sunday.start}～${bsh_sunday.end}`;
    const bsh = {
      weekday: weekday,
      saturday: saturday,
      sunday: sunday
    }

    return bsh
  }

  getWifi() {
    const has_wifi = (() => {
      switch (this.data.has_wifi) {
        case true:
          return "あり";
        case null:
          return "データなし";
        case false:
          return "なし";
        default:
          return "不明"
      }
    })();

    return has_wifi
  }

  getCharge() {
    const has_charge = (() => {
      switch (this.data.has_charge) {
        case true:
          return "あり";
        case null:
          return "不明";
        case false:
          return "なし";
        default:
          return "不明"
      }
    })();

    return has_charge
  }
}