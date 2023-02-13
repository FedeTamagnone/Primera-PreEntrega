/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import ItemCount from "../itemCount/ItemCount.js";

//ESTILOS
import Card from 'react-bootstrap/Card';
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./ItemDetail.css";
//COMPONENTES
import { useState} from "react";
import {useCartContext} from "../../context/CartContex.js";
/* --------------------------------- LÓGICA --------------------------------- */

const ItemDetail = (props) => {
    
    const [cantidadDeProductos, setCantidadDeProductos] = useState(0);
    
    const { id, nombre, desc, precio, stock, img } = props.data
    
    //Hijo ejecuta fn y modifica al padre. No puede pasarle parametros para modificar hijo a padre

    const {agregarAlCarrito} = useCartContext()

    const funcionDeHijoDeGuardarCantidad = (cantidadX) =>{
        setCantidadDeProductos(cantidadX)
    }


    const onAdd = () => {
        if (cantidadDeProductos !== 0) {
            const producto = {
                id: id,
                nombre: nombre,
                precio: precio,
                count: cantidadDeProductos
            }
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

                    <ItemCount stock={stock} guardarCantidad={funcionDeHijoDeGuardarCantidad}/>
                    <button onClick={onAdd}> onAdd </button>
                </Card.Body>
            </Card>
        </section>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemDetail;