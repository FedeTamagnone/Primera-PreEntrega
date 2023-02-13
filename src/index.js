// MODULOS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ESTILOS
import './index.css';
//ESTILOS BOOSTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTES
//import App from './App';
import CartProdiver from './context/CartContex.js';


import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import Footer from './components/footer/Footer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import NavBar from './components/navbar/NavBar.js';

//IMPORT NAVBAR
import Home from './components/home/Home.js';
import AboutUs from './components/aboutUs/AboutUs.js';
import Info from './components/info/Info.js';
import Cart  from './components/cart/Cart';

// WEBVITALS
import reportWebVitals from './reportWebVitals';


/* --------------------------------- LÓGICA --------------------------------- */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <CartProdiver>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/productos" element={<ItemListContainer greeting="Estamos en el directorio" />} />
                    <Route exact path="/productos/:tipo" element={<ItemListContainer greeting="Estamos en el directorio" />} />
                    <Route exact path="/producto/:productoId" element={<ItemDetailContainer />} />
                    <Route exact path="/informacion" element={<Info />} />
                    <Route exact path="/nosotros" element={<AboutUs />} />
                    <Route exact path="/carrito" element={<Cart/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProdiver>
        
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
