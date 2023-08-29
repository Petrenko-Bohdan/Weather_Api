const weatherBlock = document.querySelector('#weather');

// const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&cnt=5&appid=f98f993666114491812bda5f9b1b0ae8`
let city = 'London';

searchCity.onsubmit = function(event){
	event.preventDefault();

	city = inputCity.value.trim();
	
	const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&cnt=5&appid=f98f993666114491812bda5f9b1b0ae8`
	
	async function loadWeather(event){

		const response = await fetch (WEATHER_URL, {
			method: 'GET',
		});
		const responseResult = await response.json();
		
		if(response.ok){
			getWeather(responseResult);
		} else {
			weatherBlock.innerHTML = responseResult.message;
		}
	}

	if(weatherBlock){
		loadWeather();
	}
}

function getWeather(data){
	const location = data.city.name;

	const currentlyTemp = Math.round(data.list[0].main.temp);
	const currentlyWeatherStatus = data.list[0].weather[0].main;
	const currentlyWeatherIcon = data.list[0].weather[0].icon;

	const nextDayWeatherStatus = data.list[1].weather[0].main;
	const nextDayWeatherIcon = data.list[1].weather[0].icon;
	const nextDayTempMax = Math.round(data.list[1].main.temp_max);
	const nextDayTempMin = Math.round(data.list[1].main.temp_min);
	
	const thirdDayWeatherStatus = data.list[2].weather[0].main;
	const thirdDayWeatherIcon = data.list[2].weather[0].icon;
	const thirdDayTempMax = Math.round(data.list[2].main.temp_max);
	const thirdDayTempMin = Math.round(data.list[2].main.temp_min);

	const fourthDayWeatherStatus = data.list[3].weather[0].main;
	const fourthDayWeatherIcon = data.list[3].weather[0].icon;
	const fourthDayTempMax = Math.round(data.list[3].main.temp_max);
	const fourthDayTempMin = Math.round(data.list[3].main.temp_min);

	const fifthDayWeatherStatus = data.list[4].weather[0].main;
	const fifthDayWeatherIcon = data.list[4].weather[0].icon;
	const fifthDayTempMax = Math.round(data.list[4].main.temp_max);
	const fifthDayTempMin = Math.round(data.list[4].main.temp_min);

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentDate = new Date();
let nextDayOfWeek = days[(currentDate.getDay()+1)%7];
let thirdDayOfWeek = days[(currentDate.getDay()+2)%7]; 
let fourthDayOfWeek = days[(currentDate.getDay()+3)%7];
let fifthDayOfWeek = days[(currentDate.getDay()+4)%7];

	const template = `<div class="weather__today">
	<div class="weather__header">
		<div class="weather__main">
		<div class="weather__temp">${currentlyTemp}</div>	
			<div class="weather__status">${currentlyWeatherStatus}</div>
		</div>
		<div class="weather__city">${location}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${currentlyWeatherIcon}.png" alt="${currentlyWeatherStatus}">
		</div>
	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${nextDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${nextDayWeatherIcon}.png" alt="${nextDayWeatherIcon}">
		</div>
		<div class="weather__status">${nextDayWeatherStatus}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${nextDayTempMax}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${nextDayTempMin}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
		</div>
	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${thirdDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${thirdDayWeatherIcon}.png" alt="${thirdDayWeatherStatus}">
		</div>
		<div class="weather__status">${thirdDayWeatherStatus}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${thirdDayTempMax}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${thirdDayTempMin}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
		</div>
	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${fourthDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${fourthDayWeatherIcon}.png" alt="${fourthDayWeatherStatus}">
		</div>
		<div class="weather__status">${fourthDayWeatherStatus}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${fourthDayTempMax}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${fourthDayTempMin}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
		</div>
	</div>
</div>
<div class="next-days-of-the-week">
	<div class="week__day">${fifthDayOfWeek}</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${fifthDayWeatherIcon}.png" alt="${fifthDayWeatherStatus}">
		</div>
		<div class="weather__status">${fifthDayWeatherStatus}</div>
		<div class="weather__temp-nextDays">
			<div class="weather__temp-day">
				<p class="temp__day-tittle">
					Day
				</p>
				<p class="temp__day-temperature temperature">
					${fifthDayTempMax}
				</p>
			</div>
			<div class="weather__temp-night">
				<p class="temp__night-temperature temperature">
					${fifthDayTempMin}
				</p>
				<p class="temp__night-tittle">
					Night
				</p>
		</div>
	</div>
</div>
`;
weatherBlock.innerHTML = template;
}

