const CACHE = 'zlata-trefa-audioguide-v2';
const ASSETS = ["index.html", "manifest.webmanifest", "assets/panels/panel-01.jpg", "assets/panels/panel-02.jpg", "assets/panels/panel-03.jpg", "assets/panels/panel-04.jpg", "assets/panels/panel-05.jpg", "assets/panels/panel-06.jpg", "assets/panels/panel-07.jpg", "assets/panels/panel-08.jpg", "assets/panels/panel-09.jpg", "assets/panels/panel-10.jpg", "assets/audio/01-josef-panacek.mp3"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
