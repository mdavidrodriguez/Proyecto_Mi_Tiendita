import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import Producto from "../pages/Producto";
import Carrito from "../pages/Carrito";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { UserAuth } from "../context/AuthContext";
import Perfil from "../Pages/Perfil";
import Protector from "../components/Protector";
import { ContainerMovimientos } from "../components/Movimientos/ContainerMovimientos";

export function MyRoutes() {

  
  const { user } = UserAuth();

  const RequireAuth = ({ children }) => {
    return user ? (
      <>
        {children}
      </>
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Protector><Perfil /></Protector>} />
        <Route path="/movimientos" element={<Protector><ContainerMovimientos /></Protector>} />
        <Route path="/productos" element={<Protector><Producto /></Protector> } />
        <Route path="/inventario" element={<Protector><Carrito /></Protector> } />
        {/* <Route path="/carrito" element={<Carrito />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}
