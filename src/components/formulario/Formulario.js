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
    const [ordenId, setOrdenId] = useState(undefined)

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
        if (nombre && apellido && telefono && email === ""){
            alert("complete datos")
        }  else if(itemsCarrito.length === 0){
            alert("carrito vacío")
        } else {
            const newOrder = {
                buyer: { nombre: nombre, apellido: apellido, telefono: telefono, email: email }, 
                items: itemsCarrito, 
                precioTotal: totalCompra,
            }
            alert("Compra Realizada")
            const queryRef = collection(db, "ordenes");
            const response = await addDoc(queryRef, newOrder);
            setOrdenId(response.id)
            limpiarCarrito();
        }

    
    }





    return ( 
        <div>
            <form>
            <input htmlFor="nombre" type="text" placeholder="NOMBRE" onChange={onChangeNombre}></input>
            <br />
            <input htmlFor="apellido" type="text" placeholder="APELLIDO" onChange={onChangeApellido}></input>
            <br />
            <input htmlFor="telefono" type="text" placeholder="TELEFONO" onChange={onChangeTelefono}></input>
            <br />
            <input htmlFor="email" type="text" placeholder="queRulasos@queRulasos.com" onChange={onChangeEmail}></input>
            <br />
            <button onClick={sendOrden}> Finalizar compra</button>
            </form>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Formulario;