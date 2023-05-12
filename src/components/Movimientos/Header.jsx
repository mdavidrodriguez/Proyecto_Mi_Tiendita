import { BsPlusCircleFill, BsPatchMinusFill } from "react-icons/bs";
import './ContainerMovimientos.css'
const Header = () => {
  return (
      <div className="d-flex justify-content-between align-items-center m-3 border-bottom ">
        <h3 className="ml-3">Movimientos</h3>
        <div className="d-flex justify-content-end mr-3">
          <button className="btn btn-success mr-2" style={{marginRight:"5px"}}>
            <BsPlusCircleFill className="inline-block" /> Nueva Venta
          </button>
          <button className="btn btn-danger">
            <BsPatchMinusFill className="inline-block" fontSize={"20px"} /> Nueva Gasto
          </button>
        </div>
      </div>
  );
};

export default Header;
