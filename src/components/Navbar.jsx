import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import CartWidget from "./CartWidget";

function Navbar() {
return ( <nav className="navbar">


  <div className="nav-left">
    <h1 className="logo">Adidas?</h1>
  </div>

  <ul className="nav-links">

    <li>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Inicio
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/contacto" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contacto
      </NavLink>
    </li>

    <li>
      <NavLink 
        to="/cart" 
        className={({ isActive }) => 
          isActive 
          ? "active cart-link" 
          : "cart-link"
        }
      >
        <CartWidget />
      </NavLink>
    </li>

  </ul>

</nav>
);
}

export default Navbar;
