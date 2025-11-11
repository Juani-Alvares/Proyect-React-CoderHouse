import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find((p) => p.id === parseInt(id));
        resolve(found);
      }, 1000);
    });

    getProduct.then((res) => setProduct(res));
  }, [id]);

  if (!product) return <p>Cargando detalle...</p>;

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Categoría: {product.category}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
