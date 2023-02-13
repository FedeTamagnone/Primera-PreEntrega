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

    //ESTE ES EL STADO DE CARTPROVIDER
    const [items, setItems] = useState([])

    //FUNCIONES DE NUESTRO CARTPROVIDER
    console.log(items);

    const agregarAlCarrito = (data) => {

        if(validarProductoExistente(data.id)) {
        alert("El producto ya esta en el carrito")
        } else{
            const listaActual = items
            listaActual.push(data)
            setItems(listaActual)
            console.log(items);
        }
    }


    const borrarDelCarrito = (id) => {
        const nuevaLista = items.filter(e => e.id !== id)
        setItems(nuevaLista)
    }

    const limpiarCarrito = () => {
        setItems([])

    }
    const validarProductoExistente = (id) => {
        if (items.find(e => e.id === id)) {
            return true
        } else {
            return false
        }
    }

    //RENDER DE NUESTRO CARTPROVIDER
    return (
        <CartContext.Provider value={{ items, agregarAlCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider