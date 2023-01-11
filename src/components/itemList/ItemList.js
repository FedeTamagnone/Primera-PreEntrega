/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./ItemList.css";
//COMPONENTES
import Item from "../item/Item";
/* --------------------------------- LÓGICA --------------------------------- */

const ItemList = () => {
    // ITINERAR MI LISTA DE OBJETOS
    // MOSTRAR TODOS MIS OBJETOS
    const listaDeProductos =[
            {id: 1, nombre: "Low Poo Argán", tipo: "shampoo", marca: "argan" ,desc: "Limpia el cabello de una manera suave, dejándolo con brillo, sedosidad y luminosidad ", precio: 1200,stock:10},
            {id: 2, nombre: "Crema de peinar Argán", tipo: "crema", marca: "argan",desc: "Moldea el cabello de una manera suave, dándole brillo gracias a sus ingredientes nutritivos.", precio: 1000,stock:3},
            {id: 3, nombre: "Gel Supreme Fixer 250gr.", tipo: "gel", marca: "fixer",desc: "Es un gel sin alcohol secante, por lo cual protege e hidrata el cabello. Puede usarse para realizar peinados o para armar los rulos. ", precio: 900,stock:7},
            {id: 4, nombre: "Organic Trarment", tipo: "crema", marca: "bekim",desc: "Es un gel sin alcohol secante, por lo cual protege e hidrata el cabello. Puede usarse para realizar peinados o para armar los rulos. ", precio: 1900,stock:8},
            {id: 5, nombre: "Low shampoo", tipo: "shampoo", marca: "bekim",desc: "Limpia el cabello de una manera suave, dejándolo con brillo, sedosidad y luminosidad ", precio: 1500,stock:5}
        ] 
//CON DATA LES ESTOY PASANDO TODOS LOS ITEMS A PRODUCTOS  
    const listaDeProductosRende = listaDeProductos.map( productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)


    return (   
            <div>
                <p> Este es el item List</p>
                <div className="contenedorTarjetasHijo">
                {listaDeProductosRende}
                </div>
            </div>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default ItemList;