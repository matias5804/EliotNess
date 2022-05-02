import React from 'react'
import lupuloContacto from '../../assets/img/icon/lupulo.png'
import trigo from '../../assets/img/icon/trigoNegro.png'
import fUno from '../../assets/img/pictures/fabricaUno.jpg'
import fDos from '../../assets/img/pictures/fabricaDos.jpg'
import fTres from '../../assets/img/pictures/fabricaTres.jpg'

const LaFabrica = () => {
  return (
    <div className='divFabrica'>
      <div className='tituloLaFabrica'>
        <h1>La Fábrica de Cerveza Artesanal</h1>
      </div>

      <div className='divDivFabrica'>
        <div className='divTxtFabrica'>
          <img src={lupuloContacto}  className="lupuloContacto" alt="lupulo"/>  
          <p>La cerveza artesanal es cada vez más apreciada, hoy en día existen muchas marcas locales de cerveza artesanal pero no todas elaboradas en una verdadera <strong>fábrica de cerveza artesanal</strong>.<br/>
          Donde se respeten las reglas del arte y las normas que permiten tipificarla.</p>
          <img className='trigo' src={trigo} alt='trigo'/>
          <h2>Fábrica de Cerveza <span>Eliot Ness</span></h2>
          <p>En nuestro país, las normas para la elaboración de alimentos están contenidas en el Código Alimentario Argentino. Estas normas son aplicadas por la ANMAT, Administración Nacional de Medicamentos, Alimentos y Tecnología Médica.</p>
          <p>Según este organismo, para que una cerveza sea considerada artesanal debe cumplir con requisitos como no utilizar aditivos alimentarios, usar únicamente ingredientes naturales y ser elaborada en forma manual o semimecánica.</p>
          <p>En nuestra fábrica de cerveza no solo respetamos las normas de la ANMAT sino que también respetamos las reglas del arte para la elaboración de cerveza artesanal conocida por todos los maestros cerveceros que logran fascinar a todo tipo de paladares. Si estas interesado en conocer nuestros productos no dudes en contactarte para organizar una degustación de nuestros productos en nuestra fabrica de cerveza artesanal ubicada en Zona Oeste de Buenos Aires.</p>
          <img src={lupuloContacto}  className="lupuloContacto" alt="lupulo"/>  
        </div>

        <div className='divImgFabrica'> 
          <img src={fUno} alt="imgFabrica"/>
          <img src={fDos} alt="imgFabrica"/>
          <img src={fTres} alt="imgFabrica"/>
        </div>
      </div>
    </div>
  )
}

export default LaFabrica