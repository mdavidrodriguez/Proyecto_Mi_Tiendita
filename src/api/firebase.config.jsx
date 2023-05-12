import {getAuth} from 'firebase/auth';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDPY3rpEOGRezx0XlLel1PgmgGbD4N-nwU",
  authDomain: "login-c9471.firebaseapp.com",
  projectId: "login-c9471",
  storageBucket: "login-c9471.appspot.com",
  messagingSenderId: "771845190727",
  appId: "1:771845190727:web:6a8de3fa38eb7a9a156d62"
};

// Inicializacion del servicio de firebase
const app = initializeApp(firebaseConfig);

// Autenticacion
export const auth = getAuth(app)