import pikasad from '../assets/pikachu.jpg'

export const NotFound = () => {
  return (
    <div>
      <h1>No encontramos ese pokemón</h1>
      <img src={pikasad} alt="fondopikachu" />
    </div>
  )
}