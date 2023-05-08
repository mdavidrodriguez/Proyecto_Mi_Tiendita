import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routers/routes'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import React, { useState } from 'react'
import { Light, Dark } from './styles/Themes'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = React.createContext(null)
function App() {
  const [theme, setTheme] = useState("light")
  const themeStyle = theme === "light" ? Light : Dark;
 
  const [sidebarOpen, setsidebarOpen] = useState(true)
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
              <MyRoutes />

            </Container>
          </BrowserRouter>
        </ThemeProvider>

      </ThemeContext.Provider>

    </>
  )
}
const Container = styled.div`
  display:grid;
  grid-template-columns:90px auto;
  background:${({ theme }) => theme.bgtotal};
  transition: all 0.3s ease-in-out;
  &.active{
    grid-template-columns:300px auto;
  }


`

export default App
