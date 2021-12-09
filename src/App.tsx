
import './App.css';
import "nes.css/css/nes.min.css";
import { FC,useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  
  Routes,
  Route
} from "react-router-dom";
import Cards from './components/cards';
import Icons from './components/icons';
import Header from './components/header';
import MyPokemon from './components/MyPokemon';
import Mypacks from './components/packs';
import { dataPokemon } from './data/data';
Amplify.configure(awsconfig);

export interface Pokemon  {
  id: number
  name: string
  generation: number
  game: string
  src : string
}


const typhlosion: Pokemon = {
id: 1,
name: 'typhlosion',
generation: 2,
game: "gold",
src: "https://img.pokemondb.net/sprites/silver/shiny/typhlosion.png"
}
const App: FC =() => {
  const [pokemon, setMyPokemon] =  useState(typhlosion)
  const [capturedPokemon, setCaptured] =  useState<dataPokemon[]>([])
  console.log(capturedPokemon );

  return (
  // <BrowserRouter>
    <div className="parent">
  <div id="pageHeader">
 <Header/>
 <Icons/>
  </div>
 
  <article id="mainArticle" >
    <div id='container' className="nes-container is-centered is-dark with-title">
  <p className="title">Pokemon Sprites!</p>
  <Routes>
  <Route path="/" element={<Cards />} />
 <Route path="myPokemon"  element={<MyPokemon pokemon={pokemon} capturedPokemon={capturedPokemon} />} />
 <Route path="packs"  element={<Mypacks  capturedPokemon={capturedPokemon} setCaptured={setCaptured}/>} />
 </Routes>
</div>
</article>






  <nav id="mainNav">
  
  <div className="left-icon"><i className="nes-ash"></i></div>
  
  </nav>

  <div id="siteAds"><i className="nes-pokeball"></i></div>
  <footer id="pageFooter">Footer</footer>    </div>
  // </BrowserRouter>
  );
}

export default App;
