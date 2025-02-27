const cardsEstudiantes = document.querySelector("#cardsEstudiantes");

// crear objeto de estudiantes

const addStudent = (name, lastNames, mail, telephone, msn) => {
    let person = {
        nombres: name,
        apellidos: lastNames,
        correo: mail,
        telefono: telephone,
        mensaje: msn
    };
    let text = `¿Esta segur@ ${person.nombres} de enviar la peticion?`;
    modalAlert(text, "aceptar", person);
}

function modalAlert (cad, tipo, person){

    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    texto.setAttribute("class", "textAlerta");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    const btnCerrar = document.createElement("input");
    btnCerrar.setAttribute ("type", "button");
    btnCerrar.setAttribute ("class", "btnAlerta");
    btnCerrar.setAttribute ("id", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);
    
    if(tipo === "aceptar"){
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute ("type", "button");
        btnEnviar.setAttribute ("class", "btnAlerta"); 
        btnEnviar.setAttribute ("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(person, "estudiante");
            document.getElementById("alerta").remove();
        }
    }
    else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }

}

const paintCard = (datos, tipo)=>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateStudent = document.querySelector("#templateEstudiante").content;
    if(tipo === "ESTUDIANTE"){
        let cloneTempl = templateStudent.cloneNode(true);
        cloneTempl.querySelector(".title-card").innerHTML = "DATOS DEL PQR <hr>";
        cloneTempl.querySelector(".data-card").innerHTML = `NOMBRES Y APELLIDOS: ${datos.nombres} ${datos.apellidos}`;
        cloneTempl.querySelector(".text-mail").innerHTML = `CORREO  ELECTRONICO: ${datos.correo}`;     
        cloneTempl.querySelector(".text-telefono").innerHTML = `NUMERO DE TELEFONO: ${datos.telefono}`;
        cloneTempl.querySelector(".text-msn").innerHTML = `MENSAJE DE TEXTO: ${datos.mensaje} `;

        fragmento.appendChild(cloneTempl);
    }

    cardsEstudiantes.appendChild(fragmento);

}

export {modalAlert, addStudent}; // boxAlert as saveStu