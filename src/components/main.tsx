import { Route, Routes } from "react-router"
import Cards from "./cards"
import MyPokemon from "./MyPokemon"
import Mypacks from "./packs"
import {  Dispatch, SetStateAction } from "react";
import { dataPokemon } from "../data/data";
import { Pokemon, User } from "../App";
interface Props {
    pokemon: Pokemon
    capturedPokemon: dataPokemon[]
    setCaptured: Dispatch<SetStateAction<dataPokemon[]>> 
    user: User
}
const Main = ({pokemon, capturedPokemon, setCaptured, user}:Props) => {
    return(
        <article id="mainArticle" >
        <div id='container' className="nes-container is-centered is-dark with-title">
      <p className="title">Pokemon Sprites!</p>
      <Routes>
      <Route path="/"  element={<Cards  user={user} />} />
     <Route path="myPokemon"  element={<MyPokemon pokemon={pokemon} setCaptured={setCaptured} capturedPokemon={capturedPokemon} />} />
     <Route path="packs"  element={<Mypacks  capturedPokemon={capturedPokemon} setCaptured={setCaptured}/>} />
     </Routes>
    </div>
    </article>
    )
}
export default Main