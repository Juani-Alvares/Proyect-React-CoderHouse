import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import "../styles/itemlistcontainer.css";
import { products } from "../data/products";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    getProducts.then((res) => {
      if (categoriaId) {
        setItems(res.filter((item) => item.category === categoriaId));
      } else {
        setItems(res);
      }
    });
  }, [categoriaId]);

  return (
    <div className="item-list-container">
      <h2>{greeting || "Productos"}</h2>
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
