import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="cart-widget" aria-label="Carrito">
      <span style={{ marginRight: 6 }}>🛒</span>
      <span>{totalItems}</span>
    </div>
  );
}
