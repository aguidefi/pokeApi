import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Pokemon = () => {

  const [pokeInfo, setPokeInfo] = useState("")
  const [loading, setLoading] = useState(false);
  const {name} = useParams();
  console.log(name)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()

        setPokeInfo(data)
        setLoading(true)
      } catch (error) {
        console.error(error);
      } 
    }
    getData()
  },[])


  return (
    <>
      {loading ? (
        <Card border='danger' className="text-danger">
          <Card.Img src={pokeInfo.sprites.other.dream_world.front_default} alt={pokeInfo.name} />
          <Card.Text><strong>{pokeInfo.types[0].type.name}</strong></Card.Text>
          <div>
            <Card.Body className="text-danger">
              <Card.Title style={{textTransform: 'uppercase'}}>{pokeInfo.name}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>hp: {pokeInfo.stats[0].base_stat}</ListGroup.Item>
              <ListGroup.Item>attack: {pokeInfo.stats[1].base_stat}</ListGroup.Item>
              <ListGroup.Item>defense: {pokeInfo.stats[2].base_stat}</ListGroup.Item>
              <ListGroup.Item>special-attack: {pokeInfo.stats[3].base_stat}</ListGroup.Item>
              <ListGroup.Item>special-defense: {pokeInfo.stats[4].base_stat}</ListGroup.Item>
              <ListGroup.Item>speed: {pokeInfo.stats[5].base_stat}</ListGroup.Item>
            </ListGroup>
          </div>
        </Card>
      ) : (
        <h1 style={{ marginTop: '150px '}}>Cargando tu Pokemón...</h1>
      )}
    </>
  )
}
