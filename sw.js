// サービスワーカー（PWA基本動作定義）
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // ネットワークリクエストを通す基本処理
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});