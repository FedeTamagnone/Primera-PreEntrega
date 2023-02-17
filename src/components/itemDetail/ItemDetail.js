/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import ItemCount from "../itemCount/ItemCount.js";

//ESTILOS
import Card from 'react-bootstrap/Card';
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./ItemDetail.css";
//COMPONENTES
import { useContext } from 'react'
import {CartContext} from "../../context/CartContex.js";
/* --------------------------------- LÓGICA --------------------------------- */

const ItemDetail = (props) => {
    
    //ESTADO DE COUNT

    const { id, nombre, desc, precio, stock, img } = props.data
    const {agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantidadDeProductos) => {
        if (cantidadDeProductos !== 0) {
            const producto = {
                id: id,
                nombre: nombre,
                precio: precio,
                count: cantidadDeProductos
            }
            //FN DE CONTEX
            agregarAlCarrito(producto)
        }
    } 
    return (
        <section className="contenedorTarjetaDetail">
            <Card className="tarjeta-Detail">
                <Card.Img className="imagen-Detail" src={img} />
                <Card.Body className="card-body-Detail">
                    <Card.Title> {nombre} </Card.Title>
                    <Card.Text> {desc} </Card.Text>
                    <Card.Text> $ {precio} </Card.Text>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </section>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemDetail;