'use strict';

const miParrafo = document.createElement('p');
const section1 = document.createElement('section');
const h1 = document.querySelector('h1');

// asignar elementos a las etiquetas creadas 

miParrafo.id = "miParrafo";
miParrafo.className="otro-parrafo";
miParrafo.style="border-radius:5%";
miParrafo.textContent = "hola mundo :3";
miParrafo.innerHTML = "<b> hola world :3 </b>";

// insertarlo en el DOM1
document.body.appendChild(miParrafo);

// section
section1.style = "font-size: 25px; text-align: center; background-color: lightblue; padding: 30px;";
section1.textContent = "Hola section";

document.body.appendChild(section1);

h1.appendChild(section1);