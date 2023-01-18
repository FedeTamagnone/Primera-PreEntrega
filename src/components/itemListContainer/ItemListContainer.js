/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS

//ESTILOS
import "./ItemListContainer.css";
//COMPONENTES

import ItemList from "../itemList/ItemList.js";
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
const ItemListContainer = (props) => {



    return (
            <div className="contenedorTarjetas">
                <p> Componente contenedor ItemListContainer {props.greeting} - Contiene ItemList</p>
                <ItemList/>|
            </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemListContainer;