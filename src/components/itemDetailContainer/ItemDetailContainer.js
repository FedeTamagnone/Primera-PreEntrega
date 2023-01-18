/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useEffect , useState} from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail.js"
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./ItemDetailContainer.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [ productoFiltrado, setProductoFiltrado] = useState()

    const {productoTipo} = useParams()

    useEffect(()=>{
        fetch("/data/listaProductos.json")
            .then(res => res.json())
            .then(json => setProductos(json.map(producto => <ItemDetail key={producto.id} id={"producto" + producto.id} data={producto} />)));
            setProductoFiltrado(productos.find( e => e.tipo === productoTipo))
        }, [productoTipo,productos,productoFiltrado]) //USO COMO PARAMETRO PARA QUE CAMBIE CADA VEZ QUE PRODUCTOID Y EL RENDER DE PRODUCTOS CAMBIE

    return ( 
            <main>
                <section className="contenedorDetail">
                {productoFiltrado} 
                </section>
                <div className="link">
                <Link to="/productos"> Volver a productos</Link>
                </div>
            </main>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemDetailContainer;