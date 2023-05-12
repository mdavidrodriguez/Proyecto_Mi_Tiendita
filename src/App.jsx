import "./App.css";
import { MyRoutes } from "./routers/routes";
import { AuthContextProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <>
    <AuthContextProvider>
      
      <MyRoutes />

    </AuthContextProvider>
    </>
  );
}

export default App;
