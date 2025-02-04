'use strict';
const myArray = [1,2,3,4,5,6,7,8,9,10,11];
let myArray2 = new Array('a','e','i','o','u');
console.log(myArray[7]);
let myArray3 = [1, '23',"Hola Mundo"];
console.log(myArray3);

//Iterar arreglos

/*for (let i=0; i<myArray.length; i++) { 
    console.log(myArray[i]);
}

//Foreach arreglos, funciones tipo flecha
myArray2.forEach(elemento =>{
    console.log(elemento);
});

//foreach con funciones anonimas
myArray3.forEach(function(e,i){
    console.log(e,i);
});*/


//for in - for of

for(let i in myArray2){
    console.log(myArray2[i]);
}

console.log("-------------------------------------");

for(let i of myArray2){
    console.log(i);
}

