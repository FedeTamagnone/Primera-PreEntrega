/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
//ESTILOS
import "./ItemListContainer.css";
//COMPONENTES

import ItemList from "../itemList/ItemList.js";
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])
    const {tipo}= useParams()
    useEffect(()=>{
        fetch("../data/listaProductos.json")
            .then(res => res.json())
            .then(json => {
                if(tipo){
                    setProductos(json.filter((item)=> item.tipo === tipo))
                }else{
                    setProductos(json)
                }
            });
    }, [tipo])

    return (
            <div className="contenedorTarjetas">
                <p> Componente contenedor ItemListContainer {props.greeting} - Contiene ItemList</p>
                <ItemList productos={productos}/>
            </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemListContainer;