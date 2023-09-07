import { WEATHER_API_URL, WEATHER_API_APP_ID } from "./weather-api.js";
import { constructWeatherHTML } from "./construct-weather-html.js";

export function getWeather(city) {
  const url = `${WEATHER_API_URL}&q=${city}&cnt=5&appid=${WEATHER_API_APP_ID}`;
  if (wrapper) loadWeatherFormApi(url);
}

async function loadWeatherFormApi(url) {
  const response = await fetch(url, {
    method: "GET",
  });

  const responseResult = await response.json();

  if (response.ok) {
    constructWeatherHTML(responseResult);
  } else {
    errorMessage.innerHTML = responseResult.message;
  }
}
