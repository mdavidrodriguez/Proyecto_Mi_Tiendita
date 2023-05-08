import { useState } from "react";
import Productos from "../components/CarritoCompras/Productos";
import Layout from "../components/CarritoCompras/Layout";
import Title from "../components/CarritoCompras/Title";
import Navbar from "../components/CarritoCompras/Navbar";

function Carrito() {
  const [productos] = useState([
    {
      name: "tomate",
      price: 1500,
      cantidad: "1kg",
      img: "/Productos/tomate.jpg",
    },
    { name: "Arbejas", price: 2500, img: "/Productos/arbejas.jpg" },
    { name: "Lechuga", price: 500, img: "/Productos/lechuga.jpg" },
    {
      name: "Cereal",
      price: 3800,
      cantidad: "1unidad x 250gr",
      img: "/Productos/Zucaritas.png",
    },
    {
      name: "Harina",
      price: 3500,
      cantidad: "1kg",
      img: "/Productos/Harina.jpg",
    },
    {
      name: "Jabon",
      price: 1800,
      cantidad: "1 Unidad",
      img: "/Productos/Jabon.jpg",
    },
  ]);

  const [carro, setCarro] = useState([]);
  const [esCarroVisible, setEsCarroVisible] = useState(false);

  const agregarAlCarro = (producto) => {
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return setCarro(newCarro);
    }
    return setCarro([...carro, { ...producto, cantidad: 1 }]);
  };

  const removerDelCarro = (producto) => {
    const updatedCarro = carro.map((x) =>
      x.name === producto.name ? { ...x, cantidad: x.cantidad - 1 } : x
    );
    setCarro(updatedCarro.filter((x) => x.cantidad !== 0));
  };

  const mostrarCarro = () => {
    if (!carro.length) {
      return;
    }
    setEsCarroVisible(!esCarroVisible);
  };

  return (
    <div>
      <Navbar
        carro={carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={mostrarCarro}
      />
      <Layout>
        <Title />
        <Productos agregarAlCarro={agregarAlCarro} productos={productos}
        removerDelCarro={removerDelCarro}
        />
      </Layout>
    </div>
  );
}

export default Carrito;
