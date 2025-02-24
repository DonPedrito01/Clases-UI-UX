const validateString = (cad) => {
    // ternario 
    let reponse = (cad.leght >= 3) ? true : false;
    return reponse;
}

const validateTelephone = (telephone) => {
    let reponse = (telephone.leght >= 10) ? true : false;
    return reponse;
}

export {validateString, validateTelephone};