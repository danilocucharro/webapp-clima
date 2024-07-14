import { faMagnifyingGlass, faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent } from "react";

interface WeatherDashboardProps {
  handleSubmitLocation: (event: FormEvent<HTMLFormElement>) => void,
  temperature: number,
  location: string,
  weather_description: string,
  wind_speed: number,
  humidity: number,
}

export function WeatherDashboard({ 
  handleSubmitLocation,
  temperature,
  location,
  weather_description,
  wind_speed,
  humidity
 }: WeatherDashboardProps) {
  return(
    <div className="flex flex-col gap-2 w-96 h-80">
      <div className="flex p-2 w-full h-12 rounded-3xl bg-zinc-900 text-2xl drop-shadow-2xl">
        <form onSubmit={handleSubmitLocation} className="w-full pl-2 flex gap-2">
          <input type="text" name="location" placeholder="Local" className="w-full bg-transparent text-zinc-100"/>

          <button type="submit" className="bg-sky-600 w-12 rounded-3xl flex items-center justify-center hover:bg-sky-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5" />
          </button>
        </form>
      </div>

      <div className="flex gap-2">
        <div className="bg-zinc-900 text-wrap rounded-3xl p-4 w-40 h-full text-center drop-shadow-2xl">
          <span className="text-zinc-100 text-8xl">{temperature} Cº</span>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <div className="bg-zinc-900 w-full h-28 rounded-3xl flex justify-center items-center drop-shadow-2xl">
            {location && (
              <div className="flex items-center justify-center flex-wrap gap-2">
                <img src="/usa_flag.jpeg" alt="Bandeira do Brasil" className="size-12 rounded-full bg-cover" />
                <span className="text-zinc-100 text-2xl">{location}</span>
              </div>
            )}
          </div>

          <div className="bg-zinc-900 w-full h-28 rounded-3xl flex flex-col gap-4 items-center justify-center drop-shadow-2xl">
            <span className="text-zinc-100 text-2xl">{weather_description}</span>
            <div className="flex h-4 items-center gap-2">
              <span className="text-zinc-400 flex items-center gap-2">
                <FontAwesomeIcon icon={faWind} />
                {wind_speed}km/h
              </span>

              <div className="w-px h-full bg-zinc-500" />

              <span className="text-zinc-400 items-center flex gap-2">
                <FontAwesomeIcon icon={faDroplet} />
                {humidity}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}