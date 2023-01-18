/* ------------------------------- IMPORTACIONES ---------------------------- */

//MODULOS
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
//ESTILOS
/* ---------------------------- ctrl + shift + L ---------------------------- */
import "./Home.css";
//COMPONENTES
/* --------------------------------- LÓGICA --------------------------------- */

const Home = () => {

    return (
        <header>
            <section>

                <Carousel variant="dark" className="contendorCarrusel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/data/multimedia/carrusel1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/data/multimedia/carrusel2.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/data/multimedia/carrusel3.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className='contenedorCuadrados'>

                <div className='div1'>
                    <Link to="/productos">
                        <h3>Cabello Dañado</h3>
                        <img src="/data/multimedia/cuadrado1.jpg" alt="Imagen"></img>
                    </Link>
                </div>

                <div className='div2'>
                    <Link to="/productos">
                        <h3>Cabello Seco</h3>
                        <img src="/data/multimedia/cuadrado2.jpg" alt="Imagen"></img>
                    </Link>
                </div>
                <div className='div3'>
                    <Link to="/productos">
                        <h3>Cabello Saludable</h3>
                        <img src="/data/multimedia/cuadrado3.jpg" alt="Imagen"></img>
                    </Link>
                </div>
            </section>
        </header>

    );

}

/* ------------------------------- EXPOTACIÓN ------------------------------- */
export default Home;