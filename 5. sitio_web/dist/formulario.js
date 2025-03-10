// transformaciones y animaciones

import {Validation} from "./Validation.js";

//instanciacion de clase 

const validation = new Validation ();

// seleccion del formulario

const formulario = document.querySelector('#form');
const btnSend = document.getElementById('btnSend');

// objeto para validar cada uno de los inputs del formulario
const formValid ={
    nombre: false,
    apellidos: false,
    correo: false,
    politica: false,
    documento: false    
}

// validacion de cada uno de los elementos de cambio
formulario.addEventListener ("change", (e)=>{
    const inputId = e.target.id;
    console.log("Id de input: " + inputId);
    const inputValue = e.target.value;
    console.log("Valor de input: " + inputValue);
    const inputClass = e.target.ClassList;
    console.log("Clase de input: "+ inputClass);


    //estilos de validación
    const validClass = () =>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    const inValidClass = () =>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }
 
    switch (inputId){
        case "names":
            formValid.nombres = validation.validNames(inputValue);
            if(formValid.nombres){
                validClass();
            }
            else{
                inValidClass();
            }
            console.log(Object.values(formValid));
            break;
        case "lastNames":
            formValid.apellidos = validation.validNames(inputValue);
            if(formValid.apellidos){
                validClass();
            }
            else{
                inValidClass();
            }
            console.log(Object.values(formValid));
            break;
        
        case "mail":
            formValid.correo = validation.validMail(inputValue);
            if(formValid.correo){
                validClass();
            }    
            else{
                inValidClass();
            }
            console.log(Object.values(formValid));
            break;
         
        case "document":
            formValid.documento = validation.validDocument(inputValue);
            if(formValid.docuemento){
                validClass();
            }    
            else{
                inValidClass();
            }
            console.log(Object.values(formValid));
            break;
    
    }
});