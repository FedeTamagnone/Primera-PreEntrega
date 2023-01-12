/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import ItemCount from "../itemCount/ItemCount.js";
//IMPORTACIONES BOOTSTRAP
import Card from 'react-bootstrap/Card';
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Item.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Item = (props) => {
//DESCONSTRULLO PROPS.DATA PARA NO ESTAR LLAMANDOLO => PROPS.DATA.NOMBRE, PROPS.DATA.TIPO
const {nombre,desc,precio,stock,img} = props.data

    return ( 
        <section>
            <Card className="tarjeta">
                <Card.Img variant="top" src='img' />
                <Card.Body className="card-body">
                    <Card.Title> {nombre} </Card.Title>                  
                    <Card.Text> {desc} </Card.Text>
                    <Card.Text> ${precio}  </Card.Text>
                    <ItemCount stock = {stock}/>
                </Card.Body>
            </Card>
        </section>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Item;