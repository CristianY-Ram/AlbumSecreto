// Nombre de la caché y recursos a almacenar
const CACHE_NAME = 'albumsecreto-cache-v1'; // Definimos el nombre de la caché con una versión específica.
const urlsToCache = [
  '/', // Página principal
  '/index.html', // Archivo HTML principal
  '/pages/main.html', // Página principal
  '/pages/login.html', // Página de inicio de sesión
  '/pages/register.html', // Página de registro
  '/pages/profile.html', // Página de perfil
  '/styles/general.css', // Archivo CSS
  '/scripts/active.js', // Archivo JavaScript
  '/resources/images/album.jpg', // Imagen
  '/offline.html'  // Página a mostrar cuando no haya conexión
];

// Evento 'install': abre la caché y almacena los recursos especificados
self.addEventListener('install', event => { // Escuchamos el evento 'install' del Service Worker.
  event.waitUntil( // Esperamos hasta que se complete la apertura de la caché y la adición de recursos.
    caches.open(CACHE_NAME).then(cache => { // Abrimos la caché con el nombre definido anteriormente.
      console.log('Abriendo caché'); // Imprimimos un mensaje en la consola indicando que estamos abriendo la caché.
      return cache.addAll(urlsToCache); // Añadimos todos los recursos especificados en la lista a la caché.
    })
  );
});

// Evento 'fetch': intercepta las solicitudes de red y sirve recursos desde la caché
self.addEventListener('fetch', event => { // Escuchamos el evento 'fetch' para interceptar solicitudes de red.
  event.respondWith( // Respondemos con un recurso de la caché o de la red.
    caches.match(event.request).then(response => { // Buscamos en la caché un recurso que coincida con la solicitud.
      if (response) { // Si encontramos el recurso en la caché...
        return response; // ...lo devolvemos como respuesta.
      }
      return fetch(event.request); // Si no lo encontramos en la caché, hacemos una solicitud de red.
    }).catch(() => { // Si ocurre un error (por ejemplo, no hay conexión)...
      return caches.match('/offline.html'); // ...devolvemos la página offline como respuesta.
    })
  );
});

// Evento 'activate': limpia cachés antiguas que no están en la lista blanca
self.addEventListener('activate', event => { // Escuchamos el evento 'activate' del Service Worker.
  const cacheWhitelist = [CACHE_NAME]; // Definimos una lista blanca con las cachés que queremos conservar.
  event.waitUntil( // Esperamos hasta que se complete la limpieza de cachés antiguas.
    caches.keys().then(cacheNames => { // Obtenemos los nombres de todas las cachés disponibles.
      return Promise.all( // Esperamos hasta que todas las promesas se hayan resuelto.
        cacheNames.map(cacheName => { // Iteramos sobre cada nombre de caché...
          if (!cacheWhitelist.includes(cacheName)) { // ...si la caché no está en la lista blanca...
            return caches.delete(cacheName); // ...la eliminamos.
          }
        })
      );
    })
  );
});