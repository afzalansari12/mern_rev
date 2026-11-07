let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let weather = document.querySelector(".weather");

btn.addEventListener("click", () => {

    let city = inp.value.trim();

    if (city === "") {
        weather.innerHTML = "<p>Please enter a city name!</p>";
        return;
    }

    weather.innerHTML = "<p>Loading weather...</p>";

  
    let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

    fetch(geoUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error("Geocoding API failed");
            }
            return res.json();7
        })
        .then(data => {

            if (!data.results || data.results.length === 0) {
                throw new Error("City not found!");
            }

            let place = data.results[0];

            let lat = place.latitude;
            let lon = place.longitude;
            let cityName = place.name;
            let country = place.country;

            let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m`;

            return fetch(weatherUrl)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Weather API failed");
                    }
                    return res.json();
                })
                .then(data => {
                    let current = data.current;
                    weather.innerHTML = `
                        <h2>${cityName}, ${country}</h2>
                        <p>🌡️ Temperature: ${current.temperature_2m} °C</p>
                        <p>🤔 Feels Like: ${current.apparent_temperature} °C</p>
                        <p>💧 Humidity: ${current.relative_humidity_2m}%</p>
                        <p>💨 Wind Speed: ${current.wind_speed_10m} km/h</p>
                        <p>🌧️ Precipitation: ${current.precipitation} mm</p>
                        <p>🌤️ ${getWeather(current.weather_code)}</p>
                    `;
                });
        })
        .catch(err => {
            weather.innerHTML = `<p>${err.message}</p>`;
        });
});

function getWeather(code) {

    if (code === 0) return "Clear Sky ☀️";
    if ([1, 2, 3].includes(code)) return "Partly Cloudy ⛅";
    if ([45, 48].includes(code)) return "Foggy 🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle 🌦️";
    if ([61, 63, 65, 66, 67].includes(code)) return "Rainy 🌧️";
    if ([71, 73, 75, 77].includes(code)) return "Snowy ❄️";
    if ([80, 81, 82].includes(code)) return "Rain Showers 🌧️";
    if ([85, 86].includes(code)) return "Snow Showers ❄️";
    if ([95, 96, 99].includes(code)) return "Thunderstorm ⛈️";

    return "Weather information unavailable";
}