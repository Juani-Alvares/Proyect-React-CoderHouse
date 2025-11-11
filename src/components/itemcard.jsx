import React from "react";
import { Link } from "react-router-dom";
import "../styles/itemcard.css";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <Link to={`/detalle/${item.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default ItemCard;
