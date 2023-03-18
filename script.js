'use strict'
// Select all the needed data/elements
const searchInput = document.getElementById('search-input')
const searchBtn = document.querySelector('.search-icon', '.search-btn')
const locationName = document.querySelector('.name')
const date = document.querySelector('.date')
const icon = document.querySelector('.weather-icon')
const weatherCondition = document.querySelector('.condition')
const weatherTemp = document.querySelector('.weather-temp')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed')
const Weatherbody = document.querySelector('.flex')

// object to contain data to work with
const weather = {
  apiKey: '8a5aaa9f53a783becd9e74dedf2a8617',
  //   fetch data
  fetchWeatherApi: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        this.apiKey +
        '&units=metric'
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
  },
  //   Get the data needed from the api fetched above and store in a variable
  displayWeather: function (data) {
    const newLocationName = data.name
    const newIcon = data.weather[0].icon
    const newWeatherCondition = data.weather[0].description
    const newWeatherTemp = data.main.temp
    const newHumidiy = data.main.humidity
    const newWindSpeed = data.wind.speed

    // New data after restructing
    locationName.textContent = newLocationName
    icon.src = 'https://openweathermap.org/img/wn/' + newIcon + '@2x.png'
    weatherCondition.textContent = newWeatherCondition
    weatherTemp.textContent = newWeatherTemp + 'º'
    humidity.textContent = newHumidiy + '% '
    windSpeed.textContent = newWindSpeed + 'km/h'
  },
  search: function () {
    this.fetchWeatherApi(searchInput.value)
  },
}
// search button Functionality
searchBtn.addEventListener('click', () => {
  weather.search()
  Weatherbody.style.opacity = 1
})
