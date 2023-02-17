/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useContext,useState } from "react";
import {CartContext} from "../../context/CartContex.js";
import { collection, addDoc} from "firebase/firestore"
import { db } from "../../services/firebase";

//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Formulario.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Formulario = () => {
    const {itemsCarrito,obtenerTotal,limpiarCarrito} = useContext(CartContext);

    const totalCompra = obtenerTotal()

    const [nombre, setnombre] = useState ("")
    const [apellido, setapellido] = useState ("")
    const [telefono, setTelefono] = useState ("")
    const [email, setEmail] = useState ("")
    const onChangeNombre = (e) => {
        setnombre(e.target.value);
    }
    const onChangeApellido = (e) => {
        setapellido(e.target.value);
    }
    const onChangeTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const sendOrden = async(e) => {
        const newOrder = {
            buyer: { nombre: nombre, apellido: apellido, telefono: telefono, email: email }, 
            items: itemsCarrito, 
            precioTotal: totalCompra,
        }
        alert("Compra Realizada")
        //limpiarCarrito();
/*         const queryRef = collection(db, "ordenes");
        const response = await addDoc(queryRef, newOrder);
        console.log(response); */
    }





    return ( 
        <div>
            <input htmlFor="nombre" type="text" placeholder="NOMBRE" onChange={onChangeNombre}></input>
            <br />
            <input htmlFor="apellido" type="text" placeholder="APELLIDO" onChange={onChangeApellido}></input>
            <br />
            <input htmlFor="telefono" type="text" placeholder="TELEFONO" onChange={onChangeTelefono}></input>
            <br />
            <input htmlFor="email" type="text" placeholder="queRulasos@queRulasos.com" onChange={onChangeEmail}></input>
            <br />
            <button onClick={sendOrden}> Finalizar compra</button>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Formulario;