/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./CartItem.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const CartItem = ({item, cantidad,precio,borrarDelCarrito}) => {
    return ( 
        <div> 
            {item} Cantidad: {cantidad} - ${precio * cantidad}
            <button onClick={()=>borrarDelCarrito()}> ELIMINAR PRODUCTO</button>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartItem;