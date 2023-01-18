/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import ItemCount from "../itemCount/ItemCount.js";
//ESTILOS
import Card from 'react-bootstrap/Card';
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./ItemDetail.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const ItemDetail = (props) => {

    const {nombre,desc,precio,stock,img} = props.data

    return ( 
        <section>
            <p>Este es cada item</p>
            <Card className="tarjeta">
                <Card.Img className ="imagen"  src= {img} />      
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
export default ItemDetail;