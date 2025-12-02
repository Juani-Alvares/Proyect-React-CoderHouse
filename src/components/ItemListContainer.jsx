import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "./itemcard";
import "../styles/itemlistcontainer.css";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export default function ItemListContainer({ greeting }) {
  const { categoriaId } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    let q = productsRef;

    if (categoriaId) {
      q = query(productsRef, where("category", "==", categoriaId));
    }

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(docs);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div>
      {greeting && <h2 style={{ textAlign: "center" }}>{greeting}</h2>}

      <div className="filters">
        <button onClick={() => navigate("/")}>Todos</button>
        <button onClick={() => navigate("/categoria/remeras")}>Remeras</button>
        <button onClick={() => navigate("/categoria/pantalones")}>Pantalones</button>
        <button onClick={() => navigate("/categoria/zapatillas")}>Zapatillas</button>
      </div>

      <div className="items-container">
        {loading ? (
          <p>Cargando productos...</p>
        ) : items.length === 0 ? (
          <p>No hay productos para esta categoría.</p>
        ) : (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}
