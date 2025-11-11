import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Mi Tienda</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/categoria/remeras">Remeras</Link></li>
            <li><Link to="/categoria/pantalones">Pantalones</Link></li>
            <li><Link to="/categoria/zapatillas">Zapatillas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
