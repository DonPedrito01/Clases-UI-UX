class datos{
    constructor(){
        this.datos = [];
        this.getApi();
    }

    getDatos(){
        return this.datos;
    }

    async getApi(){   
        this.datos = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((json)=>{
            for (let e of json){
                this.datos.push(e.title);
            }
            return this.datos;
        })

        .catch((error)=>{
            console.error(error);
        })

        .finally(console.info("finalizo la peticion"));
    }
}

export {datos};