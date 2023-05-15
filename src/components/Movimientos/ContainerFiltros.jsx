import { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";

const ContainerFiltros = ({ data }) => {
  const [selectitem, setSelectItem] = useState("Semanal");
  const [fecha, setFecha] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const handleFecha = (event) => {
    setFecha(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = () => {
    e.preventDefault();
  };

  const handledrowdown = (even) => {
    setSelectItem(even.target.value);
  };
  const handlebusqueda = (event) => {
    setBusqueda(event.target.value);
    console.log(event.target.value)
    // const results = Falta implementar el metodo con javascript para poder filtrar
  };
  //     const filtradoBusqueda = data.filter((item) =>
  //     item.name.toLowerCase().includes(busqueda.toLowerCase())
  //   );
  return (
    <div>
      <div className="d-flex flex-row justify-start mt-6 contenedor-principal">
        <div>
          <button className="btn btn-outline-secondary mx-2">
            <AiOutlineFilter className="inline-block" fontSize={"20px"} />{" "}
            Filtrar
          </button>
        </div>
        <div className="dropdown mx-2">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectitem}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handledrowdown}
                value="Diario"
              >
                Diario
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handledrowdown}
                value="Mensual"
              >
                Mensual
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handledrowdown}
                value="Anual"
              >
                Anual
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={handledrowdown}
                value="Semanal"
              >
                Semanal
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="col-md-6" style={{ marginRight: "10px" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="date"
                  className="btn btn-calendar btn-outline-secondary  rounded-2xl "
                  id="fecha"
                  value={fecha}
                  onChange={handleFecha}
                />
              </div>
              {/* <button type="submit" className="btn btn-primary">Enviar</button> */}
            </form>
          </div>
        </div>
        <div className="text-gray-600 ml-10 ">
          <input
            type="search"
            className="form-control rounded-pill shadow-sm mr-20"
            style={{ width: "300px" }}
            placeholder="Buscar"
            value={busqueda}
            onChange={handlebusqueda}
          />
          {/* {filtradoBusqueda.map((item) => (
                                <div key={item.id} className="px-4 py-2">
                                {item.name}
                                </div>
                                ))} */}
        </div>
      </div>
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Balance:</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    $ <span>  </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="card">    
                <div className="card-body">
                  <h5 className="card-title">Ventas totales:</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    $ <span></span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Gastos:</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    $ <span></span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFiltros;
