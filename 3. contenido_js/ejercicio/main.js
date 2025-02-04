'use strict';

const btnOK = document.getElementById('ok');
const listNotes = document.getElementById('listaNotas');

const btnAvg = document.createElement('button');

// atributos al boton
btnAvg.type = 'button';
btnAvg.textContent = 'Promedio';
btnAvg.className = 'btn btn-info';

// generar evento por la propiedad addeventlistener

// generar eventos
btnOK.addEventListener('click', ()=>{
    let cantNotas = parseInt (document.getElementById('cantNotas').value);
    if(!isNaN(cantNotas)){
        if(cantNotas >= 2 && cantNotas <= 10){
            for (let i=0; i<cantNotas; i++){
                const div = document.createElement('div');
                div.className = "col-md-6 col-sm-12";
                const input = document.createElement('input');
                input.setAttribute('type', 'number');
                input.id = 'nota';
                input.min = 0;
                input.max = 5;
                input.step = 0.1;
                input.className = 'form-control';
                div.appendChild(input);
                listNotes.appendChild(div);
            }
            listNotes.appendChild(btnAvg);
        }
    }
    else{
        alert('Ingrese un numero de verdad');
    }
});

// generar evento por propiedad

btnAvg.onClick = function(){
    let arrayInput = document.querySelectorAll('#nota');
    let avg = 0;
    arrayInput.forEach((input)=>{
        avg += parseFloat(input.value);
    }); 
    avg = avg / arrayInput.length;
    alert (`El promedio es: ${avg}`);
}

// el promedio tenemos que mostrarlo con un section que se llame resultado del promedio
// validar rango de notas y que sean numeros