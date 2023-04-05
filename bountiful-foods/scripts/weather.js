const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windSpeed = document.querySelector('#windspeed');
const captionDesc = document.querySelector('figcaption');
const day1Temp = document.querySelector("#day1");
const day2Temp = document.querySelector("#day2");
const day3Temp = document.querySelector("#day3");

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&units=imperial&appid=712d41b63fbf8971f61376c9e8ac70a6';
const dayTempsUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=33.1581&lon=-117.3506&cnt=3&units=imperial&appid=712d41b63fbf8971f61376c9e8ac70a6';

async function apiFetch() {
  try {
    const currentResponse = await fetch(currentUrl);
    if (currentResponse.ok) {
      const currentData = await currentResponse.json();
      displayCurrentTemp(currentData);
    } else {
      throw Error(await currentResponse.text());
    }

    const forecastResponse = await fetch(dayTempsUrl);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      displayForecast(forecastData);
    } else {
      throw Error(await forecastResponse.text());
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
  
apiFetch();

function displayCurrentTemp(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)} mph`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    let descUp = desc.toUpperCase();

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descUp);
    captionDesc.textContent = descUp;

    const t = weatherData.main.temp.toFixed(0);
    const windspeed = weatherData.wind.speed.toFixed(0);
    let windChillFahrenheit = document.querySelector("#windChillFahrenheit");

    if (t <= 50 && windspeed >= 3.0) {
        windChillFahrenheit = 35.74 + (0.6215*t) - (35.75*Math.pow(windspeed, 0.16)) + (0.4275*t*Math.pow(windspeed, 0.16));

        windChillFahrenheit = windChillFahrenheit.toFixed(2);

        document.querySelector("#windChillFahrenheit").innerHTML = `${windChillFahrenheit} F`;
    }
    else {
        document.querySelector("#windChillFahrenheit").innerHTML = "N/A";
    }
}

function displayForecast(weatherData) {
  day1Temp.innerHTML = `${weatherData.list[0].temp.day.toFixed(0)} F`;
  day2Temp.innerHTML = `${weatherData.list[1].temp.day.toFixed(0)} F`;
  day3Temp.innerHTML = `${weatherData.list[2].temp.day.toFixed(0)} F`;
}