/* ------------------------------- IMPORTACIONES ---------------------------- */

//USECONTEXT (UTILIZA EL CONTEXTO CREADO), CREATECONTEXT (CREA EL CONTEXTO DE LA APP) 

import { useContext, createContext, useState } from "react";

//1° CREAR EL CONTEXTO
//2° EXPORTAR EL CONTEXTO CREADO


export const CartContext = createContext([])

//3° CREAR NUESTRA FUNCION PARA PODER USAR EL CONTEXTO
//4° PODEMOS DEFINIRLO COMO UN CONTEXTO PERSONALIZADO
//5° EXPORTAR  LA FUNCION QUE ALMACENA EL HOOK USECONTEXT
export const useCartContext = () => { return useContext(CartContext) }

//6° CREAR EL COMPONENTE DEL CONTEXTO PROVEEDOR

const CartProvider = ({ children }) => {

    //ESTE ES EL ESTADO DE CARTPROVIDER
    const [itemsCarrito, setItemsCarrito] = useState([])

    
    const agregarAlCarrito = (data) => {
        if(validarProductoExistente(data.id)) {
        alert("El producto ya esta en el carrito")
        } else {
            const listaActual = itemsCarrito
            listaActual.push(data)
            setItemsCarrito(listaActual)
            console.log(itemsCarrito);
        }
    }


    const borrarDelCarrito = (id) => {
        setItemsCarrito(itemsCarrito.filter(e => e.id !== id))
    }

    const limpiarCarrito = () => {

        setItemsCarrito([])
    }
    
    const validarProductoExistente = (id) => {
        if (itemsCarrito.find(e => e.id === id)) {
            return true
        } else {
            return false
        }
    }

    //RENDER DE NUESTRO CARTPROVIDER
    return (
        <CartContext.Provider value={{ itemsCarrito, agregarAlCarrito, borrarDelCarrito, limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider