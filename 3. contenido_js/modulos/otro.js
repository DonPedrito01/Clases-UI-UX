function buscarElementos(arreglo, dato){
    let result = arreglo.filter((item)=>item > 5 && item < 100);
    return result;
}

const saludarA = (nombre) => `Hola estudiante: ${nombre} \n\tbienvenido a la clase de JavaScript`;

export {buscarElementos, saludarA};