import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const inputEmail = document.getElementById("email");
const Inputpassword = document.getElementById("password");
const ingresar = document.getElementById("ingresar");

const firebaseConfig = {
  //Configuración de firebase
  apiKey: "AIzaSyDD7FipX6dXkyVrm1pz9vRyE2DgdyU8jwM",
  authDomain: "login-94c83.firebaseapp.com",
  projectId: "login-94c83",
  storageBucket: "login-94c83.appspot.com",
  messagingSenderId: "50507442548",
  appId: "1:50507442548:web:554ac8a79fe0dae5072421",
};

// Inicializa firebase
const app = initializeApp(firebaseConfig);
const login = (email, password) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Cuando los datos son correctos se redirige a la siguiente página
      const user = userCredential.user;
      window.location.href = "sesion-iniciada.html"; //
      console.log(user);
    })
    //En caso de existir un error
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
//Se agrega el evento al botón Ingresar
ingresar.addEventListener("click", (e) => {
  const email = inputEmail.value;
  const password = Inputpassword.value;
  e.preventDefault();
  console.log(email, password);
  login(email, password);
});
