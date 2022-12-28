/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
//ESTILOS
import "./NavBar.css";
import CartWidget from "../cartwidget/CartWidget.js";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */
//PUEDO USAR ARROW FUNCTION
// const NavBar = () => {

function NavBar(){ //FUNCION CONSTRUCTORA
    //RETORNO QUE SE VA A RENDERIZAR
    //PASO CANTIDAD COMO PROPIEDAD
    return(
        <header>
            <h1 className="titulo">Que Rulasos</h1>
            <nav className="barraNavegacion">
            <li><a href="">Servicios</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">RuliTips</a></li>            
            <li><a href="">RuliPedia</a></li>

            <CartWidget cantidad="10"/> 
            </nav>
        </header>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default NavBar;