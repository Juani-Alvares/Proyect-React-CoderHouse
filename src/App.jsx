import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Catálogo de Productos" />}
            />

            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

            <Route path="/detalle/:id" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/contacto" element={<Contacto />} />

            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
