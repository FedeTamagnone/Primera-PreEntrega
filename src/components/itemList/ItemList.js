/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useState, useEffect } from "react";
//ESTILOS
import "./ItemList.css";

//COMPONENTES
import Item from "../item/Item.js";

/* --------------------------------- LÓGICA --------------------------------- */

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch("/data/listaProductos.json")
            .then(res => res.json())
            .then(json => setProductos(json.map(producto => <Item key={producto.id} id={"producto" + producto.id} data={producto} />)));
    }, [])
    console.log(productos);
    return (
        <div>
            <p> Este es el item List - Contenedor de Item</p>
            <div className="contenedorTarjetasHijo">
                {productos}
            </div>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemList;
