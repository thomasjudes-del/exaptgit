// Retire the legacy Google AI Studio service worker previously registered on exaptation.studio.
// This file intentionally unregisters itself and clears legacy Cache Storage entries.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    } catch (_) {
      // Cache cleanup is best-effort.
    }

    try {
      await self.registration.unregister();
    } catch (_) {
      // Unregistration is best-effort.
    }

    const windows = await self.clients.matchAll({ type: 'window' });
    for (const client of windows) {
      client.navigate(client.url);
    }
  })());
});
