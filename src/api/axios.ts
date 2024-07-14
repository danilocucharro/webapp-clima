import axios from 'axios'

export const apiGeolocation = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0/direct?q="
})

export const apiWeatherData = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0"
})