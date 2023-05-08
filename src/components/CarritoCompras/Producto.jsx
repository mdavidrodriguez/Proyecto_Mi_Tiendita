import Button from "./Button";
import "../../index.css";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
const styles = {
  img: {
    width: "100%",
  },
};

const Producto = ({ producto, agregarAlCarro, removerDelCarro }) => {
  return (
    <div className="Card-producto">
      <img style={styles.img} alt={producto.name} src={producto.img} />
      <h3>{producto.name}</h3>
      <p>{producto.price}</p>
      <p>Cantidad: {producto.cantidad}</p>
      <div className="btn-cards">
        <Button onClick={() => agregarAlCarro(producto)}>
          <AiFillPlusCircle />
        </Button>
        <div className="Content-boton">
          <button className="btn-eliminar" onClick={() => removerDelCarro(producto)}>
            <AiFillMinusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Producto;
