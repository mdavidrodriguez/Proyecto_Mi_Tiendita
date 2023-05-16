import React, { useState, useEffect } from 'react';
import './cardCanasta.css';

const NuevaVenta = () => {
  const [productos, setProductos] = useState([]); // Lista de productos
  const [carrito, setCarrito] = useState([]); // Lista de productos en el carrito
  const [busqueda, setBusqueda] = useState(''); // Valor de búsqueda

  useEffect(() => {
    const obtenerProductos = async () => {
      const res = await fetch('https://643991b44660f26eb1b6861a.mockapi.io/usuarios');
      const data = await res.json();
      setProductos(data.map(producto => ({ ...producto, cantidad: 0 })));
    }

    obtenerProductos();
  }, []);

  const agregarProductoAlCarrito = (producto) => {
    setProductos(productos.map(p => {
      if (p.id === producto.id) {
        return { ...p, cantidad: p.cantidad + 1 };
      }
      return p;
    }));
    const productoIndex = carrito.findIndex(p => p.id === producto.id);
    if (productoIndex >= 0) {
      const newCarrito = [...carrito];
      newCarrito[productoIndex] = { ...producto, cantidad: producto.cantidad + 1 };
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  const aumentarCantidad = (producto) => {
    const newCarrito = [...carrito];
    newCarrito[carrito.findIndex(p => p.id === producto.id)] = { ...producto, cantidad: producto.cantidad + 1 };
    setCarrito(newCarrito);
  }
  const reducirCantidad = (producto) => {
    const newCarrito = [...carrito];
    newCarrito[carrito.findIndex(p => p.id === producto.id)] = { ...producto, cantidad: producto.cantidad - 1 };
    setCarrito(newCarrito.filter(p => p.cantidad > 0));
  }
  

  return (
    <div className="container">
      <div className="row">
        {/* Barra de búsqueda */}
        <div className="col-md-4">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Buscar por producto o categoría" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">Buscar</button>
            </span>
          </div>
        </div>
        {/* <div className="col-md-4 text-right">
          <button className="btn btn-primary">Ver carrito ({carrito.length})</button>
        </div> */}
      </div>
      <div className="row">
        {/* Lista de productos */}
        <div className="col-md-8 contenedor-productos">
          {
            // productosFiltrados.length === 0 ?
            //     <div>No se encontraron productos</div>
            //     :
            productos.map(producto => (
              <div key={producto.id} className="card mb-3 card-producto">
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text">{producto.createdAt}</p>
                  {/* <p className="card-text"><small className="text-muted">{producto.categoria}</small></p> */}
                  <div>
                    <button className="btn btn-success m-2" onClick={() => reducirCantidad(producto)}>-</button>
                    <button className="btn btn-success mr-2" onClick={() => aumentarCantidad(producto)}>+</button>
                  </div>
                  <button className="btn btn-primary ml-2" onClick={() => agregarProductoAlCarrito(producto)}>Agregar al carrito</button>
                </div>
              </div>
            ))
          }
        </div>
        {/* Carrito */}

        <div className="col-md-4 card card-canasta">
        {carrito.length === 0 ?
            <div>No hay productos en el carrito</div>
            :
            <div>
            <h5>Productos en canasta</h5>
            {carrito.map(producto => (
                <div key={producto.id}>
                <p>{producto.name}</p>
                <p>{producto.cantidad}</p>
                <img src={producto.avatar} alt="" />
                </div>
            ))}
            </div>
        }
        </div>
      </div>
    </div>
  );
}

export default NuevaVenta