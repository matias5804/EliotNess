import React from 'react'
import '../../scss/styles.scss'
import vasoMano from '../../assets/img/pictures/vasoMano.png'
import CarouselDos from '../carousel/CarouselDos'
import CarouselTres from '../carousel/CarouselTres'
import trigo from '../../assets/img/icon/trigoNegro.png'
import trigoNaranja from '../../assets/img/icon/trigoNaranja.png'

const SectionTwo = () => {
  return (
    <div class  Name='divSectionSDos'>
      <div className='divSectionUnoSDos'>
        <div className='divImgSectionSDos'></div>

        <div className='divDivSectionSDos'>
          <div className='divDivSectionInfoSDos'>
            <h1>Comienza a vender Cerveza<br/>
                Ofertas para bares y restaurantes
            </h1>
            <p>Si tienes un bar, restaurant o algún tipo de negocio y quieres comenzar a vender cerveza Eliot Ness, puedes contactarnos para programar una degustación de nuestras variedades.
            </p>    
          </div>

          <div className='divDivSectionBtnSDos'>
            <button>Contacto</button>
          </div>
          
          <img className='imgSectionUnoSDos' src={vasoMano} alt='imagen vaso'/>
        </div>
      </div>

      <div className='divSectionDosSDos'>
        <div className='divTitleSectionDosSDos'>
          <img className='trigo' src={trigo} alt='trigo'/>
          <h1>¿Dónde Comprar?</h1>
          <h3>Compartí unas pintas, chops, tanques o cañas con tus amigxs recorriendo los bares y cervecerías que ofrecen nuestra cerveza.</h3>
        </div>
        <CarouselDos/>
      </div>

      <div className='divSectionTresSDos'>
        <div className='divDivSectionTresSDos'>
          <img className='trigo' src={trigoNaranja} alt='trigo'/>
          <h1>¿Qué dicen nuestros clientes?</h1>
        </div>
        <CarouselTres/>
      </div>
    </div>
  )
}

export default SectionTwo