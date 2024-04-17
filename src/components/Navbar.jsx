import { NavLink } from "react-router-dom"
import ubi from "../assets/ubi.png"

export const Navbar = () => {

  const setActiveClass = ({isActive}) => (isActive ? "active" : "disabled")

  return (
    <div className="header">
      <div className="brand">
      <NavLink to="pokemones">
        <img src={ubi} alt="Brand" />
      </NavLink>
      </div>
      <nav className="nav-links">
        <ul>
          <li><NavLink className={setActiveClass} to="/">
                Home
              </NavLink>
          </li>
          <li><NavLink className={setActiveClass} to="pokemones">
                Pokemones
              </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
