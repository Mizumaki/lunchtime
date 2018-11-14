importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`ワークボックス準備完了 🎉🎉🎉`);

  workbox.precaching.precacheAndRoute([]);
  workbox.routing.registerNavigationRoute('/index.html');

  workbox.routing.registerRoute(
    new RegExp('https://lunchtime-db.herokuapp.com/station/name.*'),
    workbox.strategies.cacheFirst({
      cacheName: 'stations',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 10,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('https://lunchtime-db.herokuapp.com/nmdp/station.*'),
    workbox.strategies.cacheFirst({
      cacheName: 'cafes',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 5,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

} else {
  console.log(`WorkBoxのロードに失敗 😬😬😬`);
}