import { useState, Dispatch, SetStateAction } from "react";
import { dataList, dataPokemon, } from "../data/data";

interface Props {
    capturedPokemon: dataPokemon[]
    setCaptured: Dispatch<SetStateAction<dataPokemon[]>> 
}
const Mypacks = ({setCaptured, capturedPokemon}: Props) => {
    const [openedPacks, setPacks] = useState<number[]>([])
console.log(capturedPokemon );

    const addToCollection = (pokemon: dataPokemon) =>{

           setCaptured([...capturedPokemon, pokemon])
      
    }

    const openPacks = (max: number)  =>  {
 
        let array = [];
      
        for (let index = 0; index < max; index++) {
          array.push(Math.floor(Math.random() * max) + 1);
        //   console.log(array)
        }
        setPacks(array)
        console.log(dataList[array[0]]);
        return array
       
      }
      console.log(openedPacks);
    return (
        <main className="grid-packs">

      

      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/9/95/Base_Set_Booster_Blastoise_Shadowless.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>

      
      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/1/16/Pok%C3%A9mon_Jungle_pack.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button"  >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/2/25/Mystery_of_the_Fossils_pack.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>
  
  
      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/thumb/2/23/Team_Rocket_Booster_Team_Rocket.jpg/336px-Team_Rocket_Booster_Team_Rocket.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/a/a3/Gym_Heroes_Booster_Erika.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/1/1a/Challenge_from_the_Darkness_pack.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src="https://archives.bulbagarden.net/media/upload/6/63/Neo_Genesis_Booster_Typhlosion.jpg" alt="Dragonite"/>
        <div className="text">
          <h3>You Got!</h3>
          <p>Base Set</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>

{openedPacks.map((pack , id) =>  {
    return    <article className="card" style={{backgroundColor: 'white'}}>
   <img style={{height: '10vh'}} src={dataList[pack].src} alt={dataList[pack].name}/>
        <div className="text">
          <h3 style={{color: 'black'}} >You Got!</h3>
          <p style={{color: 'black'}}>Base Set</p>
          <button onClick={()=> addToCollection(dataList[pack]) }>Add to collection!</button>
        </div>
      </article>
})}
  
    </main>
    )
}

export default Mypacks