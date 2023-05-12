import styled from "styled-components"
import { UserAuth } from "../context/AuthContext"
import { useEffect } from "react"


const Home = () => {
  const { user, logOut } = UserAuth()
  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {

  // },[])
  return (
    <Container>
      <h1>Bienvenido {user.displayName}</h1>
      <button onClick={cerrarSesion}>Cerrar Sesion</button>
    </Container>
  )
}
const Container = styled.div`
`

export default Home