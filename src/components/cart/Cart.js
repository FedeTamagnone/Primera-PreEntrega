/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import CartItem from "../cartItem/CartItem.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../../context/CartContex.js";
//import Formulario from "../formulario/Formulario.js";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Cart.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Cart = () => {
    const {itemsCarrito,limpiarCarrito,obtenerTotal} = useContext(CartContext);
    let total = obtenerTotal()
    return (
        <div className="totalCompra">
            {itemsCarrito.length === 0 ? (
                <>
                    No hay productos <Link to="/"> Volver </Link>
                </>
            ) : (
                <>
                    {itemsCarrito.map((e) => (
                        <CartItem key={e.id} id={e.id} item={e.nombre} count={e.count} precio={e.precio} />
                    ))}
                    <div>
                        <button onClick={() => limpiarCarrito()}> VACIAR CARRITO </button>
                        <p> <strong> El total de su compra es : ${total} </strong> </p>
                        <Link to="/carrito/formulario"> Continuar compra </Link>
                    </div>
                </>
            )}
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Cart;