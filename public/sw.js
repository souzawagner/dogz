if (!self.define) {
  let e, s = {};
  const n = (n, a) => (n = new URL(n + ".js", a).href, s[n] || new Promise((s => {
    if ("document" in self) {
      const e = document.createElement("script");
      e.src = n, e.onload = s, document.head.appendChild(e)
    } else e = n, importScripts(n), s()
  })).then((() => {
    let e = s[n];
    if (!e) throw new Error(`Module ${n} didn’t register its module`);
    return e
  })));
  self.define = (a, t) => {
    const i = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[i]) return;
    let c = {};
    const o = e => n(e, i), r = { module: { uri: i }, exports: c, require: o };
    s[i] = Promise.all(a.map((e => r[e] || o(e)))).then((e => (t(...e), c)))
  }
}
define(["./workbox-75794ccf"], (function (e) {
  "use strict";
  importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
    url: "/dogz/_next/static/2Gla1h1GsLC5M8C91-bI9/_buildManifest.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/2Gla1h1GsLC5M8C91-bI9/_middlewareManifest.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/2Gla1h1GsLC5M8C91-bI9/_ssgManifest.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/framework-5f4595e5518b5600.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/main-eb4e474e74024f8a.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/pages/_app-352b14d4d547cd0c.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/pages/_error-2280fa386d040b66.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/pages/index-ea18d4408f2790bb.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/chunks/webpack-3b3e6e4ad15845cc.js",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, {
    url: "/dogz/_next/static/css/85c479ef42cc7375.css",
    revision: "2Gla1h1GsLC5M8C91-bI9"
  }, { url: "/dogz/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" }, {
    url: "/dogz/images/background.svg",
    revision: "3a8e0b3ff1cbd6951f09f008287a0b8c"
  }, {
    url: "/dogz/images/dog-128.png",
    revision: "daf2aa394cccb5bfb697d5c6548f4280"
  }, {
    url: "/dogz/images/dog-256.png",
    revision: "b32e0d1ba75888c896e4573d67fd07d5"
  }, {
    url: "/dogz/images/dog-64.png",
    revision: "077d3cdfb7a4fc1ea49c69c40ced6620"
  }, { url: "/dogz/images/dogz-512.png", revision: "3da570ad0e6d6847409b6da5e40c0a0f" }, {
    url: "/dogz/manifest.json",
    revision: "4c511c49bee04814e0b76c71c6295e1a"
  }], { ignoreURLParametersMatching: [] }), e.cleanupOutdatedCaches(), e.registerRoute("/dogz", new e.NetworkFirst({
    cacheName: "start-url",
    plugins: [{
      cacheWillUpdate: async ({
                                request: e,
                                response: s,
                                event: n,
                                state: a
                              }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
        status: 200,
        statusText: "OK",
        headers: s.headers
      }) : s
    }]
  }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })]
  }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
    plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
  }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
    cacheName: "static-font-assets",
    plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })]
  }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
    cacheName: "static-image-assets",
    plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
    cacheName: "next-image",
    plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
    cacheName: "static-audio-assets",
    plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
    cacheName: "static-video-assets",
    plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
    cacheName: "static-js-assets",
    plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
    cacheName: "static-style-assets",
    plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
    cacheName: "next-data",
    plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
    cacheName: "static-data-assets",
    plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute((({ url: e }) => {
    if (!(self.origin === e.origin)) return !1;
    const s = e.pathname;
    return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
  }), new e.NetworkFirst({
    cacheName: "apis",
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute((({ url: e }) => {
    if (!(self.origin === e.origin)) return !1;
    return !e.pathname.startsWith("/api/")
  }), new e.NetworkFirst({
    cacheName: "others",
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
  }), "GET"), e.registerRoute((({ url: e }) => !(self.origin === e.origin)), new e.NetworkFirst({
    cacheName: "cross-origin",
    networkTimeoutSeconds: 10,
    plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })]
  }), "GET")
}));
