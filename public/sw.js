// Service Worker for Trailblazer Analytics
// Provides offline access to key content and performance improvements

const CACHE_NAME = 'trailblazer-analytics-v1';
const STATIC_CACHE = 'static-v1';

// Files to cache for offline access
const urlsToCache = [
  '/',
  '/about',
  '/blog',
  '/tags',
  '/podcast',
  '/support',
  '/manifest.json',
  // CSS and JS will be cached automatically
];

// Critical pages that should always be fresh but fallback to cache
const dynamicCacheUrls = [
  '/blog/',
  '/articles/',
  '/case-studies/',
  '/tools/',
  '/downloads/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Installed');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - implement cache-first strategy for static assets, network-first for dynamic content
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Skip non-GET requests and external URLs
  if (event.request.method !== 'GET' || !requestUrl.hostname.includes(location.hostname)) {
    return;
  }

  // Cache strategy for different types of content
  if (event.request.destination === 'image') {
    // Cache-first for images
    event.respondWith(cacheFirst(event.request));
  } else if (requestUrl.pathname.includes('/api/')) {
    // Network-only for API calls
    event.respondWith(fetch(event.request));
  } else if (isDynamicContent(requestUrl.pathname)) {
    // Network-first for dynamic content (blog posts, etc.)
    event.respondWith(networkFirst(event.request));
  } else {
    // Cache-first for static assets
    event.respondWith(cacheFirst(event.request));
  }
});

// Check if the URL is dynamic content that should be fresh
function isDynamicContent(pathname) {
  return dynamicCacheUrls.some(url => pathname.startsWith(url));
}

// Cache-first strategy
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Fetch failed', error);
    // Return cached version if available
    return caches.match(request);
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    return caches.match('/');
  }
}

// Background sync for analytics (optional feature)
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Placeholder for syncing offline analytics data
  console.log('Service Worker: Syncing analytics data');
}
