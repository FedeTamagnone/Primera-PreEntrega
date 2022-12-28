/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
//ESTILOS
import "./CartWidget.css";
//COMPONENTES
import Carrito from "./icono-carrito.png"
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
const CartWidget = (props) => {
    //FUNCION CONSTRUCTORA
    //RETORNO QUE SE VA A RENDERIZAR
    return ( 
        <div className="contenedorCarrito">
            <img src={Carrito}></img>
            <p> {props.cantidad}</p>
        </div>
            
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartWidget;