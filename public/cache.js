let cacheData="appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                'static/js/node_modules_web-vitals_dist_web-vitals_js.chunk.js',
                'static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
                'static/js/bundle.js',
                'favicon.ico',
                'logo192.png',
                'manifest.json',
                'index.html',
                '/',
                '/home',
                '/users',
                '/about'
            ])
        })
    )
});
this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if (resp) {
                    return resp
                }
            })
        )
    }
});

