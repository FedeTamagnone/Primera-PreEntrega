/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { Link } from "react-router-dom";
//ESTILOS
import "./NavBar.css";
import CartWidget from "../cartwidget/CartWidget.js";
//COMPONENTES

/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
// const NavBar = () => {

function NavBar() { //FUNCION CONSTRUCTORA
    //RETORNO QUE SE VA A RENDERIZAR
    //PASO CANTIDAD COMO PROPIEDAD
    return (
        <header>
            
            <h1 className="titulo">Qué Rulasos. Cuidado Capilar Integral</h1>

            <nav className="barraNavegacion">
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/productos">PRODUCTOS</Link></li>
                    <li><Link to="/informacion">INFORMACIÓN</Link></li>
                    <li><Link to="/nosotros">NOSOTROS</Link></li>
                    <CartWidget cantidad="10" />
                </ul> 
            </nav>
        </header>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default NavBar;