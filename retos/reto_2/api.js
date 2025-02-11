'use strict';

axios.get('https://api.covidtracking.com/v1/us/current.json')

.then((response)=>{
    console.log(response.data);

    const date = response.data.date;
    const states = response.data.states;
    const positive = response.data.positive;
    const info = response.data;

    
    data.innerHTML = `state: ${state} positive: ${positive} date: ${date}`

})
.catch((error)=>{
    console.error(error);
})