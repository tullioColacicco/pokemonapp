

import { Pokemon } from "../App"
import { dataPokemon } from "../data/data"
interface Props {
    pokemon: Pokemon
    capturedPokemon: dataPokemon[]
}

const MyPokemon = ({pokemon, capturedPokemon}: Props) => {
    return (
        <main className="grid"  >

        {capturedPokemon.map((myCaptured: dataPokemon, id)=> {
          return  <article className="card">
          <img src={myCaptured.src} alt="Arcanine"/>
              <div className="text">
                <h3>You Got!</h3>
                <p>{myCaptured.name}</p>
                <button>More Info</button>
              </div>
            </article>
        })}
      <article className="card">
    <img src="https://img.pokemondb.net/sprites/gold/normal/arcanine.png" alt="Arcanine"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Typhlosion</p>
          <button>More Info</button>
        </div>
      </article>
  
    </main>
    )
}

export default MyPokemon