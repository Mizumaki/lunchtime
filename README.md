# NomadTime
NomadTimeは、ノマドワークに最適な場所を簡単に探せるWEBアプリケーションです。具体的には、現在地や駅名などの位置情報から、その近隣に存在するコーヒーチェーン（またはそれ以外のノマドに適した場所）を探しだします。

※いろいろあって、「lunchtime」という名前から、現時点では「NomadTime」という名前に変更しております。
#### 目次
- [使っている技術](#使っている技術)
  - [React](#React)
  - [Ruby on Rails](#RubyonRails)
- [技術についての補足](#技術についての補足)
- [これからの指針](#これからの指針)
## 使っている技術
- React
  - Firebase
- Ruby on Rails
  - PostgreSQL
  - PostGIS
  - Heroku

### React
フロントエンドにはReactを採用しています。Googleの提供しているBaaSであるFirebase上にデプロイされており、CSSの管理には[aphrodite](https://github.com/Khan/aphrodite)を使っています。

### Ruby on Rails
Rails5のAPIモードを使って、店舗情報を返すAPIを作成しています。

緯度経度情報を扱うことが多いため、PostgreSQLの拡張モジュールであるPostGISを使って、データベースにGeography型を導入しており、それによりReact側で指定された緯度経度に近いデータを返すことが可能となっています。それをHeroku上で稼働させています。

## 技術についての補足
まずデザインの草案をFigmaを使用して作成し、それを参考にしつつ作っています。
タスクの管理ツールはTrelloを使用、JavascriptのパッケージマネージャーツールはYarnを使っています。

また、Reactでアプリをビルドする際にはモジュールバンドラとしてwebpackを使っています。これは、Reactの環境構築の手間を省くため`create-react-app`を使用したからであり、いずれはこの環境から脱し、webpackの設定等も最適化する予定です。

## これからの指針
とりあえずデプロイさせたかった事情もありアプリ自体はWEB上に上げてしまいましたが、デザインもUXもかなりお粗末なのが現状です。

特にUXに関しては酷く、データの取得が上手くいっていない場合の挙動やデータのロード中に遷移すると正しく表示されないなど、アプリとして使う上で重大な支障をきたす箇所が多く残っています。

またコード自体もシンプルでなく、重複している箇所が存在していたり無駄に複雑な処理が発生していたりなどの問題が散見されています。

そのためまずは、React内の処理を見直しつつ、複雑かつ肥大化してしまったcomponentやstateたちをReduxでの管理などを導入することでシンプルかつスケール可能な状態に持っていきたいと考えています。

# TODO
## Frontend (React
### 緊急度：高
- 現在地の取得が成功したか失敗したか、探索中なのか、状況を表示
- サイトの規約や権利の所在、お問い合わせ先などのページを作成
- ユーザーを惑わすデザインの修正
- トップページを最低限整える
- メニューバーに最低限のリンクを追加
- 建物名で検索機能を追加
- 必須のエリア絞り込みが、選択されなかった時の挙動
- 検索の表記ゆれへの対応（駅の文字が入っている場合は無視、など
- gaの導入
- 遷移したとき、前ページのスクロール位置が引き継がれる問題の解決
- 普通にリファクタリング
- HOC、recompose他、componentの肥大化を抑える
- Reduxでのstate管理導入
### 緊急度：中
- 画面遷移、アクション時の挙動
- 駅名検索のUXを、別画面遷移にする
- 電源、wifiでの絞り込み
- 現在時刻と曜日に合わせて、営業中かどうか
- 0件ヒットのときに、再検索を促すよう、検索フォームを表示
- なし、又はあり、営業中か否かを一瞬で見分けられるよう、デザイン
- 現在地の場合は距離順で常時ソート
- 検索結果ページからも絞り込みにアクセスできるように
- ヘッダーについて要検討
- head内のタグについて整理
### 緊急度：低
- 使い方がわかりやすいトップページの作成
- 絞り込みボタンを押したら、次の条件またはボタンまでスクロールさせる機能
- トップへ戻るボタンの設置
- サーチのサジェスト
- もしかして…の表示
- 検索ボックスにカーソルを置いたときに、検索履歴やランキングを表示
- 検索ボックス近くにトレンドを表示
- 検索結果で、他のユーザーがよく検索しているキーワードを表示
- キャンペーンなり、特集記事などを、検索結果に表示できるよう設定したい。
- 横幅に合わせて適切なroot のフォントサイズを選択（rem指定の本領発揮

## Backend (Rails
### 緊急度：高
- データ量を増やす（他のチェーンについてもスクレイピング
- 現在地から取得の際に、500m以内になければより範囲を広げて探索
- 距離順でソートのほかに、絶対数も増やすため、ある程度の距離で探索するようにする
- jbuilder で、吐き出すjsonを見やすいように整形

### 緊急度：中
- 沿線の駅複数選択
- 新機能（ユーザー登録他、楽しい機能の構想は盛りだくさん！
- コーヒーなど、基本的なものの価格のみ記入しておく
- 駅名の場合は、最寄り駅からの距離　を出す（最寄り認定された駅のうち、最短距離をnmdpのカラムに入れる
- indexなどについて、実際の取り出し方をもとに再度調整

### 緊急度：低
- 建物名検索のときの仕様
- ノマドおすすめ度合いの項目（総合星評価、店内の広さ、絶対的な評価の指標がほしいところ
- 電車の変わり目（会社の変わり目）を調査、反映（現状では、途中で社名が変わる場合、１つしか表示されていない
- アクション履歴（電源の有無などを変更したら、そのユーザー名を履歴に（登録してなくても変更依頼は可能に。そこから、会員になってくれるよう依頼する