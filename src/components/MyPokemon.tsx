

import { Dispatch, SetStateAction } from "react"
import { Pokemon } from "../App"
import { dataPokemon } from "../data/data"
interface Props {
    pokemon: Pokemon
    capturedPokemon: dataPokemon[]
    setCaptured: Dispatch<SetStateAction<dataPokemon[]>> 
}

const MyPokemon = ({pokemon, capturedPokemon,setCaptured}: Props) => {
  const handleReleasePokemon = (selectedName: string) => {
  const resulst = capturedPokemon.filter(captured => captured.name!== selectedName  )
  setCaptured([...resulst])
  }
    return (
        <main className="grid"  >

        {capturedPokemon.map((myCaptured: dataPokemon, id)=> {
          return  <article className="card" key={id}>
          <img src={myCaptured.src} alt="Arcanine"/>
              <div className="text">
                <h3>You Got!</h3>
                <p>{myCaptured.name}</p>
                <button onClick={()=>handleReleasePokemon(myCaptured.name)} >Delete</button>
              </div>
            </article>
        })}
  
    </main>
    )
}

export default MyPokemon