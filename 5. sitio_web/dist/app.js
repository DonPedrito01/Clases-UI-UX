const URL_BASE = "http://localhost:8080/";

const buscador = document.getElementById("input_buscar");
const busncando = document.getElementById("buscando");

const listado = document.getElementById ("listPrice");
const fragment = new DocumentFragment();
const template = document.getElementById("template").content;

// colocar las credenciales del API

const user_name = "admin";
const pass = "1234";

// Obtener data de la API 

async function getUserData(){
    
    try{
        const credentials =  btoa(`${user_name}:${pass}`);
        const resp = await axios.get(  URL_BASE + "datos" , {
            headers: {Authorization: `Basic ${credentials}`}
        });
    const users = resp.data;
    console.log(users);
    return users;
    }
    catch (error){
        console.error ("ERROR AL OBTENER DATOS: "+ error.message);
    }
}

const data_users = await getUserData();
const testTemplate = "content" in document .createElement ("template");

if (testTemplate){
    data_users.forEach(e =>{
        template.querySelector("h3").innerHTML = `Usuario Num: ${e.datId}`;
        template.querySelector("#document").innerHTML = `Documento num: ${e.datDocument} ${e.datNames} ${e.datNames}`;
        template.querySelector("#mail") .innerHTML = `Correo ${e.datEmail}`;
        const myItem = template.cloneNode(true);
        fragment.appendChild(myItem);
    });
}

listado.appendChild(fragment);

// crear efecto del buscador
buscando.addEventListener ('click',(e)=>{
    if (buscador.classList.contains('buscarOculto')){
        buscador.classList.remove('buscarOculto');
        buscador.classList.add('buscarVisible');
    }
    else if(buscador.classList.contains('buscarVisible')){
        buscador.classList.remove('buscarVisible');
        buscador.classList.add('buscarOculto');
    }
});

