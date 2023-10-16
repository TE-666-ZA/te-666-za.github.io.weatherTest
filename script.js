

async function getWeather() {

    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const location = await response.json();
    const {latitude, longitude, city} = location;

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();
    const {current_weather} = weatherData;
    const {temperature, windspeed, weathercode} = current_weather;

   const codeWeather = wetherCodeDecode(weathercode);

    console.log(city, temperature + "C ", windspeed + "km/h", codeWeather)

    const temp = document.getElementById("temp").textContent = "Temperature " + temperature + " °C";
    const wind = document.getElementById("wind").textContent = "Wind speed ≈ " + windspeed + " m/s"
    const  info = document.getElementById("descr").textContent = codeWeather
}

function wetherCodeDecode(weathercode) {
    switch (weathercode) {
        case 0:
            return description = "Clear sky";
          
        case 1:
        case 2:
        case 3:
           return description = "Mainly clear, partly cloudy, and overcast";
         
        case 45:
        case 48:
           return description = "Fog and depositing rime fog";
           return
        case 51:
        case 53:
           return description = "Drizzle: Light, moderate, and dense intensity";
           return
        case 56:
        case 57:
           return description = "Freezing Drizzle: Light and dense intensity";
           return
        case 61:
        case 63:
        case 65:
           return description = "Rain: Slight, moderate and heavy intensity";
           return
        case 66:
        case 67:
           return description = "Freezing Rain: Light and heavy intensity";
           return
        case 71:
        case 73:
        case 75:
           return description = "Snow fall: Slight, moderate, and heavy intensity ";
           return
        case 77:
           return description = "Snow grains";
           return
        case 80:
        case 81:
        case 82:
           return description = " Rain showers: Slight, moderate, and violent";
           return
        case 85:
        case 86:
           return description = "Snow showers slight and heavy ";
           return
        case 95:
           return description = " Thunderstorm: Slight or moderate";
           return
        case 96:
        case 99:
           return description = " Thunderstorm with slight and heavy hail";
           return
    }
}


getWeather();