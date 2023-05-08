import '../../index.css'
import Producto from "./Producto";

const Productos = ({ productos, agregarAlCarro,removerDelCarro }) => {
    return (
      <div className='productos-container'>
        <div  className="Card-Content">
          {productos.map((producto) => (
            <Producto
              agregarAlCarro={() => agregarAlCarro(producto)}
              key={producto.name}
              producto={producto}
              removerDelCarro={removerDelCarro}
        
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Productos;
  
  