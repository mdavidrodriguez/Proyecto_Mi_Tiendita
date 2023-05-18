import styles from './Login.module.css'
import { InputControl } from '../InputControl/InputControl.jsx'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../api/firebase.config'

export function LoginFire() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", pass: "" });
    const [errorMsg, setErrorMsg] = useState([])
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
    const Loguearse = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Datos incompletos")
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false)
                navigate("/")
            })
            .catch((err) => {
                setSubmitButtonDisabled(false)
                setErrorMsg(err.message)
            })
    }
    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>
                <InputControl label="Email" onChange={(event) => setValues((prev) => (
                    { ...prev, email: event.target.value }
                ))} 
                placeholder="Ingrese su correo"/>
                <InputControl label="Contraseña" onChange={(event) => setValues((prev) => (
                    { ...prev, pass: event.target.value }
                ))} 
                placeholder="Ingrese su Contraseña"/>
                
                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={Loguearse} disabled={submitButtonDisabled}>Login Btn</button>
                    <p>Crear Cuenta
                        <span>
                            <Link to="/signup">Ir</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

