import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Pokemon = () => {

  const [pokeInfo, setPokeInfo] = useState("")
  const {name} = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/${name}')
        const data = await res.json()

        setPokeInfo(data)
      } catch (error) {
        console.error(error);
      } 
    }
    getData()
  },[])

  return (
    <>
      <div className="mainPokeInfo">
        <div className="myCard">
          {/* <img src={pokeInfo.sprites.other.dream_world.front_default} alt={pokeInfo.name} /> */}
          <div className="stats">
          <h1>{pokeInfo.name}</h1>
            {/* <ul>
              <li>
                hp: {pokeInfo.stats[0].base_stat}
              </li>
              <li>
                attack: {pokeInfo.stats[1].base_stat}
              </li>
              <li>
                defense: {pokeInfo.stats[2].base_stat} 
              </li>
              <li>
                special-attack: {pokeInfo.stats[3].base_stat}
              </li>
              <li>
                special-defense: {pokeInfo.stats[4].base_stat}
              </li>
              <li>
                speed: {pokeInfo.stats[5].base_stat}
              </li>
              <h3>
              {pokeInfo.types[0].type.name}
              </h3>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}
