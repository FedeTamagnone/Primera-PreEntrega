/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS

//IMPORTACIONES BOOTSTRAP
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Item.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Item = (props) => {
//DESCONSTRULLO PROPS.DATA PARA NO ESTAR LLAMANDOLO => PROPS.DATA.NOMBRE, PROPS.DATA.TIPO
const {nombre,desc,precio,img,id} = props.data

    return ( 
        <section>
            <Card className="tarjeta">
                <div className="divImagen">
                <Card.Img className ="imagen"  src= {img} />      
                </div>
                <Card.Body className="card-body">
                    <Card.Title> {nombre} </Card.Title>                  
                    <Card.Text> {desc} </Card.Text>
                    <Card.Text> ${precio}  </Card.Text>
                    <Link to={`/producto/${id}`}> Ver detalle del producto</Link>
                </Card.Body>
            </Card>
        </section>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Item;