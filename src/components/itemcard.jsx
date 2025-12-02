import React from "react";
import { Link } from "react-router-dom";
import "../styles/itemcard.css";

const getField = (obj, ...keys) => {
  for (const k of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  }
  return undefined;
};

export default function ItemCard({ item }) {
  const title = getField(item, "title", "Title", "nombre", "name");
  const price = getField(item, "price", "Price", "precio");
  const stock = getField(item, "stock", "Stock", "cantidad");

  return (
    <div className="item-card">
      <h3>{title ?? "Producto sin nombre"}</h3>
      <p>Precio: ${price ?? "N/A"}</p>
      <p>Stock: {stock ?? "N/A"}</p>

      <Link to={`/detalle/${item.id}`}>
        <button className="btn-primary">Ver detalle</button>
      </Link>
    </div>
  );
}
