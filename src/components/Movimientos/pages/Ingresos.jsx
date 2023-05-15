import './Estados.css'
function Ingresos() {
  const arreglo = {
    nombre: "Mateo",
    edad: 19,
    sexo: "Masculino",
  };

  return (
    <div className="container">
      <h5>Estas en Ingresos</h5>

      <table class="table table-hover">
        <thead className='encabezado'>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Valor</th>
            <th scope="col">Medio de Pago</th>
            <th scope="col">Fecha y Hora</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ingresos;
