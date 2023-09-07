import { getWeather } from "./get-weather.js";

getWeather("London");

searchCity.onsubmit = function (event) {
  event.preventDefault();

  const inputValue = inputCity?.value?.trim();
  if (inputValue) getWeather(inputValue);
};
