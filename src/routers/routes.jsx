import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import Producto from "../pages/Producto";
import Inventario from "../pages/Inventario";
import Carrito from "../pages/Carrito";
import { Home } from "../pages/Home";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<Producto />} />
        <Route exact path="/inventario" element={<Carrito />} />
        <Route exact path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
}
