import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } =
    useContext(CartContext);

  if (!cart || cart.length === 0)
    return <h2 style={{ padding: "20px" }}>El carrito está vacío</h2>;

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
          </div>

          <div className="qty-controls">
            
            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
            -
            </button>

            <span>{item.quantity || 1}</span>
            
            <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
              +
            
            </button>
          </div>

          <div style={{ marginLeft: 12 }}>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${subtotal}</h3>
      <button className="clear-btn" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
}
