import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Estadisticas from '../pages/Estadisticas'
import Producto from '../pages/Producto'
import Inventario from '../pages/Inventario'
import Carrito from '../pages/Carrito'
const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Producto />} />
            <Route path='/estadisticas' element={<Estadisticas />} />
            <Route path='/inventario' element={<Inventario />} />
            <Route path='/carrito' element={<Carrito />} />
        </Routes>
    )
}

export default MyRoutes