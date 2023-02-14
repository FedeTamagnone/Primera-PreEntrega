/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS

//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./CartItem.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const CartItem = ({item, count,precio,borrarDelCarrito}) => {
    return ( 
        <div> 
            {item} Cantidad: {count} - ${precio * count}
            <button onClick={()=>borrarDelCarrito()}> ELIMINAR PRODUCTO </button>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartItem;