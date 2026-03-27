const CACHE_NAME = 'mpk-kalkulator-v1';
const ASSETS = [
  './',
  './index.html',
  './apple-touch-icon.png',
  './favicon.svg'
];

// Instalacja i cache'owanie plików
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Serwowanie plików z cache, gdy brak sieci
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});