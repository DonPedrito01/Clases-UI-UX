'use strict';

let var1= 78;


//1. Esctructura de control si sino
if(var1 % 2 == 0) {
    console.log('Es par');
}else{
    if(var1 % 3 == 1) {
        console.log('Es impar y multiplo de 3');
    }else{
        console.log('Es impar ');
    }
}

//2.Ternario -> abreviacion del if else

let result = (var1>1) ? "Es positivo" : "Es negativo";
//console.log(result); 

//Bucles
//1. While-do while-for

//While 
let i=10;
while(i>0){
    console.log(i);
    i--;
}

console.log("---------------------------------------------");

//Do-while

do{
    console.log(i);
    i++;
}while(i<10);

//For 

for(let i=0;i<19;i++){
    console.log(i);
}

//Switch
let option=3;
switch(option){
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tre");
        break;        
    default:
        console.log("Error :P");

}

//evaluar cualitativamente las notas del 0 al 5

let nota = 5;
switch(true){
    case nota >= 0 && nota < 3:
        console.log("El mas tonto AJJAA");
        break;
    case nota >= 3.0 && nota <= 5.0:
        console.log("soy el mejoor JAJAJ el primoooo");
        break;
    default:
        console.log("nota inválida");
}
