'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6b41f542b13b1ef1327d279a9b1d35d2",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "55e37a35525c63e130e76d588f2f5e8d",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "dc2f156b60f53c591fc0d2b98cbf01bf",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "d88fa2ca46d05df6986d2eaeafee2225",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "df17124cad6f4767f3bf115f961a14b4",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/icons/auth/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/icons/auth/facebook.png": "ad56565a45e2dc6b77cfff4e48176666",
"assets/assets/icons/auth/google.png": "d8625b338b13c0a1703ae2cd0059540f",
"assets/assets/icons/auth/twitter.png": "b174c30a44b884b023b87664ccd936ee",
"assets/assets/icons/discord.png": "d49250f430b4b36398b56595bfa5da35",
"assets/assets/icons/facebok.png": "c986889a913a08aaef37c28aba08ee4a",
"assets/assets/icons/instagram.png": "93b6df9c1f1cc0a5c71872d052096ee1",
"assets/assets/icons/tiktok.png": "339c939fc80a1ce9cf8d6ed3bb1a35f5",
"assets/assets/icons/twiter.png": "199eb21cd225c2dee655dfceb07c7774",
"assets/assets/images/challenges.png": "dc3eea12cdc0efc3b0a3104fe19b010f",
"assets/assets/images/coins.png": "ee429d7ae41ac993df249165926017aa",
"assets/assets/images/coins.psd": "de2ba6bed7e14502b6926d5a5601f0c0",
"assets/assets/images/coinsLarge.png": "82afa65c547abb911d9717b525c6b193",
"assets/assets/images/coinsMedium.png": "4a3a44b2fd56628f2285ebe6d75150d9",
"assets/assets/images/coinsSmall.png": "d3ae8393e247c43ab3a7f061806eba91",
"assets/assets/images/discord.png": "d49250f430b4b36398b56595bfa5da35",
"assets/assets/images/error.png": "e068f47a5a8176b3be8fa0464f5b4621",
"assets/assets/images/facebook.png": "c986889a913a08aaef37c28aba08ee4a",
"assets/assets/images/instagram.png": "93b6df9c1f1cc0a5c71872d052096ee1",
"assets/assets/images/money.png": "32adddac636e53fd1c3c605b7a7e5e7b",
"assets/assets/images/Onboarding%2520image.png": "e1980facfa8b637af727721f6628209f",
"assets/assets/images/onboarding_image.png": "ef30bf0d5b8ee77498819a4cc1a74b1d",
"assets/assets/images/placeholder1.png": "379fb57a9f0cc698afe4090bcdf5e850",
"assets/assets/images/placeholder2.png": "3ad5e26b04e3b7dbb73aef9e59ada0cf",
"assets/assets/images/placeholder3.png": "3f5dbf254bd4c100ceb0538078a90d9b",
"assets/assets/images/practice.png": "57885fb4661d482144902d4063652ac2",
"assets/assets/images/tiktok.png": "339c939fc80a1ce9cf8d6ed3bb1a35f5",
"assets/assets/images/top_placeholder.png": "4591cda4fa9d9c24cdb697e06d978b54",
"assets/assets/images/tournaments.png": "7314f1a046bf30875cb9e219a9c6e70b",
"assets/assets/images/twitter.png": "199eb21cd225c2dee655dfceb07c7774",
"assets/FontManifest.json": "f96b1bdbf1070309b29fb6dd7353b5d0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d314c23f02818716dfe0fa8bcb1d2ab7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "5932f54f8f090788ab495f32857a3740",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54854ec05a4d82b11c8b89021974fc43",
"/": "54854ec05a4d82b11c8b89021974fc43",
"main.dart.js": "e2042bc0939260b2e9ff09e768d0978f",
"manifest.json": "b24b895ea830dc773ed9ac7c6bfcd2dc",
"version.json": "9391a24bfd516790f367cff45758aa50"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
