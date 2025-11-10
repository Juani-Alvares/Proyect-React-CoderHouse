import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ItemListContainer greeting="Catálogo de Productos" />
      </main>
      <Footer />
    </>
  );
}

export default App;
