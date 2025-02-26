'use strict';

axios.get('https://api.covidtracking.com/v1/us/current.json')

.then((response)=>{
    console.log(response.data);
    console.log(response.data[0].date);
    console.log(response.data[0].dateChecked);
    console.log(response.data[0].hospitalized);

    const fecha = response.data[0].dateChecked;
    const hospitalizados = response.data[0].hospitalized;

    data.innerHTML = `<p>Fecha de actualización: ${fecha} </p><p>Total de hospitalizados: ${hospitalizados}</p>`;
})
.catch((error)=>{
    console.error(error);
})