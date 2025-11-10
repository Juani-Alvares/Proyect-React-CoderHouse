import "./../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo"> Mi Tienda</h1>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Remeras</li>
            <li>Pantalones</li>
            <li>Zapatillas</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
