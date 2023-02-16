/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useContext, useEffect } from "react";
import { useState } from "react";
//ESTILOS
import "./CartWidget.css";
//COMPONENTES
import Carrito from "./icono-carrito.png"
import {CartContext} from "../../context/CartContex.js";
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
const CartWidget = () => {
    const {itemsCarrito} = useContext(CartContext);
    const [cantidadDeProductos, setCantidadDeProductos] = useState(0);

    useEffect(()=>{
        setCantidadDeProductos(itemsCarrito.reduce((acc,item)=>acc += item.count,0));
        },[itemsCarrito])

    return ( 
        <div className="contenedorCarrito">
            <img alt="carrito" src={Carrito}></img>
            <p> {cantidadDeProductos} </p>
        </div>
            
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartWidget;