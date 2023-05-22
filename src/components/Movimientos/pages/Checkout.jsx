import React from 'react';

const Checkout = ({carrito, vaciarCarrito}) => {

  const sumaTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);

  const handlePagar = () => {
    // Código para enviar la información de la compra
    vaciarCarrito();
  }

  return (
    <div className="container">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.name}</td>
                <td>{producto.cantidad}</td>
                {/* <td>{producto.precio}</td>
                <td>{producto.cantidad * producto.precio}</td> */}
              </tr>
            ))}
            <tr>
              <td colSpan="3"></td>
              {/* <td>{sumaTotal}</td> */}
            </tr>
          </tbody>
        </table>
        <div>
          <button className="btn btn-primary" onClick={handlePagar}
          style={{
            position:"absolute",
            width: "40%",
            textAlign:"center",
            left:"30%"
          }}
          >Pagar</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
