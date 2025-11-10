import React from "react";
import "../styles/itemcard.css";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <button>Ver detalle</button>
    </div>
  );
}

export default ItemCard;
