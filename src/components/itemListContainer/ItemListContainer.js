/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
//ESTILOS
import "./ItemListContainer.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
const ItemListContainer = (props) => {
    //FUNCION CONSTRUCTORA
    //RETORNO QUE SE VA A RENDERIZAR
    return (
        <main> 
            <p> Componente contenedor ItemListContainer {props.greeting}</p>
            <section>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            </section>
        </main> 
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemListContainer;