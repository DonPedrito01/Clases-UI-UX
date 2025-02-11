let endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon';
 
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
   
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
       
        if(response.status !== 'success') {
            console.log('query failed: ' + response.message);
            return
        }      
        if(response.countryCode == "CO") {
            console.log(response.lat);
            console.log(response.lon);
            console.log(response.city);
        }      
    }
};
console.log(xhr);
xhr.open('GET', endpoint, true);
xhr.send();