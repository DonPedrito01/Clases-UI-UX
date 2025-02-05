'use strict';

const btnOK = document.getElementById('ok');
const listNotes = document.getElementById('listaNotas');

const btnAvg = document.createElement('button');

// atributos al boton
btnAvg.type = 'button';
btnAvg.textContent = 'Promedio';
btnAvg.className = 'btn btn-info';
btnAvg.id = 'btn-promedio';

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
        else{
            alert('Ingrese un numero entre 2 y 10');
        }
    }
    else{
        alert('Ingrese un numero de verdad');
    }
});

const listaPromedio = document.getElementById('listaPromedio');
const seccion = document.createElement('section');
const p = document.createElement('p');

document.body.appendChild(seccion);

seccion.className = "container";
seccion.style = "border-radius: 5px; text-center; background: aquamarine; margin: 20px auto;"
p.className = "text-center";


// generar evento por propiedad

btnAvg.addEventListener('click', () => {
    let notas = document.querySelectorAll('#nota');
    let bandera = true;
    let suma = 0;

    notas.forEach(input => {
        let valor = parseFloat(input.value);
        if (isNaN(valor) || valor < 0 || valor > 5) {
            bandera = false;
        } else {
            suma += valor;
        }
    });
    if (!bandera) {
        alert("Ingrese valores entre 0 y 5 correctamente.");
    } else {
        let promedio = suma / notas.length;
        seccion.appendChild(p);
        seccion.textContent = `El promedio es: ${promedio}`;

    }
});

// el promedio tenemos que mostrarlo con un section que se llame resultado del promedio
// validar rango de notas y que sean numeros



