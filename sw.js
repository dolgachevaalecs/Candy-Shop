const CACHE_NAME = 'candy-shop-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/main.css',
    '/choco.jpg',
    '/strawb.png',
    '/cake.png',
    '/byket.png',
    '/sweets.png',
    '/home.png',
    '/logo1.png'
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
