class Validation {
  constructor() {}
  inputValid(input, regex) {
    return input.match(regex) ? true : false;
  }
  validNames(cad) {
    const nameRx = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g; //Rx expression regular
    const response = this.inputValid(cad, nameRx);
    return response;
  }

  validDocument(cad) {
    const documentRx = /^\d+$/;
    const response = this.inputValid(cad, documentRx);
    return response;
  }

  validMails(cad) {
    const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    const response = this.inputValid(cad, mailRx);
    return response;
  }
  
  validForm = (object)=>{
    const valores = Object.values(object);
    const response = valores.findIndex(e => e === false);
    return response;
  }
}

export {Validation};