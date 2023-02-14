/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import CartItem from "../cartItem/CartItem.js";
import { Link } from "react-router-dom";
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
            {itemsCarrito.length === 0 ? (
                <>
                    No hay productos <Link to="/"> Volver </Link>
                </>
            ) : (
                <>
                    {itemsCarrito.map((e) => <CartItem item={e.nombre} count={e.count} precio={e.precio} borrarDelCarrito={borrarDelCarrito} />)}
                    <button onClick={() => limpiarCarrito()}> VACIAR CARRITO </button>
                </>
            )}

        </div>
        
    ) 
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Cart;