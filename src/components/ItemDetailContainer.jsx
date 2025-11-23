import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/itemlistcontainer.css";

import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", id);

    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoría: {item.category}</p>
    </div>
  );
}

export default ItemDetailContainer;
