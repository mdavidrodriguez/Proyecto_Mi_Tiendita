import { BsPatchMinusFill } from "react-icons/bs";
import './Estados.css'

import { useState } from "react";
function ModalGastos() {
  const [estado, setEstado] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [metodoPago, setMetodoPago] = useState("");

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleValorChange = (event) => {
    setValor(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleMetodoPagoChange = (event) => {
    setMetodoPago(event.target.value);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
       <BsPatchMinusFill className="inline-block" fontSize={"20px"} /> Nueva Gasto
      </button>

      <div
        className="modal fade left"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Nuevo Gasto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="estado" className="form-label">
                    Seleccione el estado del pago
                  </label>
                  <select
                    className="form-control cursor-option"
                    id="estado"
                    value={estado}
                    onChange={handleEstadoChange}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="pagado">Pagado</option>
                    <option value="deuda">Deuda</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="categoria" className="form-label">
                    Seleccione la categoría
                  </label>
                  <select
                    className="form-control cursor-option"
                    id="categoria"
                    value={categoria}
                    onChange={handleCategoriaChange}
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="comida">Comida</option>
                    <option value="transporte">Transporte</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="valor" className="form-label">
                    Valor
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="valor"
                    value={valor}
                    onChange={handleValorChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control no-size"
                    id="descripcion"
                    rows="3"
                    value={descripcion}
                    onChange={handleDescripcionChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="metodoPago" className="form-label">
                    Seleccione el método de pago
                  </label>
                  <select
                    className="form-control cursor-option"
                    id="metodoPago"
                    value={metodoPago}
                    onChange={handleMetodoPagoChange}
                  >
                    <option value="">Seleccione Medio de Pago</option>
                    <option value="tarjeta">Tarjeta de Credito</option>
                    <option value="efectivo">Efectivo</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalGastos