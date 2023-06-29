let city = 'NANTES';
getTemperature(city);


function getTemperature(city) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nantes,fr&appid=21a1f290afe0bc8e2897c0a4466cd6fc&units=metric';

let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
  
request.onload = () => {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      let reponse = request.response;
      let temperature = reponse.main.temp;
      let city = reponse.name;
        
      document.querySelector('#ville').textContent = city;               
      document.querySelector('#temperature_label').textContent = temperature;
      } else {
        alert('Une erreur est survenue, réessayez plus tard !')
      }
    }
  }
}