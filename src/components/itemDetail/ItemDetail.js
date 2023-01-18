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
        <section className="contenedorTarjetaDetail">
            <Card className="tarjeta-Detail">
                    <Card.Img className ="imagen-Detail"  src= {img} />      
                <Card.Body className="card-body-Detail">
                    <Card.Title> {nombre} </Card.Title>                  
                    <Card.Text> {desc} </Card.Text>
                    <Card.Text> <h4> ${precio} </h4> </Card.Text>
                    <ItemCount stock = {stock}/>
                </Card.Body>
            </Card>
        </section>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemDetail;