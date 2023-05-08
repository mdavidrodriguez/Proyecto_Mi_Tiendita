import styled from "styled-components"
import logo from "../assets/logoTienda.jpg"
import { v } from '../styles/Variables'
import { AiOutlineMenuUnfold, AiOutlineHome, AiOutlineApartment, AiTwotoneSetting } from 'react-icons/ai'
import { MdLogout, MdOutlineAnalytics } from 'react-icons/md'
import { BsCart3 } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../App"

export function Sidebar({ sidebarOpen, setsidebarOpen }) {
  const ModSisebarOpen = () => {
    setsidebarOpen(!sidebarOpen)
  }
  const { setTheme, theme } = useContext(ThemeContext)
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }
  return (
    <Container isOpen={sidebarOpen}>
      <button onClick={ModSisebarOpen} className="sidebarbutton">
        <AiOutlineMenuUnfold />

      </button>
      <div className="LogoContent">
        <div className="imgcontent">
          <img src={logo} />
          <h2>
            Mi Tiendita
          </h2>
        </div>
      </div>
      {
        LinksArray.map(({ icons, label, to }) => (
          <div className="LinkContainer" key={label}>
            <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
              <div className="Linkicon">
                {icons}

              </div>
              {
                sidebarOpen && (
                  <span>{label}</span>
                )
              }
            </NavLink>
          </div>
        ))
      }
      <Divider />

      {
        secondaryLinksArray.map(({ icons, label, to }) => (
          <div className="LinkContainer" key={label}>
            <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
              <div className="Linkicon">
                {icons}

              </div>
              {
                sidebarOpen && (
                  <span>{label}</span>
                )
              }
            </NavLink>
          </div>
        ))
      }
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">{theme.toUpperCase()}</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}


const LinksArray = [
  {
    label: "Home",
    icons: <AiOutlineHome />,
    to: "/"
  },
  {
    label: "Estadisticas",
    icons: <MdOutlineAnalytics />,
    to: "/estadisticas"
  },
  {
    label: "Productos",
    icons: <AiOutlineApartment />,
    to: "/productos"
  },
  {
    label: "Inventario",
    icons: <AiOutlineApartment />,
    to: "/inventario"
  },
  {
    label: "Carrito",
    icons: <BsCart3 />,
    to: "/carrito"
  },
]


const secondaryLinksArray = [
  {
    label: "Configuración",
    icons: <AiTwotoneSetting />,
    to: "/"
  },
  {
    label: "Salir",
    icons: <MdLogout />,
    to: "/estadisticas"
  },

]





const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position:sticky;
  padding-top: 20px;
  .sidebarbutton{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)} ;
    border:none;
    letter-spacing:inherit;
    font-size:inherit;
    padding:0;
    outline:none;

  }
  .LogoContent{
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom: ${v.lgSpacing};
    .imgcontent{
      display:flex;
      img{
        max-width:100%;
        height:50px;
      }
      cursor:pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2{
      display:${({ isOpen }) => (isOpen ? `block` : `none `)};

    }
  }
  .LinkContainer{
    margin: 8px 0;
    padding: 2%;
    :hover{
      background: ${(props) => props.theme.bg3};
    }
    .Links{
      display:flex;
      align-items:center;
      text-decoration:none;
      padding:calc(${v.smSpacing}-2px ) 0;
      color:${(props) => props.theme.text};
      .Linkicon{
        padding: ${v.smSpacing} ${v.mdSpacing};
        display:flex;
        svg{
          font-size:1.5rem;
        }


    }
    &.active{
      .Linkicon{
        svg{
          color:${(props) => props.theme.bg4};
        }
      }
    }

    }
    
  
}
.Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "⚪";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
    themeUse === "light" ? v.lightcheckbox : v.checkbox};

              transition: 0.4s;
              &::before {
                position: absolute;
                content: "⚫";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;

                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  } 

`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};;
  margin: ${v.lgSpacing} 0;
`;


export default Sidebar