import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pokemones = () => {

  const [nombres, setNombres] = useState([])
  const [selected, setSelected] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const getPokemones = async () => {
      try{
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        const data = await res.json()
        setNombres(data.results)
        setSelected(data.results[0].name)
      } catch (error) {
        console.error(error);
      } 
    }

    getPokemones()
  },[])


  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokemon/${selected}`)
  }

  return (
    <div className="select-container">
      <p>Selecciona un pokemón</p>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
            {
              nombres.map((opts,id)=> 
                <option style={{backgroundColor: '#58585a',color: 'white'}} key={id} value={opts.name}>{opts.name}</option>
              )
            }
        </select>
        <button type="submit">Ver Detalle</button>
      </form>
    </div>
  )
}

