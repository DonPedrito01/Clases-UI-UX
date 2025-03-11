// transformaciones y animaciones

import {Validation} from "./Validation.js";

//instanciacion de clase 

const validation = new Validation ();

// seleccion del formulario

const formulario = document.querySelector('#form');
const btnSend = document.getElementById('btnSend');

// objeto para validar cada uno de los inputs del formulario
const formValid = {
    nombres: false,
    apellidos: false,
    correo: false,
    documento: false,
    politica: false,    
}

// validacion de cada uno de los elementos de cambio
formulario.addEventListener ("change", (e)=>{

    const inputId = e.target.id;
    console.log("Id de input: "+inputId);
    const inputValue = e.target.value;
    console.log("Valor de input: "+inputValue);
    const inputClass = e.target.classList;
    console.log("Clase de input: "+inputClass);


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
            formValid.correo = validation.validMails(inputValue);
            if(formValid.correo){
                validClass();
            }    
            else{
                inValidClass();
            }
            console.log(Object.values(formValid));
            break;
         
        case "documento":
            formValid.documento = validation.validDocument(inputValue);
            if(formValid.documento){
                validClass();
            }    
            else{
                inValidClass();
            }
            console.log(Object.values(formValid));
            break;
        
        case "checkPolitica":
            formValid.politica = document.getElementById("checkPolitica").checked;
            if (formValid.politica) {
              validClass();
            } 
            else {
              inValidClass();
            }
            break;
    }
});