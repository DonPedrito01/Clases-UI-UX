'use strict';

//1. Cadena en un arreglo
let cadenaDias = "lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let myArray = cadenaDias.split("_");

console.log(myArray);

//2. Buscar un valor, si no lo encuentra retorna un undefined

const result = myArray.find((e)=>{
    return e === "jueves";
})

console.log(result);

//3. Buscar indice de un valor de arreglo, sino lo consigue -1

const indice = myArray.findIndex((e)=> e=== "martess");
console.log(indice);

//4. verificar si existe un elemento dentro del arreglo includes, retorna true o false

console.log("Includes: "+ MimeTypeArray.includes("sabado"));

//5. Filtrar elementos segun una condicion

const myArrayy = [1,2,3,4,5,6,7,8,9,10];
const filtro = myArrayy.filter((e)=> e%2 === 0);
console.log(filtro);