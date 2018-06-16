# スタートトゥデイテクノロジーズ
6/20 から採用ページopen?
工務店
## 開発コンセプト
- シンプル
- コードビハインド
- アパレルに特化

データの持ち方
RDBでの設計。

IIS + ASP + MSSQL
独自フレームワーク
＝＞　開発フレームワークが当時（２００３年、無い
チューニングがやりやすいという利点も
セキュリティが強い

フレームワークはCOM実装

VBS

## 現状
マイクロサービス化

Simple is best.

# Google PWAについて
宇都宮 佑亮さん

WEB のプラットフォームはストレス度が高い、いや現状では高い

app.starbucks.com

service worker で高速化

- 高速な表示
- OSとのインテグレーション（よりデバイスネイティブ
- 信頼性
- エンゲージメント性

Lighthouse 
chrome のdevツール　＝＞　audits
80点以上を目指そう

Google IO
Nikkei - Optimizations

chrome68 から、PWAをホームに追加が可能に
＝＞　いずれは、アドレスバーに追加ボタン表示

ホームに追加を能動的にさせるように、ボタン設置なども優秀

beforeinstallprompt

Service Worker
=> キャッシュにより、ネットワーク依存が減る

Workbox

日経は、トップページの記事はすべてキャッシュ

Push通知も可能
しかし、許可が必要
＝＞　訪れた途端に、許可を求めるのではなく、なにかしらユーザーにメリットを感じさせたうえで、許可するかのポップアップを出すという動線作り

Credential Management API
=> safari 未対応

One-tap sign-up / auto sign-in
＝＞　クロスブラウザ

Web Authentication

Google pay

## what's next
デスクトップ版pwa も

chrome cunstom tabs
=> Trusted Web Activities

HTML5Experts

chrome dev summit 2018 Nov 12-14