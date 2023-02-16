/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
//ESTILOS
import "./ItemListContainer.css";
//COMPONENTES

import ItemList from "../itemList/ItemList.js";
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {tipo}= useParams()
    useEffect(() => {
        const getData = async () => {
            const queryRef = tipo
            ? query(
                collection(db, "listaDeProducto"),
                //"CATEGORIA DE FIRESTORE"
                where("categoria", "==", tipo)
                )
                : collection(db, "listaProductos");

            // hacer la consulta
            const response = await getDocs(queryRef);
            const docsInfo = response.docs.map((doc) => {
                const newDoc = {
                    id: doc.id,
                    ...doc.data(),
                };
                return newDoc;
            });
            setProductos(docsInfo);
        };
        getData();
    }, [tipo]);

/*         fetch("../data/listaProductos.json")
            .then(res => res.json())
            .then(json => {
                if(tipo){
                    setProductos(json.filter((item)=> item.tipo === tipo))
                }else{
                    setProductos(json)
                }
            });     
        }, [tipo]*/


    return (
            <div className="contenedorTarjetas">
                <ItemList productos={productos}/>
            </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemListContainer;