
import { useState, Dispatch, SetStateAction } from "react";
import { dataList, dataPokemon, dataPack2, dataPack3, dataPack4, dataPack5, dataPack6, dataPack7} from "../data/data";
import pack1 from  '../images/Base_Set_Booster_Blastoise_Shadowless.jpg'
import pack2 from  '../images/Pokémon_Jungle_pack.jpg'
import pack3 from  '../images/Mystery_of_the_Fossils_pack.jpg'
import pack4 from  '../images/336px-Team_Rocket_Booster_Team_Rocket.jpg'
import pack5 from  '../images/Gym_Heroes_Booster_Erika.jpg'
import pack6 from  '../images/Challenge_from_the_Darkness_pack.jpg'
import pack7 from  '../images/Neo_Genesis_Booster_Typhlosion.jpg'
interface Props {
    capturedPokemon: dataPokemon[]
    setCaptured: Dispatch<SetStateAction<dataPokemon[]>> 
}

const Mypacks = ({setCaptured, capturedPokemon}: Props) => {
    const [openedPacks, setPacks] = useState<number[]>([])
    const [packs, setSelected] = useState([dataList,dataPack2,dataPack3,dataPack4,dataPack5,dataPack6,dataPack7])
    const [selected, setList] = useState<number>(0)

    const addToCollection = (pokemon: dataPokemon) =>{

           setCaptured([...capturedPokemon, pokemon])
      
    }

    const openPacks = (max: number)  =>  {
      setList(0)
        let array = [];
      
        for (let index = 0; index < max; index++) {
          array.push(Math.floor(Math.random() * max) + 1);
        
        }
        setPacks(array)
        return array
       
      }
      const openPacks2 = (max: number, index: number)  =>  {
 setList(index)
        let array = [];
      
        for (let index = 0; index < 7; index++) {
          array.push(Math.floor(Math.random() * max) + 1);
        
        }
        setPacks(array)
        return array
       
      }

    return (
        <main className="grid-packs">

      

      <article className="card">
   <img src={pack1} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 1</p>
          <button onClick={()=> openPacks(7)} type="button" >Open pack!</button>
        </div>
      </article>

      
      <article className="card">
   <img src={pack2} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 2</p>
          <button onClick={()=> openPacks2(dataPack2.length-1,1)} type="button"  >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src={pack3} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 3</p>
          <button onClick={()=> openPacks2(dataPack3.length-1,2)} type="button" >Open pack!</button>
        </div>
      </article>
  
  
      <article className="card">
   <img src={pack4} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 4</p>
          <button onClick={()=> openPacks2(dataPack4.length-1, 3)} type="button" >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src={pack5} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 5</p>
          <button onClick={()=> openPacks2(dataPack5.length-1, 4)} type="button" >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src={pack6} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 6</p>
          <button onClick={()=> openPacks2(dataPack6.length-1,5)} type="button" >Open pack!</button>
        </div>
      </article>

      <article className="card">
   <img src={pack7} alt="Dragonite"/>
        <div className="text">
          <h3>Select!</h3>
          <p>Pack 7</p>
          <button onClick={()=> openPacks2(dataPack7.length-1, 6)} type="button" >Open pack!</button>
        </div>
      </article>

{openedPacks.map((pack , id) =>  {
    return    <article className="card" key={id} style={{backgroundColor: 'white'}}>
   <img style={{height: '10vh'}} src={packs[selected][pack].src} alt={packs[selected][pack].name}/>
        <div className="text">
          <h3 style={{color: 'black'}} >You Got!</h3>
          <p style={{color: 'black'}}>{packs[selected][pack].name}</p>
          <button onClick={()=> addToCollection(packs[selected][pack]) }>Add to collection!</button>
        </div>
      </article>
})}
  
    </main>
    )
}

export default Mypacks