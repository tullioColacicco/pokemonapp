
import './App.css';
import "nes.css/css/nes.min.css";
import { FC,useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import Icons from './components/icons';
import Header from './components/header';

import { dataPokemon } from './data/data';
import Main from './components/main';
Amplify.configure(awsconfig);

export interface Pokemon  {
  id: number
  name: string
  generation: number
  game: string
  src : string
}

export interface User {
  sub: string;
  identities: string;
  email_verified: boolean;
  email: string;
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
  const [user, setUser] =  useState<User| null>(null)
  const [capturedPokemon, setCaptured] =  useState<dataPokemon[]>([])
  console.log(user );

  return (
  // <BrowserRouter>
    <div className="parent">
  <div id="pageHeader">
 <Header setUser={setUser}/>
 <Icons/>
  </div>
 {user ?  <Main capturedPokemon={capturedPokemon} user={user} setCaptured={setCaptured} pokemon={pokemon} /> : <div>hello</div> }


  <nav id="mainNav">
  
  <div className="left-icon"><i className="nes-ash"></i></div>
  
  </nav>

  <div id="siteAds"><i className="nes-pokeball"></i></div>
  <footer id="pageFooter"></footer>    </div>
  // </BrowserRouter>
  );
}

export default App;
