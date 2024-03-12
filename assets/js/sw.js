const cacheName = 'v1';

const resourcesToPreCache = [
    '/',
    '/index.html',
    '/assets/css/syle.css',
    '/assets/img/perfil.png',
    '/assets/img/speen.gif',
    '/assets/js/main.js',
    '/assets/data/curriculo.pdf'
];

self.addEventListener('install', (event) => {
    event.waitUtil(
        caches.open(cacheName)
            .then(chache => (cahce.addAll(resourcesToPreCache))),
    );
})