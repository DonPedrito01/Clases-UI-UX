const URL_BASE = "http://localhost:8080/";

const buscador = document.getElementById("input_buscar");
const busncando = document.getElementById("buscando");

const listado = document.getElementById ("listPrice");
const fragment = new DocumentFragment();
const template = document.getElementById("template").content;

// colocar las credenciales del API


// crear efecto del buscador
buscando.addEventListener ('click',(e)=>{
    if (buscador.classList.contains('buscarOculto')){
        buscador.classList.remove('buscarOculto');
        buscador.classList.add('buscarVisible');
    }
    else if(buscador.classList.contains('buscarVisible')){
        buscador.classList.remove('buscarVisible');
        buscador.classList.add('buscarOculto');
    }
});