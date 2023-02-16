import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAi7VwOJOyY3j2k7Tgfflq_pGiBfwMtvS4",
    authDomain: "querulasos-react.firebaseapp.com",
    projectId: "querulasos-react",
    storageBucket: "querulasos-react.appspot.com",
    messagingSenderId: "447728628340",
    appId: "1:447728628340:web:87e5019d7991adc04bd721"
};

//CLIENTE RECIBE DATOS DE FIREBASE
const app = initializeApp(firebaseConfig);
//RETORNA LA BASE DE DATOS
export const db = getFirestore(app);