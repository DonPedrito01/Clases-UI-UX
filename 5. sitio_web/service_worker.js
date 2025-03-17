
// 1. definir los archivos que van a estar en la memoria cache del navegador 

const CACHE_NAME = 'cache_store';
const FILES = [
    "./index.html", 
    "./pages/landig.html",
    "./dist/app.js",
    "./dist/formulario.js",
    "./dist/Validation.js",
    "./styles/styles.css"
]; 

// 2. Crear metodo para instalar la aplicacion

/* 

¿Que hace el metodo self?

Verifica que los archivos que existen antes de guardalos en la cache
Almacena en la cache solo los archivos validos
Activar el SW (Service Woker)

*/

self.addEventListener('install', (event)=>{
    event.waitUntil(
        ( async () => {
            const cache = await caches.open(CACHE_NAME);
            console.log('Verificando archivos antes de cachear');
            const validFiles = (
                await Promise.all(FILES.map( async (file) =>{        
                    try{
                        const response = await fetch(file,{method: 'HEAD'});
                        if(response.ok){
                            console.log(`Archivo encontrado ${file}`);
                            return file;
                        }
                        else{
                            console.warn(`Archivo no encontrado ${file}`);
                        }
                    }
                    catch (error){
                        console.error(`Error al verificar el archivo ${file} (Status ${response.status})`);
                    }
                    return null;
                }))).filter (Boolean);
                await cache.addAll(validFiles);
                console.log('Cache registrada con exito');
                self.skipWaiting(); // Permite que el SW se active de inmediato 
        }
        )()    
    );  //que es waitUntil y porque se usa ese metodo y no otro
});

/*

¿Que hace?
    1. Intercepta todas las peticiones de tipo fetch 
    2. Si el recurso esta en cache lo devuelve sin acceder a la red
    3. Si no esta en cache, lo descarga de la red 
    4. Si falla devuelve error 503 

*/

self.addEventListener('fetch', (event)=>{
    console.log(`Interceptando peticion: ${event.request.url}`);
    event.respondWith(
        caches.match(event.request).then((cachedResponse) =>{
            if(cachedResponse){
                return cachedResponse;
            }
            return fetch(event.request)
                .then((networkResponse)=>{
                    return networkResponse;
                })
                .catch((error)=>{
                    return new Response('No hay conexion y el recurso no esta en cache', {status:503, statusText: 'Servicio no disponible: '+ error.message});
                });
        })
    );
});

/*

Busca y elimina versiones antiguas de caché.
Usa self.clients.claim() para que el SW controle inmediatamente todas las pestañas abiertas. 

*/

self.addEventListener('activate', (event) => {
    event.waitUntil(
      (async () => {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME) // Filtra solo las cachés antiguas
            .map(name => caches.delete(name)) // Las elimina
        );
        console.log('🗑 Cachés antiguas eliminadas');
      })()
    );
   
    self.clients.claim();
  });
   