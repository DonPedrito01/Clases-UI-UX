import { modalAlert, addStudent } from "./paint.js";
import { validateString, validateTelephone } from "./validate.js";

const btnSend = document.getElementById ('btnEnviar');

// envento por .addEventListener

btnSend.addEventListener('click', (e)=>{
    e.preventDefault();
    const nombre = document.querySelector('#name').value.trim().toUpperCase(); //depronto error comillas
    const apellidos = document.querySelector("#lastName").value.trim().toUpperCase();
    const correo = document.querySelector("#mail").value.trim().toUpperCase();
    const telefono = document.querySelector("#telephone").value.trim().toUpperCase();
    const mensaje = document.querySelector("#fm_contact").value.trim().toUpperCase();

    if (validateString (nombre) || validateString(apellidos) || validateString(correo) || validateTelephone(telefono)){
        modalAlert("error con la data", "");
        return;
    }
    addStudent(nombre,apellidos,correo, telefono, mensaje);
})