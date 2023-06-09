import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import { useState } from "react";
import { UserAuth } from "../context/AuthContext"

import "./NavBar.css";


const Data = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Inventario",
    path: "/inventario",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Movimientos",
    path: "/movimientos",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Surte tu Inventario",
    path: "/inventario",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];


export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { user, logOut } = UserAuth()
  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose/>
            </Link>
           
          </li>
            
            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
              <button onClick={cerrarSesion} className="btn-salir"> <FaIcons.FaSignOutAlt /> Salir</button>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
