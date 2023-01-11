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

//FUNCIONES SUMAR Y RESTAR
//NO SE PUEDE RESTAR MENOS DE CERO
//NO PUEDO SUMAR MAS DE LA CANTIDAD MAXIMA EN STOCK
const addOne = () =>{
    if(count < props.stock)
    setCount(count + 1);
}

const disOne = () =>{
    if(count > 0)
    setCount(count - 1);
}

//FUNCION AGREAR A CARRITO
const oneAdd = () =>{
    if(count!==0){
        setCount(0)
        console.log(count);
    }
}


    return (
        <section className='contenedorContador'>
            <div className='contador'>
            <button onClick={addOne}>+</button>
            <p> {count} </p>
            <button onClick={disOne}>-</button>
            </div>
            <div className='agregar'>
            <button onClick={oneAdd}>Agregar a carrito</button>
            </div>
        </section> 
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemCount;