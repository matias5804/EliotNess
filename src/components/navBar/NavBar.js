import React from 'react'
import '../../scss/styles.scss'
import Brand from '../../assets/img/icon/brandH.png'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import brandMenuAbierto from '../../assets/img/icon/brandMenuAbierto.png'
import Contacto from '../pages/Contacto.js'
import LaFabrica from '../pages/LaFabrica'
import Delivery from '../pages/Delivery'
import Tienda from '../pages/Tienda'


const NavBar = () => {
  return (
    <div className='header content-web'>
      <div className="divBrandBurguer">
        <div className='divVacio'></div>

        <div className="divVacio vacioDos">
          <div className='iconNav iconUno'></div>
          <div className='iconNav iconDos'></div>
        </div>

        <div>
          <Link to={<Home/>}>
            <img src={Brand} className="brand" alt="brand"/>
          </Link>
        </div>

        <div className="divVacio vacioUno">
          <div className='iconNav iconTres'></div>
          <div className='iconNav iconCuatro'></div>
        </div>

        <label  className="icon-menu" for="btn-menu"><div className="divBurguer"></div> </label>
      </div>

      <input type="checkbox" id="btn-menu"></input>

      <div className="container-menu">
        <div className="cont-menu">
          <nav className="navLinks nav-Menu">
            <Link className="linkMenu" to ="/" element={<Home/>}>Home</Link>     
            <Link className="linkMenu" to ="../pages/Tienda" element={<Tienda/>}>Tienda</Link>   
            <Link className="linkMenu" to ="../pages/Delivery" element={<Delivery/>}>Delivery</Link>     
            <Link className="linkMenu" to ="../pages/LaFabrica" element={<LaFabrica/>}>La Fabrica</Link>      
            <Link className="linkMenu"  to ="../pages/Contacto" element={<Contacto/>}>Contacto</Link>      
          </nav>
          <label for="btn-menu" className="icon-equis"><div className="divBurguerClose"></div></label>
          <img src={brandMenuAbierto} alt="brandMenuAbierto" className="imgBrandAbierto openMenu"/>
        </div> 
      </div>
    </div> 
  )
}

export default NavBar

