/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import {useState} from 'react'
//ESTILOS
import "./ItemCount.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const ItemCount = (props) => {
//AGREGAR UN MANEJO DE ESTADO (useState)
const [count, setCount]= useState(0);

//guardarCantidad es una funcion y de esa forma el hijo modifica el estado del padre. 

const addOne = () =>{
    if(count < props.stock)
    setCount(count + 1);
}

const disOne = () =>{
    if(count > 0)
    setCount(count - 1);
}

    return (
        <section className='contenedorContador'>
            <div className='contador'>
            <button onClick={addOne}>+</button>
            <p> {count} </p>
            <button onClick={disOne}>-</button>
            </div>
            <button className='agregar'onClick={() => props.onAdd(count)}> Agregar a carrito </button>
        </section> 
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemCount;