import styled from "styled-components";
import astronauta from "../assets/Logo.jpg";
import logogoogle from "../assets/logoogle.png";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

import styles from "../components/Login/LoginAuth/Login.module.css";
import { InputControl } from "../components/Login/InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase.config";

const Login = () => {
  const navigate = useNavigate();
  const { user, googleSignIn } = UserAuth();
  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Loguearse = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="d-flex">
      <div className={styles.container}>

        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login</h1>
          <InputControl
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Ingrese su correo"
          />
          <InputControl
            label="Contraseña"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Ingrese su Contraseña"
            type="password"
          />
          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={Loguearse} disabled={submitButtonDisabled}>
              Login
            </button>
            <p>
              ¿No tienes Cuenta?
              <span>
                <Link to="/signup">Registrate</Link>
              </span>
            </p>
            <Container>
              <button onClick={iniciarSesion} className="btniniciar">
                <img src={logogoogle} />
                <span> Iniciar con Gmail</span>
              </button>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

const Container = styled.div`
  .btniniciar {
    img {
      width: 30px;
    }
  }
`;
export default Login;
