/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { useState, useEffect } from "react";
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Loader.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Loader = () => {

    const {cargando, setCargando} = useState();

    useEffect(() =>{
        setTimeout(() =>{
            setCargando(false);
        },5000)
    })


/* -------------------------------- METODO 1 -------------------------------- */
    /*
    if (cargando){
        return(
            <div className="loader-padding">
                Loader..
            </div>
        ) 
    }else{
        return(
            <div className="loader-padding">
                Ya cargo por completo
            </div>
        )
    }
    */

/* ---------- METODO 2 - OPERADOR TERNARIO CAMBIA EL VALUE DEL TAG ---------- */
/*     return ( 
            <div className="loader-padding"> 
            {cargando ? "Esta cargando" : "Ya cargó "}
            </div>
    )
} */

/* ----------------- METODO 3 - OPERADOR TERNARIO CAMBIA TAG ---------------- */
    return (
        <div className="loader-padding">
            {cargando && <h2>Esta cargando</h2>}
            {!cargando && <h2>Estaba cargando</h2>}
        </div>
    )


}
/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Loader;