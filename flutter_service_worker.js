'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ff4fdded30efd042397ca60e8700dc9a",
"version.json": "4034dca53963b430fcc7765a41fd2a2c",
"index.html": "8da2c48b3a6a64bb55a183753d0b2cb6",
"/": "8da2c48b3a6a64bb55a183753d0b2cb6",
"main.dart.js": "7f196d445349022f9f369d69a22890ac",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "34a4b943b3416e72abad73806a06e660",
".git/ORIG_HEAD": "c2598c166a661d02626d8838f049dd9c",
".git/config": "1b06fb4b18185d348215a65be22e3d4c",
".git/objects/92/0db92baa1bad02a590aa24b6e2587854bbdcd2": "ddcf03d022b8c7a07c2abc0aba901691",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/cd8dbb962290e838116f63d5fb9e8b02bd732b": "581bf480ce8fe5beb0339d1a0d63e52d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/40979038db7a9329703de2566e31d420e1a10a": "ab99a499cdb0aad87bcb941b54a61153",
".git/objects/35/951be39e20bdb7eee350f48245743b9d1679d1": "b0c620cf478ba25b634cf212b6182bb7",
".git/objects/69/7237508d383d4cbcfc42ec0ff503bd7b460cae": "2217198e6c23a3554fdea7dede2b061d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/912334733d93a7f413610abe53e7a38250f566": "6ad17f1f6d7c279b56f1934c3aeaf43c",
".git/objects/58/fd4309384a9480012333dd72846c36c3d14c50": "6f347207417ff2a7d83b51b2c7efea07",
".git/objects/58/c1e0279f25adb68815f1eea39e91a5b31b0f4f": "72de90b8f5e0e354d25736e266cf236d",
".git/objects/02/9a37e683ced9c9c04bdf76f8699e61aa1d8799": "7f3987697047859e7980f8fa4e2b8e60",
".git/objects/ac/c492a67a4a92e1d9e9f9d1c6a8face610a85f7": "d2af4952ec9099de6c3caced6903c213",
".git/objects/bb/eac1abf79e09a928d66bc1447a0be1e74cf1b5": "21e4270e806bf6667b4fa3a34ecb4a51",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/7257abcf900a264fd5f541a9011688544ec833": "dd78cc44c292e5bed9927ec99386f203",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/fa8e2b9f6a9ee570b46157a60737315f718cb2": "f4f632b425d46f2ab7c9eaeb0c573f29",
".git/objects/bd/d8e7e5bf9bb5524d4ca1c3e4635a91a1c78414": "9620e65b8314577aafebacdd3bf6ac4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b7f68799bddb3bffa6bab47d445735096cb23c": "cf8c31beebf49881bd63a46131e20484",
".git/objects/e2/536efbe1b977677ae510ee5f41d194b59c14d6": "389a3b4deccb4774fe01829109938242",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/015c2574ae233b717a6be133c9bda220eba323": "8eec4e160c39b59d25c356041b2e935a",
".git/objects/fc/ecaa92d1c6e3cadf733994d4f76eb6edfa620c": "9afaa378e90d7eba41a68317399373bb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/8d1185fe9914bd61b8ed5480e13a677181a02d": "16352289541f0022bfca25ee383b398b",
".git/objects/e3/7b964a43ebf316c5b1d3a598e8003648b337e7": "0fd494c11008c29f03d8b3f02244a468",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/2d79c9480d305f29128a64fc8d17c410ff2da7": "c64c002a37b933a305d9c24b3477559f",
".git/objects/e4/44b85cfd8f07f16920d9f37b6696041ef36889": "d757905c8d5923cd406558d86322eefd",
".git/objects/e4/1fe71255d6553655bb79c2e6b9ef12cd37eec4": "66113182fc2e0aa57301f7bd1a325fdf",
".git/objects/c6/7bed286f6ebe773abc5f61020af28205a0a715": "92dc220d1970cf7a353c6e9f72e6d8b6",
".git/objects/11/3ee509170e25c587e10d5b388351dca43bbaa0": "aed8284ba36caf5a334b13450f9fd942",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/629eda2e21162d4c4f1b4aafc3e63e224430ff": "e43ace05d191baf3e7e7ea031791e128",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/ed1b92cf662c4a8f22da9ebf43963a200156ce": "0c6b6b651fcf04e8790747efe16e4af8",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/36/f0acd251e8e0fb9b9c766f201f56a18aa5c14d": "ba72c9bbf6d92791a0c1306f1245c5d6",
".git/objects/5c/0ff0f9f2551a09e27e46374e2c8b94124979ba": "601b0643cd3653bf9dd56ba466ddfdbd",
".git/objects/91/93d266874657a46c905589917c45474372312b": "9b4a8b9074933c18220ffa5d6a668758",
".git/objects/65/829b277bb0e1e8b9c1e361b4493eff19b6d56e": "dd9b294563c87e4cf724a704d84c4477",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/2d0e1f918abecd8c30618721640f3b19e438c2": "a0478af9dfc63da52fa49e662ef133ac",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5b/a388db468a506056ec4dc95cbd486de5fea2c4": "dac50a7ef0b881c70b5bfef3b31f605b",
".git/objects/08/4712dabfe3c1084c703276dd9355826f602f0f": "a882a3d211fae90643609db0096c3bee",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/52/ebb75f97af7c7c571d3bef9ae2c5451fc8ee1d": "a77a7a9f8bc1298fa34d9c6c9906f8f3",
".git/objects/52/e46d8d20d3b9e7ae9fabf6e9cebe2e2d3e27d0": "e2ac41c7b2d1757f37f4b18ba027118d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/aa/0d50baa427d7564160cce72aa92f946f8bbcdd": "d328340b09589c39fafec341849c0a93",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f9/4de3a82bf0472b2c8c7712aac79810f8375990": "1f0809302e966336a25096ce925b107f",
".git/objects/f7/fd4c236646425ae3ac4aaa6ff5330f6afce96d": "f409f3c4643eacfd9d1e4cd652bb8803",
".git/objects/e8/9119dee84ffe97f7212678527a4d9861943554": "5b5338521a85ba449e214072daaef94e",
".git/objects/f6/3b386a04974511f7c5b56d3c4fec5f4b154cc8": "7290b41062e761ac985c62612374be73",
".git/objects/e0/f8d9263cc954b119ac8fc17786edf0d8f3fa27": "decdeb625285859d9b336990ae0b80be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/2c3285f6ed689d628bba63b6fe9648ef781544": "30989ad56121cd1357eafeadd0f36b27",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/48/89ce643d566788248f3a540529cf52a09d0f16": "9bf234a1903c9a16de6fe9bce4c25c19",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/0b2dc2877a7a8d96ce4098cfc40d7591b47f0b": "48c8235cb5e7bf23d5d705a6562599b1",
".git/objects/4f/3f1e619470bbe83a0265d36b106e8fe703ce25": "48079f21b497c564f31637f7a209f726",
".git/objects/85/1590591f44e06b0877426a0aa48515c02f2007": "21d38eaebd59adc23a2e2de9b2b42000",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/836559cf50c925b75f828cf7eb33e233448029": "a2cf6a1b85726091a17aab3800d30554",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "760f0d4d0d96ec629b69cfbea1078c87",
".git/logs/refs/heads/master": "dda90336e5b4bcf725aab7757953d0fc",
".git/logs/refs/remotes/origin/master": "0d3e2f2a31b6639e37ba092fd691caa7",
".git/logs/refs/remotes/origin/main": "819c6445becdb86574a76947feb3ca8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "c2598c166a661d02626d8838f049dd9c",
".git/refs/remotes/origin/master": "c2598c166a661d02626d8838f049dd9c",
".git/refs/remotes/origin/main": "9243dccdf13ab4d3a200ffed052cf599",
".git/index": "9c24980548c6c32452d8ee3e52fbb720",
".git/COMMIT_EDITMSG": "0e5a354f31da07c7dd83353fc99fb418",
".git/FETCH_HEAD": "9bd8e11d547e9b0cc7503d66c9e80867",
"assets/AssetManifest.json": "98d30ebccc92dfc6759a4f5376df1834",
"assets/NOTICES": "03c113d3341b7320af8f80d0f603a380",
"assets/FontManifest.json": "6da0a6b3f411c3e4c78f638591119e07",
"assets/AssetManifest.bin.json": "893c4eb2e399d010014a981aa08120e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f8db5e72b01e72487cb3ae3ca3004956",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/logo_black.png": "5980e7bffd116a71a14bc49319ca39ca",
"assets/assets/image1.jpeg": "05fa15e6005ff87347d9b3607c948c6a",
"assets/assets/CookieRun%2520Black.ttf": "e34b3a3a57b661882166c48ca294f2c3",
"assets/assets/logo.png": "91403d84ef6c1af48212722d1f01f6d1",
"assets/assets/logo_white.png": "95955e7fcb46fa93c3f092601ae60005",
"assets/assets/2.jpeg": "55280763bf419d80eecec90fad740fd7",
"assets/assets/image2.jpeg": "fcb181966ca057020b8ca67163beb36b",
"assets/assets/CookieRun%2520Bold.ttf": "b01731e0798bd4242f0b2a058601b173",
"assets/assets/image4.JPG": "b3964e671ed966242e2e4fbf6f1f3096",
"assets/assets/CookieRun%2520Regular.ttf": "b6c8137dd2e215ed1aba2ebfc45c93c4",
"assets/assets/3.jpg": "98f1816b4d0fa1d600ccbece7a963b1a",
"assets/assets/1.jpg": "dcb1d90321c0508facd04422341cc4a0",
"assets/assets/image3.jpeg": "b5d7fb7b38ce317bcf21b6b8fdb91ed9",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
