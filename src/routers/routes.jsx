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

import {LoginFire} from '../components/Login/LoginAuth/LoginFire'
import { Signup } from "../components/Login/Signup/Signup";
import NuevaVenta from '../components/Movimientos/pages/NuevaVenta'
// import { Auth } from "firebase/auth";


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
        <Route path="/nuevaventa" element={<Protector><NuevaVenta /></Protector> } />
        {/* <Route path="/carrito" element={<Carrito />} /> */}
        
        <Route exact path="/signup" element={<Signup/> }/>
      </Routes>
    </BrowserRouter>
  );
}
