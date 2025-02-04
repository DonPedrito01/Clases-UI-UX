'use strict';

//1. funcion clasica

function sumar(var1,var2){
    return var1 + var2;
}

//Invocacion de funciones 

console.log(sumar(3,10));


//2. Funcion tipo flecha 
const restar = (var1, var2) => {
    return var1 - var2;
}

console.log(restar(8,10));

//3. Funcion anonima o expresada

const multiplicar = function(num1,num2,num3){
    //Template string

    let mensaje = `La multiplicacion de ${num1} * ${num2} * ${num3} es: ${num1*num2*num3}`;
    console.log(mensaje);
}

multiplicar(2,5,10);

//4. Funciones tipo objeto 

let numero1 = 23;
let numero2 = 41;

const multiplicacion = new Function("num1", "num2", "return num1*num2");

let result = multiplicacion(numero1,numero2);

//5. Callback

let msg = "hola bebe";
const saludo = function(mensaje ){
    console.log("hola mundo " + mensaje );
}

function saludar (callback, message){
    callback(message);
}

saludar (saludo, msg);