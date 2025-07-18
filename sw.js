const CACHE_NAME = 'candy-shop-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/main.css',
  '/img/choco.jpg',
  '/img/strawb.png',
  '/img/cake.png',
  '/img/byket.png',
  '/img/sweets.png',
  '/img/home.png',
  '/img/korp.jpg',
  '/img/11.jpg',
  '/img/12.jpg',
  '/img/13.jpg',
  '/img/14.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
