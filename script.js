const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');


search.addEventListener('click',()  => {

  const APIKey = '7e4474c11ea4b9ef1eb28e00c642584e';
  const city = document.querySelector('.search-box  input').value;


  if (city == '')
  return;
fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={APIKey}').then(response => response.json()).then(json => {
  const image = document.querySelector('.weather-boxm img');
})
});
