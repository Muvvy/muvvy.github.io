self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("photoclock").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
