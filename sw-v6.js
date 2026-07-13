const CACHE='muretto-v6-20260713-hotfix1';
const CORE=['./','./index.html','./assets/app-v6.css?v=20260713-hotfix1','./assets/app-v6.js?v=20260713-hotfix1','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('muretto-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
async function networkFirst(request){
  const cache=await caches.open(CACHE);
  try{const response=await fetch(request,{cache:'no-store'});if(response&&response.ok)cache.put(request,response.clone());return response;}
  catch(_e){return (await cache.match(request)) || (request.mode==='navigate'?await cache.match('./index.html'):Response.error());}
}
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;event.respondWith(networkFirst(event.request));});
