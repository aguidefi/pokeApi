import pika from '../assets/pikaa.png'

export const Home = () => {
  return (
    <div className='poke-home'>
      <p>Bienvenido maestro pokemón</p>
      <img src={pika} alt="Pikachu" />
    </div>
  )
}
