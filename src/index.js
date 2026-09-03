function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function refreshWeather(response) {
    console.log(response.data.condition.description);

  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${response.data.condition.description}">`;
}
function searchCity(city) {
  let apiKey = "f8476c7fdoae40f4ct738bbc6b5e9bc3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function formatDate(date) {
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let hours = String(date.getHours()).padStart(2, "0");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
}

return `${day} ${hours}:${minutes}`;
}
function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let forecastHtml ="";

  days.forEach(function(day) {
    forecastHtml =
    forecastHtml +

          <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌥️</div>
            <div class="weather-forecast-temperatures">
                <div class="weather-forecast-temperature">
                    <strong>15°</strong> 
                    </div>
                    <div class="weather-forecast-temperature">10°</div>
            </div>
            </div>
  ;
});
forecastElement.innerHTML = forecastHtml;
}
searchCity("Johannesburg");
displayForecast();


