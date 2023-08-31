const defaultCity = "London";

function getWeather(city) {
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&cnt=5&appid=f98f993666114491812bda5f9b1b0ae8`;

  async function loadWeather() {
    const response = await fetch(WEATHER_URL, {
      method: "GET",
    });
    const responseResult = await response.json();
    if (response.ok) {
      constructWeatherHTML(responseResult);
    } else {
      wrapier.innerHTML = responseResult.message;
    }
  }
  if (wrapier) {
    loadWeather();
  }
}

getWeather(defaultCity);
searchCity.onsubmit = function (event) {
  event.preventDefault();

  const innputValue = inputCity?.value?.trim();
  if (!!innputValue) {
    getWeather(inputCity.value.trim());
  }
};

function constructWeatherHTML(data) {
  const location = data.city.name;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDate = new Date();
  let nextDayOfWeek = days[(currentDate.getDay() + 1) % 7];
  let thirdDayOfWeek = days[(currentDate.getDay() + 2) % 7];
  let fourthDayOfWeek = days[(currentDate.getDay() + 3) % 7];
  let fifthDayOfWeek = days[(currentDate.getDay() + 4) % 7];

  const weatherForecast = [];

  for (const forecast of data.list) {
    const weatherData = {
      icon: forecast.weather[0].icon,
      temperature: Math.round(forecast.main.temp),
      status: forecast.weather[0].main,
      minTemperature: Math.round(forecast.main.temp_min),
      maxTemperature: Math.round(forecast.main.temp_max),
    };
    weatherForecast.push(weatherData);
  }

  for (let i = 0; i < 5; i++) {
    const template = `<div class="weather__today">
	<div class="weather__header">
		<div class="weather__main">
		<div class="weather__temp">${weatherForecast[0].temperature}</div>	
			<div class="weather__status">${weatherForecast[0].status}</div>
		</div>
		<div class="weather__city">${location}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${weatherForecast[0].icon}.png" alt="${weatherForecast[0].status}">
		</div>
	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${nextDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${weatherForecast[1].icon}.png" alt="${weatherForecast[i].status}}">
		</div>
		<div class="weather__status">${weatherForecast[i].status}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${weatherForecast[1].maxTemperature}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${weatherForecast[1].maxTemperature}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
 			</div>
		</div>
 	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${thirdDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${weatherForecast[2].icon}.png" alt="${weatherForecast[i].status}}">
		</div>
		<div class="weather__status">${weatherForecast[2].status}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${weatherForecast[2].maxTemperature}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${weatherForecast[2].maxTemperature}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
 			</div>
		</div>
 	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${fourthDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${weatherForecast[2].icon}.png" alt="${weatherForecast[i].status}}">
		</div>
		<div class="weather__status">${weatherForecast[2].status}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${weatherForecast[3].maxTemperature}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${weatherForecast[3].maxTemperature}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
 			</div>
		</div>
 	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${fifthDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${weatherForecast[4].icon}.png" alt="${weatherForecast[i].status}}">
		</div>
		<div class="weather__status">${weatherForecast[4].status}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${weatherForecast[4].maxTemperature}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${weatherForecast[4].maxTemperature}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
 			</div>
		</div>
 	</div>
</div>
`;
    weather.innerHTML = template;
  }
  console.log(data);
}
