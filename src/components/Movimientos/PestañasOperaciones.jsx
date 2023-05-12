import React, { useState } from "react";
// import Ingresos from "./Ingresos";
// import Egresos from "./Egresos";
// import Cobrar from "./Cobrar";
// import Pagar from "./Pagar";

const PestañasOperaciones = () => {
  const [pestañaActiva, setPestañaActiva] = useState("ingresos");

  const handleClick = (pestaña) => {
    setPestañaActiva(pestaña);
  };

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${pestañaActiva === "ingresos" ? "active" : ""}`}
            onClick={() => handleClick("ingresos")}
          >
            Ingresos
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${pestañaActiva === "egresos" ? "active" : ""}`}
            onClick={() => handleClick("egresos")}
          >
            Egresos
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${pestañaActiva === "cobrar" ? "active" : ""}`}
            onClick={() => handleClick("cobrar")}
          >
            Por cobrar
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${pestañaActiva === "pagar" ? "active" : ""}`}
            onClick={() => handleClick("pagar")}
          >
            Por pagar
          </a>
        </li>
      </ul>
      {/* {pestañaActiva === "ingresos" ? <Ingresos /> : null}
      {pestañaActiva === "egresos" ? <Egresos /> : null}
      {pestañaActiva === "cobrar" ? <Cobrar /> : null}
      {pestañaActiva === "pagar" ? <Pagar /> : null} */}
    </div>
  );
};

export default PestañasOperaciones;
