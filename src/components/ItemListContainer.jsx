import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./itemcard";
import "../styles/itemlistcontainer.css";

// Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "products");

    let q = productsRef;

    if (categoryId) {
      q = query(productsRef, where("category", "==", categoryId));
    }

    
    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(docs);
      })
      .catch((e) => console.log("Error Firestore:", e));
  }, [categoryId]);

  return (
    <div className="items-container">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
