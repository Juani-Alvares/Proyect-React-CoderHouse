import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import "../styles/itemlistcontainer.css";
import { products } from "../data/products";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    });

    getProducts.then((res) => setItems(res));
  }, []);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="item-grid">
        {items.length > 0 ? (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="loading">Cargando productos...</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
