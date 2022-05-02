import React from 'react'
import iconTelefono from  '../../assets/img/icon/phone.png'
import iconLocation from  '../../assets/img/icon/location.png'
import brand from '../../assets/img/icon/brandH.png'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='divBrandPFooter'>
          <img src={brand} alt='brand'/>
          <p>
            Somos un grupo de cerveceros de Zona Oeste, Gran Buenos Aires y estamos enfocados en fabricar cerveza artesanal de calidad. Así que nunca faltara dedicación y precisión en cada vaso de Cerveza Eliot Ness porque amamos este proceso.
          </p>
        </div>

        <div className='divInfoFooter'>
          <h2>Informacion de Contacto</h2>

          <div className='divImgsTxtsFooter'>
            <div className='divImgTxtFooter'>
              <img src={iconLocation} alt='ubicacion'/>
              <h4>Dirección Fabrica Cerveza:<br/>
                  <span>Tres Lomas 455, Ciudadela <br/>
                        Buenos Aires.</span></h4>
            </div>

            <div className='divImgTxtFooter'>
              <img src={iconLocation} alt='ubicacion'/>
              <h4>Dirección Bar:<br/>
                  <span>Arieta 777, Villa Luzuriaga <br/>
                        Buenos Aires.</span></h4>
            </div>

            <div className='divImgTxtFooter'>
              <img src={iconTelefono} alt='telefono'/>
              <h4>Teléfono:<br/>
                <span>+43 11 3317-6448</span></h4>
            </div>
          </div>
        </div>

        <div>
          <ul className='ulFooter'>            
            <li>Mi Cuenta</li>
            <li>Carrito</li>
            <li>Ckeckout</li>
            <li>Terminos y Condiciones</li>
          </ul>

          <div className='divRedesFooter'>
            <div>
              <div className='iconNav iconUno'></div>
              <div className='iconNav iconDos'></div>
            </div>
            <p>Distribuidores de Cerveza Artesanal</p>
          </div>
        </div>
      </div>

      <div className='divDerechos'>
        <p>Construido por Matias Alonso Pisani - Todos los derechos reservados 2022</p>  
      </div>

      {/*/boton whatsApp modo fixd , te envia directoi al chat con una pestaña nueva/*/}
      <a className='fixed-whatsapp' href="https://api.whatsapp.com/send?phone=541133554248'">
      </a>
    </>
  )
}

export default Footer