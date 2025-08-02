const apiKey = "2ae7c25cdfbbaa9ee3163eb421a79a69";
const lat = 25.7617;  
const lon = -80.1918; 

const weatherCard = document.querySelector(".card.weather");
const forecastCard = document.querySelector(".card.forecast");

async function fetchCurrentWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Current weather HTTP error: ${response.status}`);
  }
  return response.json();
}

async function fetchForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Forecast HTTP error: ${response.status}`);
  }
  return response.json();
}

function getWeekday(unix_timestamp) {
  const date = new Date(unix_timestamp * 1000);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

function displayCurrentWeather(data) {
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(undefined, {hour: "2-digit", minute:"2-digit"});
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(undefined, {hour: "2-digit", minute:"2-digit"});

  weatherCard.innerHTML = `
    <h2>Current Weather</h2>
    <p><strong>${temp}°F</strong><br>
       ${description.charAt(0).toUpperCase() + description.slice(1)}<br>
       Humidity: ${humidity}%<br>
       Sunrise: ${sunrise}<br>
       Sunset: ${sunset}
    </p>
  `;
}

function displayForecast(data) {
  const forecastItems = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

  let forecastHTML = "<h2>3-Day Forecast</h2>";
  forecastItems.forEach(item => {
    const day = getWeekday(item.dt);
    const temp = Math.round(item.main.temp);
    const description = item.weather[0].description;
    forecastHTML += `
      <p><strong>${day}</strong>: ${temp}°F, ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
    `;
  });

  forecastCard.innerHTML = forecastHTML;
}

async function loadWeather() {
  try {
    const current = await fetchCurrentWeather();
    displayCurrentWeather(current);

    const forecast = await fetchForecast();
    displayForecast(forecast);
  } catch (error) {
    weatherCard.innerHTML = `<p>Error loading weather data: ${error.message}</p>`;
    forecastCard.innerHTML = "";
    console.error(error);
  }
}

 document.addEventListener("DOMContentLoaded", loadWeather);
