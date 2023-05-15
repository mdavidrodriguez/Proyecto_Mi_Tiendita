import { BsPlusCircleFill, BsPatchMinusFill } from "react-icons/bs";
import ModalGastos from "./pages/ModalGastos";
import { useState } from "react";
const Header = () => {
  const [showModal, setshowModal] = useState(false)

  const handleModalGasto = () => {
    setshowModal(!showModal)
    
  }
  return (
    
      <div className="d-flex justify-content-between align-items-center m-3 border-bottom ">
        <h3 className="ml-3">Movimientos</h3>
        <div className="d-flex justify-content-end mr-3">
          <button className="btn btn-success mr-2" style={{marginRight:"5px"}}>
            <BsPlusCircleFill className="inline-block" /> Nueva Venta
          </button>
          <ModalGastos />
        </div>
        {/* {showModal && <ModalGastos />} */}
      </div>
  );
};

export default Header;
