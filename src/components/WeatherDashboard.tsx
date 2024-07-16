import { faMagnifyingGlass, faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent } from "react";

interface WeatherDashboardProps {
  handleSubmitLocation: (event: FormEvent<HTMLFormElement>) => void,
  temperature: number,
  location: string,
  weather_description: string,
  wind_speed: string,
  humidity: number,
  weather_conditions_icon: string
}

export function WeatherDashboard({ 
  handleSubmitLocation,
  temperature,
  location,
  weather_description,
  wind_speed,
  humidity,
  weather_conditions_icon
 }: WeatherDashboardProps) {
  return(
    <div className="flex flex-col gap-2 w-96 h-80">
      <div className="flex p-2 w-full h-12 rounded-3xl bg-zinc-900 text-2xl shadow-sm shadow-zinc-900">
        <form onSubmit={handleSubmitLocation} className="w-full pl-2 flex gap-2">
          <input type="text" name="location" placeholder="Local" className="w-full bg-transparent text-zinc-100"/>

          <button type="submit" className="bg-sky-600 w-12 rounded-3xl flex items-center justify-center hover:bg-sky-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5" />
          </button>
        </form>
      </div>

      {location !== "" ? (
        <div className="flex gap-2">
          <div className="bg-zinc-900 text-wrap rounded-3xl p-4 w-40 h-full text-center shadow-md shadow-zinc-900">
            <span className="text-zinc-100 text-8xl">{temperature} Cº</span>
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <div className="bg-zinc-900 w-full h-28 rounded-3xl flex justify-center items-center shadow-md shadow-zinc-900">
              {location && (
                <div className="flex flex-col items-center text-center justify-center">
                  <img src="/usa_flag.jpeg" alt="Bandeira do Brasil" className="size-10 rounded-full bg-cover" />
                  <span className="text-zinc-100 text-2xl">{location}</span>
                </div>
              )}
            </div>

            <div className="bg-zinc-900 w-full h-28 px-4 rounded-3xl flex gap-5 shadow-md shadow-zinc-900">
              <div className="flex flex-col text-center">
                <img 
                  src={`https://openweathermap.org/img/wn/${weather_conditions_icon}@2x.png`} 
                  alt={`condição climática: ${weather_description}`} 
                  className="size-14"
                />

                <span className="text-zinc-400 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faWind} />
                  {wind_speed}km/h
                </span>

                <span className="text-zinc-400 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faDroplet} />
                  {humidity}%
                </span>
              </div>
              <div className="flex items-center text-center w-24">
                <span className="text-zinc-100 text-lg">{weather_description}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}