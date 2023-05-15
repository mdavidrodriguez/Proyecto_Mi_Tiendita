import React, { useState } from "react";
import Ingresos from "./pages/Ingresos";
import Egresos from "./pages/Egresos";
import PorCobrar from "./pages/PorCobrar";
import PorPagar from "./pages/PorPagar";

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
            className={`nav-link ${
              pestañaActiva === "ingresos" ? "active" : ""
            }`}
            onClick={() => handleClick("ingresos")}
          >
            Ingresos
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              pestañaActiva === "egresos" ? "active" : ""
            }`}
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
      {pestañaActiva === "ingresos" ? <Ingresos /> : null}
      {pestañaActiva === "egresos" ? <Egresos /> : null}
      {pestañaActiva === "cobrar" ? <PorCobrar /> : null}
      {pestañaActiva === "pagar" ? <PorPagar /> : null}
    </div>
  );
};

export default PestañasOperaciones;
