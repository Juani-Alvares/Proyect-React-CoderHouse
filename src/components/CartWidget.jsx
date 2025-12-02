import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="cart-widget">
      <span style={{ marginRight: 6 }}>🛒</span>
      <span>{totalItems}</span>
    </div>
  );
}
