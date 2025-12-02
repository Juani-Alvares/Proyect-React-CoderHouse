import React, { useState } from "react";
import "../styles/itemcount.css";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [qty, setQty] = useState(Math.min(initial, stock));

  const inc = () => setQty(q => Math.min(q + 1, stock));
  const dec = () => setQty(q => Math.max(1, q - 1));

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={dec} disabled={qty <= 1}>-</button>
        <span>{qty}</span>
        <button onClick={inc} disabled={qty >= stock}>+</button>
      </div>

      <button className="btn-primary" onClick={() => onAdd(qty)} disabled={stock <= 0}>
        Agregar al carrito
      </button>

      {stock <= 0 && <p className="no-stock">Producto sin stock</p>}
    </div>
  );
}
