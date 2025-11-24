// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import "../styles/itemlistcontainer.css";

// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const productsRef = collection(db, "products");

    let q = productsRef;

    if (categoryId) {
      q = query(productsRef, where("category", "==", categoryId));
    }

    getDocs(q).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(docs);
    });
  }, [categoryId]);

  return (
    <div>
      
      <div className="filters">
        <button onClick={() => navigate("/")}>Todos</button>
        <button onClick={() => navigate("/category/remeras")}>Remeras</button>
        <button onClick={() => navigate("/category/pantalones")}>
          Pantalones
        </button>
        <button onClick={() => navigate("/category/zapatillas")}>
          Zapatillas
        </button>
      </div>

      <div className="items-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
