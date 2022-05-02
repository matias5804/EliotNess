import React from 'react';
import './scss/styles.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from "./components/navBar/NavBar";
import Footer from './components/footer/Footer';
import LaFabrica from './components/pages/LaFabrica';
import Contacto from './components/pages/Contacto';
import Cart from './components/cart/Cart';
import Delivery from './components/pages/Delivery';
import Home from './components/pages/Home';
import Tienda from './components/pages/Tienda';

function App () {
  return  (
      <BrowserRouter>
        <NavBar/>
        <Routes> 
        <Route path="/" element={<Home greeting={'HOME'} />} />
          <Route path="/pages/LaFabrica" element={<LaFabrica/>}/>
          <Route path="/pages/Contacto" element={<Contacto/>}/>
          <Route path="/cart/Cart" element={<Cart/>}/>
          <Route path="/pages/Tienda" element={<Tienda/>}/>
          <Route path="/pages/Delivery" element={<Delivery/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );

};

export default App