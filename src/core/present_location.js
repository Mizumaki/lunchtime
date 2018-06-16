export default class present_location {
  constructor() {
  }

  excute(value) {
    let search_by = ""
    let search_query = ""
    switch (value) {
      case "現在地":
        search_by = "location";
        console.log("現在地")
        break;
      case "駅名":
        search_by = "station";
        console.log("駅名")
        break;
      case "建物名":
        search_by = "name";
        console.log("建物名")
        break;
      default:
        break;
    }
    fetch(`https://lunchtime-db.herokuapp.com/nmdp/${search_by}?id=1380`, {
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
        console.log(result);
          return result;
        },
        (error) => {
          return "なし";
        }
      )
  }
}