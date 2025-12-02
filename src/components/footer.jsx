import React from "react";
import "../styles/footer.css";

export default function Footer(){
  return (
    <footer style={{ padding:20, textAlign:"center", color:"var(--muted)" }}>
      © {new Date().getFullYear()} Mi Tienda - Proyecto Final
    </footer>
  );
}
