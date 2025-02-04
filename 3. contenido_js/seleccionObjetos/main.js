'use strict';

// fomas de seleccionar elementos en el DOM
// 1. Seleccion por ID

const parrafos = document.getElementById('parrafo');
console.log(parrafos);

// 2. Seleccion por el atributo o propiedad name

const names = document.getElementsByName('respuesta');
console.log(names);

// 3. Seleccion por el atributo o propiedad main 
const parrafo = document.querySelector('#parrafo');

//  Seleccion por la etiqueta
const titulo = document.querySelector('h1');

// Seleccion por class 
const indicacion = document.querySelector ('.indicacion');
const todosParrafos = document.querySelectorAll('p');

function respuesta(){
    console.log(document.getElementById('respuesta').value);
}

const numero1 = parseFloat (prompt('Ingresa un numero'));
const numero2 = parseFloat (prompt('Ingresa otro numero'));

const sumar = (num1 , num2)=>{
    return num1 + num2;
}

alert ('la suma es: '+ sumar(numero1, numero2));