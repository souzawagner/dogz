if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/dogz/_next/static/LRDmzkvK2hAu-356TO-hC/_buildManifest.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/LRDmzkvK2hAu-356TO-hC/_middlewareManifest.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/LRDmzkvK2hAu-356TO-hC/_ssgManifest.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/main-eb4e474e74024f8a.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/pages/_app-352b14d4d547cd0c.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/pages/index-8a98dc03e3fc0111.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/chunks/webpack-3b3e6e4ad15845cc.js",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/_next/static/css/800169011d13ddf5.css",revision:"LRDmzkvK2hAu-356TO-hC"},{url:"/dogz/dogz/sw.js",revision:"3fe3d733b943e6f13822c28408f90a19"},{url:"/dogz/dogz/workbox-75794ccf.js",revision:"c1de29684d60347c21a56c4bbdb3efa6"},{url:"/dogz/dogz/workbox-d1b0e804.js",revision:"ef0bd9839b2bd6cb728a948a2c7343fc"},{url:"/dogz/dogz/workbox-d1b0e804.js.map",revision:"a55a73a172d75f8e7c5bad851c001cb4"},{url:"/dogz/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/dogz/images/background.svg",revision:"3a8e0b3ff1cbd6951f09f008287a0b8c"},{url:"/dogz/images/dog-128.png",revision:"daf2aa394cccb5bfb697d5c6548f4280"},{url:"/dogz/images/dog-256.png",revision:"b32e0d1ba75888c896e4573d67fd07d5"},{url:"/dogz/images/dog-64.png",revision:"077d3cdfb7a4fc1ea49c69c40ced6620"},{url:"/dogz/images/dogz-512.png",revision:"3da570ad0e6d6847409b6da5e40c0a0f"},{url:"/dogz/manifest.json",revision:"93ad9cac6193fdadbef6ad7757debda6"},{url:"/dogz/robots.txt",revision:"ab83b94893555e169ba07161fa629da6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/dogz",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
