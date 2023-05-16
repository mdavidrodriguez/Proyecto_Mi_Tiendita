import { BsPlusCircleFill, BsBasketFill,BsCashCoin } from "react-icons/bs";
import ModalGastos from "./pages/ModalGastos";
import { useState } from "react";
import './containerFiltros.css'
const Header = () => {
  // const [showModal, setshowModal] = useState(false)

  // const handleModalGasto = () => {
  //   setshowModal(!showModal)
    
  // }
  return (
    
      <div className="d-flex justify-content-between align-items-center m-3 border-bottom ">
        <h3 className="ml-3">Movimientos</h3>
        <div className="d-flex justify-content-end">
          <div class="dropdown d-flex justify-content-end">
            <button class="btn btn-success mr-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <BsPlusCircleFill className="inline-block" /> Nueva Venta
            </button>
            <ul class="dropdown-menu">
              <div className="caja-libre">
                <li>
                  <button class="dropdown-item" href="#"><BsBasketFill/> Venta de Productos <br />
                    <label className="tex-caja" htmlFor="">Registra un venta seleccionando los productos <br /> de tu Inventario</label>
                  </button>
                </li>
              </div>
              <div className="caja-libre">
                <li>
                  <button class="dropdown-item" href="#"> <BsCashCoin /> Venta Libre <br />
                  <label className="tex-caja" htmlFor="">Registra un ingreso sin seleccionar productos  <br /> de tu inventario</label>
                </button>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <ModalGastos />
          </div>
        </div>
        {/* {showModal && <ModalGastos />} */}
      </div>
  );
};

export default Header;
