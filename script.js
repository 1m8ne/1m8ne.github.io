// Replace YOUR_API_KEY with your actual OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY";

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
                return;
            }
            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(err => {
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data.</p>`;
        });
}
