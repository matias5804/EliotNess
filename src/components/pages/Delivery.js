import React from 'react'
import '../../scss/styles.scss'
import cerveza from'../../assets/img/pictures/homeCerveza.png'
import { Link } from 'react-router-dom'
import Tienda from './Tienda'
import Variedades from '../variedades/Variedades'
import Carousel from '../carousel/Carousel'


import imgLupuloCTAUno from '../../assets/img/icon/lupuloCTAleft.png'
import imgLupuloCTADos from '../../assets/img/icon/lupuloCTAright.png'
import pUno from '../../assets/img/pictures/deliveryPromo.webp'
import pDos from '../../assets/img/pictures/deliveryPromoDos.webp'
import pTres from '../../assets/img/pictures/deliveryPromoTres.webp'
import barrilesCerveza from '../../assets/img/pictures/barrilesCerveza.png'
import barril from '../../assets/img/icon/barril.png'

import trigo from '../../assets/img/icon/trigoNegro.png'
import chopera from '../../assets/img/pictures/choperaMaori.jpg'
import CarouselDos from '../carousel/CarouselDos'

const Delivery = () => {
  return (
    <div>
      <div className='fondoUno'>
        <div className='divCta' >
          <h1>Delivery<br/><span>Eliot Ness</span></h1>
          <h4>Microcerveceria y distribuidora de cerveza artesanal Eliot Ness.</h4>
          <p>Producimos 9 variedades de cervezas artesanales, con aromas exclusivos.<br/>
          Ofertas para almacenes, bares y restaurantes.<br/>
          Servicio de Alquiler de Choperas de Cerveza Artesanal.</p>
        </div>

        <div className='divImgBtnCta'>
          <img src={cerveza} className="cervezaCTA" alt='cerveza'/>
          <div className='divBtnCta'>
            <Link to={<Tienda/>}>Comprar</Link>
            <Link to="">Variedades</Link>
            
          </div>
        </div>

        <div className='divLupuloCTA'>
          <img className='lupuloCTA' src={imgLupuloCTAUno} alt='lupulo'/>
          <img className='lupuloCTA' src={imgLupuloCTADos} alt='lupulo'/>
        </div>
      </div>


      <div className='fondoDos variedades'>
        <Variedades/>
        <Carousel/>
        <div className='divImgDeliveryPromos'> 
          <img src={pUno} alt="imgFabrica"/>
          <img src={pDos} alt="imgFabrica"/>
          <img src={pTres} alt="imgFabrica"/>
        </div>

        <div className='divSection divSectionDelivery'>
          <div className='divSectionUno'>
              

              <div className='divImgSection'>
                  <img src={chopera} alt='chopera'/>
              </div>

              <div className='divDivSection'>
                  <div className='divDivSectionInfo'>
                      <h1>Alquiler de Choperas <br/>
                          <span>Cerveza Artesanal</span>
                      </h1>
                      <p>Alquiler de Choperas de Cerveza Artesanal para tu evento o fiesta! Barriles de 50, 30, 20 y 10lts. Sistema con canillas de acero o Canilla Americana (manguera plástica). Disfruta de cualquiera de nuestros estilos en tu evento.</p>    

                      <p>¿Que esperas para hacer tu reserva?</p>
                  </div>                
                  <div className='divDivSectionBtn'>
                      <button> Más Info</button>
                      <button>Contacto</button>
                  </div>
                  <img className='imgSectionUno' src={barrilesCerveza} alt=''/>
              </div>
          </div>

          <div className='divSectionDos'>
              <div>
                  <img src={barril} alt=''/>
                  <h2>
                      +10.000 <br/>
                      <span>LTs/Mensuales</span>
                  </h2>
              </div>
              <div className='divPedirCerveza'>
                  <p> Desde 2017, nuestros cerveceros han desarrollado y mejorado <span>7 exquisitas receras de cerveza artesanal</span>, que vienen satifaciendo el paladar de nuestros clientes.</p>
                  <button>Pedir Cerveza</button>
              </div>
          </div>

          <div className='divSectionTres sectionTresDelivery'>
            <div className='divSectionDosSDos'>
              <div className='divTitleSectionDosSDos'>
                <img className='trigo' src={trigo} alt='trigo'/>
                <h1>¿Dónde Comprar?</h1>
                <h3>Compartí unas pintas, chops, tanques o cañas con tus amigxs recorriendo los bares y cervecerías que ofrecen nuestra cerveza.</h3>
              </div>
              <CarouselDos/>
            </div>


          </div>
        </div>
      </div>
    </div>

  )
}

export default Delivery