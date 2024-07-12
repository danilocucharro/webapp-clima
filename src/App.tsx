import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export function App() {
  return (
    <div className="h-svh bg-gradient-to-b from-sky-600 to-amber-900 ...">
      <div className="text-sky-50 text-4xl text-center py-4">
        <span>
          Bom dia.
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-24 m-auto w-[390px] h-80">
        <div className="flex p-2 w-full h-12 rounded-3xl bg-zinc-900 gap-2 text-2xl">
          <input type="text" placeholder="Local" className="flex-1 bg-transparent p-2 text-zinc-100"/>

          <button type="button" className="bg-sky-400 w-12 rounded-3xl flex items-center justify-center hover:opacity-80 transition-opacity-0.5">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5" />
          </button>
        </div>

        <div className="flex gap-2">
          <div className="bg-zinc-900 text-wrap rounded-3xl p-4 w-40 h-full text-center drop-shadow-xl">
            <span className="text-zinc-100 text-8xl">20 Cº</span>
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <div className="bg-zinc-900 w-full h-28 rounded-3xl flex items-center justify-center drop-shadow-xl">
              <span className="text-zinc-100 text-2xl">São Paulo</span>
            </div>

            <div className="bg-zinc-900 w-full h-28 rounded-3xl flex flex-col gap-4 items-center justify-center drop-shadow-xl">
              <span className="text-zinc-100 text-2xl">Nublado</span>
              <div className="flex h-4 items-center gap-2">
                <span className="text-zinc-400">2.2km/h</span>

                <div className="w-px h-full bg-zinc-500" />

                <span className="text-zinc-400">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}