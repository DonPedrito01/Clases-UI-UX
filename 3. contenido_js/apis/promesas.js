
'use strict';

// get, post , put, delete, head -> verbos

const promesa = new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.onload = function(){
        if(request.status === 200){
            resolve(JSON.parse(request.response));
        }
        else{
            reject();
        }
    };
    request.send();

});

promesa
    .then(resolve=>{
        console.log(resolve);
    })
    .catch(error=>{
        console.error(error);
    })
    .finally(console.log('Ha finalizado la promesa'));


