/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import CartItem from "../cartItem/CartItem.js";
import { useContext } from "react";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Cart.css";
//COMPONENTES
import {CartContext} from "../../context/CartContex.js";
/* --------------------------------- LÓGICA --------------------------------- */

const Cart = () => {
    const {itemsCarrito, borrarDelCarrito,limpiarCarrito} = useContext(CartContext);
    return ( 
        <div> 
            {itemsCarrito.map((e) => <CartItem item={e.nombre} cantidad={e.count} precio={e.precio} borrarDelCarrito={borrarDelCarrito}/> )}
            <button onClick={()=>limpiarCarrito()}> VACIAR CARRITO </button>
        </div>
        
    ) 
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Cart;