/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxMode is set to "injectManifest"
 */
// dependencies
import { precacheAndRoute } from "workbox-precaching";
// import { registerRoute } from "workbox-routing";
// import { StaleWhileRevalidate } from "workbox-strategies";
// import { Queue } from "workbox-background-sync";
// import { clientsClaim } from "workbox-core";

// self.skipWaiting();
// clientsClaim();

// cleanupOutdatedCaches()

// Non-SSR fallback to index.html
// Production SSR fallback to offline.html (except for dev)
// if (process.env.MODE !== 'ssr' || process.env.PROD) {
//   registerRoute(
//     new NavigationRoute(
//       createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
//       { denylist: [/sw\.js$/, /workbox-(.)*\.js$/] }
//     )
//   )
// }

// config
// precache injection
// 预请求资源，__WB_MANIFEST变量会注册webpack打包的所有项目资源文件
const precacheUrls = self.__WB_MANIFEST;

if (precacheUrls) {
  precacheAndRoute(precacheUrls);
  // precacheAndRoute([...precacheUrls, { url: "/index.html", revision: null }]);
}

// precacheAndRoute([
//   { url: "/index.html", revision: null },
//   // 其他資源
// ]);

// caching strategies
// registerRoute(({ url }) => {
//   console.log("url: ", url);
//   // return request.destination === "style";
// }, new CacheFirst());

// registerRoute(
//   ({ url }) => url.href.startsWith("http"),
//   new StaleWhileRevalidate()
// );

// Events
// const backgroundSyncSupported = "sync" in self.registration;
// let createPostQueue = null;

// if (backgroundSyncSupported) {
//   createPostQueue = new Queue("createPostQueue");
// }

// if (backgroundSyncSupported) {
//   self.addEventListener("fetch", (event) => {
//     console.log("event.request.url: ", event.request.url);
//     if (event.request.url.endsWith("/createPosts")) {
//       // if (event.request.method !== "POST") {
//       //   return;
//       // }
//       const bgSyncLogic = async () => {
//         try {
//           const response = await fetch(event.request.clone());
//           return response;
//         } catch (error) {
//           await createPostQueue.pushRequest({ request: event.request });
//           return error;
//         }
//       };
//       console.log(bgSyncLogic);
//       event.respondWith(bgSyncLogic());
//     }
//   });
// } else {
//   console.log("Not support background sync!");
// }
