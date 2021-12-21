import { FC } from "react";
import { User } from "../App";
interface Props {
  
  user: User
}

const Cards = ({user}: Props) => {
    return (
<>
      <div> <h3>User:</h3>
      <p>{user.email}</p></div>
     
        <main className="grid">
       

        <article className="card">
          <img src="https://img.pokemondb.net/sprites/silver/shiny/typhlosion.png"alt="Typhlosion"/>
          <div className="text">
            <h3>You Got!</h3>
            <p>Typhlosion</p>
            <button>More Info</button>
          </div>
        </article>
      
        <article className="card">
        <img src="https://img.pokemondb.net/sprites/silver/normal/snorlax.png" alt="Snorlax"/>
          <div className="text">
            <h3>You Got!</h3>
            <p>Typhlosion</p>
            <button>More Info</button>
          </div>
        </article>  
        
        <article className="card">
        <img src="https://img.pokemondb.net/sprites/black-white/anim/shiny/snorlax.gif" alt="Snorlax"/>
          <div className="text">
            <h3>You Got!</h3>
            <p>Typhlosion</p>
            <button>More Info</button>
          </div>
        </article>  
      
          <article className="card">
          <img src="https://img.pokemondb.net/sprites/sword-shield/normal/mimikyu.png" alt="Mimikyu"/>
            <div className="text">
              <h3>You Got!</h3>
              <p>Typhlosion</p>
              <button>More Info</button>
            </div>
          </article>  
      
          <article className="card">
        <img src="https://img.pokemondb.net/sprites/sun-moon/shiny/mimikyu.png" alt="Mimikyu"/>
            <div className="text">
              <h3>You Got!</h3>
              <p>Typhlosion</p>
              <button>More Info</button>
            </div>
          </article>  
      
          <article className="card">
        <img src="https://img.pokemondb.net/sprites/silver/normal/gengar.png" alt="Gengar"/>
            <div className="text">
              <h3>You Got!</h3>
              <p>Typhlosion</p>
              <button>More Info</button>
            </div>
          </article>  
      
          <article className="card">
          <img src="https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif" alt="Venusaur"/>
            <div className="text">
              <h3>You Got!</h3>
              <p>Typhlosion</p>
              <button>More Info</button>
            </div>
          </article>  
      
       

          
       
      </main>
      <div className="welcome">
      <h1>Welcome!</h1></div>
      </>
    )
    
}

export default Cards