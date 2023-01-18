/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS

//ESTILOS
import "./ItemList.css";

//COMPONENTES
import Item from "../item/Item.js";

/* --------------------------------- LÓGICA --------------------------------- */

const ItemList = (props) => {
    return (
        <div>
            <p> Este es el item List - Contenedor de Item</p>
            <div className="contenedorTarjetasHijo"> 
                {props.productos.map((data)=><Item key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemList;
