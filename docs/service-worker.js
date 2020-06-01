importScripts("/wf-crm/precache-manifest.c07b105a4408965a62ed5272c7197249.js", "/wf-crm/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/wf-crm/workbox-v3.6.3"});
// workbox.core.skipWaiting();
// workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  // "/wf-crm/workbox-v4.3.1/workbox-sw.js",
  // "/wf-crm/service-worker.js",
  // ...self.__precacheManifest.map(i => i.url)
  ...self.__precacheManifest
]);

// workbox.routing.registerRoute(
//   /\.[png|jpg|svg|js|css|html|json]$/,
//   new workbox.strategies.NetworkFirst()
// );
// workbox.routing.registerRoute(/\.[]$/, new workbox.strategies.NetworkFirst());

self.addEventListener("push", function(event) {
  let data, title, options;
  try {
    data = event.data.json();
    title = data.title || "Notification";
    options = {
      body: data.body || "Notificatioin",
      icon: data.icon || "img/icons/logo.png",
      badge: data.badge || "img/icons/logo.png",
      data
    };

    if (data.tag) options.tag = data.tag;
  }catch(e){
    data = event.data.text();
    title = data || "Notification";
    options = {
      body: data || "Notificatioin",
      icon:  "img/icons/logo.png",
      badge: "img/icons/logo.png",
      data
    };

  }

  const notificationPromise = self.registration.showNotification(
    title,
    options
  );
  event.waitUntil(notificationPromise);
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  console.log(event.notification.data);
  // event.waitUntil(
  //   clients.openWindow(
  //     "http://localhost:5000/#/" + (event.notification.data || {}).gotourl || ""
  //   )
  // );
});

