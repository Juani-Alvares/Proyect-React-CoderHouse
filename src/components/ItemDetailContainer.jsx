import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "../styles/itemdetail.css";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const ref = doc(db, "products", id);
    getDoc(ref)
      .then((snapshot) => {
        if (snapshot.exists()) setItem({ id: snapshot.id, ...snapshot.data() });
        else setItem(null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loader">Cargando...</div>;
  if (!item) return <div>Producto no encontrado</div>;

  const price = item.price ?? item.Price ?? item.precio ?? 0;
  const stock = item.stock ?? item.Stock ?? item.cantidad ?? 0;
  const title = item.title ?? item.Title ?? item.nombre ?? item.name ?? "Producto";

  const handleAdd = (qty) => {
    addToCart({ id: item.id, title, price }, qty);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{title}</h2>
      <p>Precio: ${price}</p>
      <p>Stock: {stock}</p>

      {!added ? (
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      ) : (
        <div>
          <p>Agregado al carrito</p>
          <button onClick={() => navigate("/cart")}>Ir al carrito</button>
        </div>
      )}
    </div>
  );
}
