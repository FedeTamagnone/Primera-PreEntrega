/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useContext } from 'react'
import {CartContext} from "../../context/CartContex.js";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./CartItem.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const CartItem = ({item,count,precio}) => {
    const {borrarDelCarrito} = useContext(CartContext)
    const compra = precio * count; 
    return ( 
        <div> 
            {item} Cantidad: {count} - ${compra} 
            <button onClick={()=>borrarDelCarrito(item)}> ELIMINAR PRODUCTO </button>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartItem;