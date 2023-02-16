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
    const {itemsCarrito,limpiarCarrito} = useContext(CartContext);

    const obtenerTotal = () => {
        let total = 0
        itemsCarrito.forEach((e) => total += (e.count * e.precio))
        return total        
    };
    let total = obtenerTotal ()
    return (
        <div>
            {itemsCarrito.length === 0 ? (
                <> 
                    No hay productos <Link to="/"> Volver </Link>
                </>
            ) : (
                <>
                    {itemsCarrito.map((e) => (
                    <CartItem key={e.id} id={e.id} item={e.nombre} count={e.count} precio={e.precio} />
                    ))}
                    <button onClick={() => limpiarCarrito()}> VACIAR CARRITO </button>
                    <p> <strong> El total de su compra es : ${total} </strong> </p>
                </>
            )}
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Cart;