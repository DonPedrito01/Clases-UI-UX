const btnUbicarme = document.getElementById('ubicarme');
btnUbicarme.addEventListener('click',()  => {
  const disponible = ("geolocation" in navigator)
  if(disponible ){
    miUbicacion();
 
  }else{
    const fuera = document.getElementById('fuera');
    fuera.innerHTML = "<strong>El navegador no soporta la Geolocalización</strong>"
  }
});
 
const miUbicacion  = () => {
  const mapaLink = document.getElementById('mapa-link');
  const data = document.getElementById('otros');
  //Acceso a API de Geolocalización
  navigator.geolocation.getCurrentPosition((position) => {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const presicion = position.coords.accuracy;
    const altitud = position.coords.altitude;
    data.innerHTML = `<p>Altitud: ${altitud} Presicion es: ${ presicion} metros</p>`;
    mapaLink.innerHTML = `Latitude: ${latitud} Longitude: ${longitud}`;
    mapaLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;
 
  },(error) => {alert('pero que haces tio, Error: '+error)});
}