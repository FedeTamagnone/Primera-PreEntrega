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
            <div className="contenedorTarjetasHijo">
                {props.productos.map((data)=><Item key={data.id} data={data}/>)}
            </div>
        </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemList;
