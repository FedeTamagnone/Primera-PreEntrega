/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
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
            <nav className="barraNavegacion">
                <ul>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Productos</a></li>
                    <h1 className="titulo">Que <br />Rulasos</h1>
                    <li><a href="#">RuliTips</a></li>
                    <li><a href="#">RuliPedia</a></li>
                    <CartWidget cantidad="10" />
                </ul>
            </nav>
        </header>
    )
}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default NavBar;