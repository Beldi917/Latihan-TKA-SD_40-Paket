const CACHE_NAME = 'tka-sd-lms-v1';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/api.js',
  '/js/auth.js',
  '/js/dashboard.js',
  '/js/soal.js',
  '/js/leaderboard.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
