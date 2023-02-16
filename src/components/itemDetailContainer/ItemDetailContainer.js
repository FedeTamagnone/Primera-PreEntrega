/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useEffect , useState} from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail.js"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../services/firebase.js";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./ItemDetailContainer.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {productoId} = useParams()

    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"listaProductos",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            setProducto(newDoc);
        }
        getProducto();
    },[productoId])


/*     useEffect(()=>{
        fetch("../data/listaProductos.json")
            .then(res => res.json())
            .then(json => setProducto(json.find((item)=> item.id === productoId)));
        }, [productoId]) //USO COMO PARAMETRO PARA QUE CAMBIE CADA VEZ QUE PRODUCTOID Y EL RENDER DE PRODUCTOS CAMBIE
 */
    return ( 
            <main>
                <section className="contenedorDetail">
                    <ItemDetail data={producto}/>
                </section>
                <div className="link">
                    <Link to="/productos"> Volver a productos</Link>
                </div>
            </main>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemDetailContainer;