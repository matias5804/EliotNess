import React from 'react'
import '../../scss/styles.scss'
import barrilesCerveza from '../../assets/img/pictures/barrilesCerveza.png'
import barril from '../../assets/img/icon/barril.png'
import imgMolienda from '../../assets/img/pictures/molienda.png'
import imgFiltrado from '../../assets/img/pictures/filtrado.png'
import imgFermentacion from '../../assets/img/pictures/fermentacion.png'
import imgEmbotellado from '../../assets/img/pictures/barrilesCervezaDos.png'
import trigo from '../../assets/img/icon/trigoNegro.png'
import chopera from '../../assets/img/pictures/choperaMaori.jpg'

const SectionOne = () => {
  return (
    <div className='divSection'>
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

        <div className='divSectionTres'>
            <div className='divDivSectionInfo'>
                <img className='trigo' src={trigo} alt='trigo'/>
                <h1>Fabrica de Cerveza Artesanal<br/>
                    <span>Eliot Ness</span>
                </h1>
                <p>Nuestra fábrica de cerveza artesanal utiliza tecnología clásicade cerveza individual, teniendo en cuenta los deseos de nuestros consumidores. Practicamos la innovacíon para traerles constantes novedades.
                </p>    
            </div>

            <div className='divSectionFabrica'>
                <div className='divEtapaFabrica'>
                    <div className='circulo'></div>
                    <img src={imgMolienda} alt=''/>
                    <h3>Molienda</h3>
                    <p>Contamos con un equipo que se dedica a la búsqueda y selección de Maltas y Cereales de alta calidad.</p>
                </div>

                <div className='divEtapaFabrica'>
                    <div className='circulo'></div>
                    <img src={imgFiltrado} alt=''/>
                    <h3>Filtración y ebullición</h3>
                    <p>Realizamos el proceso tradicional de filtración - ebullición - filtración para obtener resultados óptimos en la calidad de las cervezas.</p>
                </div>

                <div className='divEtapaFabrica'>
                    <div className='circulo'></div>
                    <img src={imgFermentacion} alt=''/>
                    <h3>Fermentación y enfriamiento</h3>
                    <p>Contamos con una gran cantidad de equipos para poder tomarnos todo el tiempo necesario en esta etapa fundamental del proceso.</p>
                </div>
                
                <div className='divEtapaFabrica'>
                    <div className='circulo'></div>
                    <img src={imgEmbotellado} alt=''/>
                    <h3>Embotellado</h3>
                    <p>Ofrecemos todas nuestras variedades de Cervezas en Barriles de 50, 30 y 20lts. Botellas plásticas de 1 litro.</p>
                </div>
            </div>

            <img className='trigo trigoDown' src={trigo} alt='trigo'/>
        </div>
    </div>
  )
}

export default SectionOne