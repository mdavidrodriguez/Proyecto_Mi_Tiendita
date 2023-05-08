import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";
import '../../index.css'
import iconcar from '../../img/shopping.png'


const styles = {
  carro: {
    backgroundColor: "#2eb122",
    color: "#fff",
    border: "None",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  buble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};
function Carro({ carro, esCarroVisible, mostrarCarro }) {
  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <div>
      <span style={styles.buble}>
        {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
      </span>
      <button onClick={mostrarCarro} style={styles.carro} className="btnCarro">
        <img src={iconcar} alt="Icon shop" className="iconcar"/>
      </button>
      {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
    </div>
  );
}

export default Carro;