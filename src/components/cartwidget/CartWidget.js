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
    const {totalCarrito} = useContext(CartContext);
    return ( 
        <div className="contenedorCarrito">
            <img alt="carrito" src={Carrito}></img>
            <p> {totalCarrito()} </p>
        </div>
            
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default CartWidget;