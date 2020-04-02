'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "d97c2fb68b66ea434273af08acf03606",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "57cf19e175a49316f75860d2a012af07",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_google_maps/assets/images/marker_a.png": "9b687e681fcc41298dfab9c1304b66d0",
"/assets/packages/flutter_google_maps/assets/images/marker_b.png": "bb8df73622307b582f89602743f4f02f",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "56fb155bac3a0dcab09297cd57f57e2c",
"/main.dart.js": "b11fadb92aea9999f6b5551f1c3be7b9",
"/manifest.json": "9956fafc293d9415723f26a5c84d4a66"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
