import { FormEvent, useEffect, useState } from 'react'
import { WeatherDashboard } from './components/WeatherDashboard'
import { apiGeolocation, apiWeatherData } from './api/axios'

export function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    humidity: 0,
    weather_description: "",
    wind_speed: ""
  })
  const [greeting, setGreeting] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    const date = new Date().getHours()
    
    if(date > 4 && date < 12){
      setGreeting("Bom dia ^^")
    } else if(date > 11 && date < 18) {
      setGreeting("Boa tarde ^^")
    } else if(date > 17 && date < 0){
      setGreeting("Boa noite fellas")
    } else{
      setGreeting("bora dormir né?")
    }
  }, [])
  
  async function gettingNewGeolocation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const location = formData.get("location") as string

    const data = await apiGeolocation.get(`${location}&limit=1&appid=${import.meta.env.VITE_OPENWEATHER_PRIVATE_KEY}`)
    const response = data.data[0]

    const latitude = response.lat
    const longitude = response.lon

    await handleSubmitLocation(latitude, longitude)
    setLocation(location)
  }

  async function handleSubmitLocation(latitude: number, longitude: number) {
    const data = await apiWeatherData.get(`onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${import.meta.env.VITE_OPENWEATHER_PRIVATE_KEY}`)
    const response = data.data

    console.log(response)
    setWeatherData({...weatherData, 
      temperature: response.current.temp.toFixed(),
      humidity: response.current.humidity,
      weather_description: response.current.weather[0].description,
      wind_speed: (response.current.wind_speed * 3.6).toFixed(0)
    })
  }

  return (
    <div className="flex items-center flex-col justify-center h-svh bg-gradient-to-b from-sky-600 to-amber-900 ...">
      <div className="text-sky-50 fixed top-0 text-4xl text-center py-4">
        <span>
          {greeting}
        </span>
      </div>
      
      <WeatherDashboard 
        location={location}
        temperature={weatherData.temperature}
        handleSubmitLocation={gettingNewGeolocation}
        humidity={weatherData.humidity}
        weather_description={weatherData.weather_description}
        wind_speed={weatherData.wind_speed}
      />
    </div>
  )
}