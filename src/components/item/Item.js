/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import ItemCount from "../itemCount/ItemCount.js";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Item.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Item = (props) => {
//DESCONSTRULLO PROPS.DATA PARA NO ESTAR LLAMANDOLO => PROPS.DATA.NOMBRE, PROPS.DATA.TIPO
const {nombre,tipo,marca,desc,precio,stock} = props.data

    return ( 
        <section>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {nombre} </h5>
                    <p className="card-text"> {desc}</p>
                    <h5 className="card-title"> ${precio} </h5>
                    <ItemCount stock = {stock}/>
                </div>
            </div>
        </section>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Item;