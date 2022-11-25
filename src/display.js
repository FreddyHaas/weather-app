const initiateWebsite = (() => {
    const button = document.getElementById('input-button');
    const input = document.getElementById('location');
    
    button.addEventListener('click', async () => {
        const data = await loadWeatherData(input.value);
        displayContent(data);
    })
})();

async function loadWeatherData(location) {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cd83fbfa76f47c86adab313f170dcdcc`, {mode: 'cors'});
    const data = await response.json();
    const relevantData = {
        "location": location,
        "temp": data.main.temp,
        "feels_like": data.main.feels_like,
        "humidity": data.main.humidity,
        "wind": data.wind.speed
     }
    console.log(relevantData.temp);
    return relevantData;
}

function displayContent(data) {
    const display = document.querySelector('.display');
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    city.textContent = `${data.location}`;
    temp.textContent = `${convertToCelsius(data.temp)} °C`;
    feelsLike.textContent = `Feels like: ${convertToCelsius(data.feels_like)} °C`;
    humidity.textContent = `Humidity: ${Math.round(data.humidity)} %`;
    wind.textContent = `Wind: ${Math.round(data.wind*10)/10} km/h`;

    display.setAttribute('id','active');
}

function convertToCelsius(kelvin) {
    const celsius = (kelvin - 273.15);
    const roundedCelsius = Math.round(celsius*10)/10
    return roundedCelsius;
}


