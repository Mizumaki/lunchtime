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
      status: this.getStatus(),
    }
  }
  // 営業中か否か
  getStatus() {
    const now = new Date(); // 現在時刻を取得
    const today_bsh = this.data.business_hours[now.getDay()] // now.getDay()で曜日を呼び出し、それに対応するbshを取り出す
    // 表示のパターン　営業中　本日の営業時間　06:00~26:00、準備中　本日の営業時間　06:00~26:00、（45m ~ 0前まで）営業終了まで残り約30分　本日の営業時間　06:00~26:00、（1h15m ~ 45m前まで）営業終了まで残り約1時間　本日の営業時間　06:00~26:00
    // 準備中　本日の営業時間　定休日
    // 6 ~ 2 , 7 ~ 23
    // start_hour <= now_hour , 
    const start_time = new Date(today_bsh.start_time)
    const start_hour = start_time.getHours()
    const start_min = start_time.getMinutes()
    const end_time = new Date(today_bsh.end_time)
    const end_hour = end_time.getHours()
    const end_min = end_time.getMinutes()
    const now_hour = now.getHours()
    const now_min = now.getMinutes()

    // TODO : このままでは爆死するので、時間を計算する方法を考える
    const status = (() => {
      if (now_hour === start_hour) {
        return start_min <= now_min ? ("営業中") : ("営業時間外");
      } else if (now_hour === end_hour) {
        return now_min >= end_min ? ("営業時間外") :
          (end_min - now_min > 30) ? ("営業終了まで残り1時間以内") : ("営業終了まで残り30分以内");
      } else if (end_hour > 9) { // 深夜営業でない場合
        return start_hour < now_hour && now_hour < end_hour ? ("営業中") : ("営業時間外");
      } else { // 深夜営業の場合
        return start_hour < now_hour || now_hour < end_hour ? ("営業中") : ("営業時間外"); // now_hourは必ず24以下なので
      } 
    })();
    console.log(status)
    return status
  }

  getChainName() {
    const chain_name = (() => {
      switch (this.data.chain_id) {
        case 1:
          return "スターバックス"
        case 2:
          return "ドトール"
        case 3:
          return "エクセルシオール"
        case 4:
          return "エクセルシオール・バリスタ"
        case 5:
          return "ベローチェ"
        case 6:
          return "タリーズ"
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
    const distance = dis

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
    
    const now = new Date(); // 現在時刻を取得
    const today = (() => {
      switch (now.getDay()) {
        case 0:
          return sunday
        case 6:
          return saturday
        default:
          return weekday
      }
    })();
    const bsh = {
      weekday: weekday,
      saturday: saturday,
      sunday: sunday,
      today: today,
    }

    return bsh
  }

  getWifi() {
    const has_wifi = (() => {
      switch (this.data.has_wifi) {
        case true:
          return "あり";
        case false:
          return "なし";
        default:
          return "情報なし"
      }
    })();

    return has_wifi
  }

  getCharge() {
    const has_charge = (() => {
      switch (this.data.has_charge) {
        case true:
          return "あり";
        case false:
          return "なし";
        default:
          return "情報なし"
      }
    })();

    return has_charge
  }
}