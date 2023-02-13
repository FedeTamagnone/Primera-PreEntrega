/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import {useState} from 'react'
//ESTILOS
import "./ItemCount.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const ItemCount = (props) => {
//PROPS.STOCK = "10"

//AGREGAR UN MANEJO DE ESTADO (useState)
const [count, setCount]= useState(0);

//guardarCantidad es una funcion y de esa forma el hijo modifica el estado del padre. 

const addOne = () =>{
    if(count < props.stock)
    setCount(count + 1);
    props.guardarCantidad(count)
}

const disOne = () =>{
    if(count > 0)
    setCount(count - 1);
    props.guardarCantidad(count)
}

//FUNCION AGREAR A CARRITO
/* const oneAdd = () =>{
    if(count!==0){
        setCount(0)
        console.log(count);
    }
} */


    return (
        <section className='contenedorContador'>
            <div className='contador'>
            <button onClick={addOne}>+</button>
            <p> {count} </p>
            <button onClick={disOne}>-</button>
            </div>
            <div className='agregar'>
            </div>
        </section> 
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemCount;