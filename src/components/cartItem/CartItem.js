/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useContext } from 'react'
import {CartContext} from "../../context/CartContex.js";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./CartItem.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const CartItem = ({id,item,count,precio}) => {
    const {borrarDelCarrito} = useContext(CartContext)
    const compra = precio * count; 
    return ( 
        <div className='tarjetaCarrito'> 
            {item} Cantidad: {count} - ${compra} 
            <button onClick={()=>borrarDelCarrito(id)}> ELIMINAR PRODUCTO </button>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartItem;