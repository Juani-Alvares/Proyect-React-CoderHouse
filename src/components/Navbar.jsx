import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Mi Tienda</h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/remeras" className={({ isActive }) => isActive ? "active" : ""}>
            Remeras
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/pantalones" className={({ isActive }) => isActive ? "active" : ""}>
            Pantalones
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/zapatillas" className={({ isActive }) => isActive ? "active" : ""}>
            Zapatillas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
