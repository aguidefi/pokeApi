import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pokemones = () => {

  const [nombres, setNombres] = useState([])
  const [selected, setSelected] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const getPokemones = async () => {
      const res = await fetch ('https://pokeapi.co/api/v2/pokemon')
      const data = await res.json()
      const { results } = data

      setNombres(results)
      setSelected(results[0].name)
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
        <select id='selected' onChange={handleChange}>
          {
            nombres.map((opts,id)=> <option key={id} value={opts.name}>{opts.name}</option> )
          }
        </select>
        <button type="submit">Ver Detalle</button>
      </form>
    </div>
  )
}

