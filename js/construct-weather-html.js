const createWeatherTemplate = (forecast, location, days) => {
  return forecast
    .map((dataCopy, i) => {
      if (i === 0) {
        return `
				<div class="weather__today">
					<div class="weather__header">
						<div class="weather__main">
							<div class="weather__temp">${dataCopy.temperature}</div>
							<div class="weather__status">${dataCopy.status}</div>
						</div>
						<div class="weather__city">${location}</div>
						<div class="weather__icon">
							<img src="http://openweathermap.org/img/w/${dataCopy.icon}.png" alt="${dataCopy.status}">
						</div>
					</div>
				</div>`;
      } else {
        return `
				<div class="next-days-of-the-week">
					<div class="week__day">${days[(new Date().getDay() + i) % 7]}</div>
					<div class="weather__icon">
						<img src="http://openweathermap.org/img/w/${dataCopy.icon}.png" alt="${
          dataCopy.status
        }">
					</div>
					<div class="weather__status">${dataCopy.status}</div>
					<div class="weather__temp-nextDays">
						<div class="weather__temp-day">
							<p class="temp__day-tittle">Day</p>
							<p class="temp__day-temperature temperature">${dataCopy.maxTemperature}</p>
						</div>
						<div class="weather__temp-night">
							<p class="temp__night-temperature temperature">${dataCopy.minTemperature}</p>
							<p class="temp__night-tittle">Night</p>
						</div>
					</div>
				</div>`;
      }
    })
    .join("");
};

export function constructWeatherHTML(data) {
  const location = data.city.name;
  let dataCopy = [...data.list];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weatherForecast = dataCopy.map((forecast) => ({
    icon: forecast.weather[0].icon,
    temperature: Math.round(forecast.main.temp),
    status: forecast.weather[0].main,
    minTemperature: Math.round(forecast.main.temp_min),
    maxTemperature: Math.round(forecast.main.temp_max),
  }));

  const weatherHTML = createWeatherTemplate(weatherForecast, location, days);
  weather.innerHTML = weatherHTML;
}
