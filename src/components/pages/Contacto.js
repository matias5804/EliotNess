import React from 'react'
import fotoContacto from '../../assets/img/pictures/fondoContacto.jpg'
import '../../scss/styles.scss'
import lupuloContacto from '../../assets/img/icon/lupulo.png'
import imgLupuloCTAUno from '../../assets/img/icon/lupuloCTAleft.png'
import imgLupuloCTADos from '../../assets/img/icon/lupuloCTAright.png'

const Contacto = () => {

  return (
    <div className='divGralContacto'>
      <div className='divTituloContacto'>
        <h1>Contacto</h1>
        <h3>- Estamos para atenderte -</h3>
      </div>
      <div className='divLupuloContacto'>
          <img className='lupulosLatContacto' src={imgLupuloCTAUno} alt='lupulo'/>
          <img className='lupulosLatContacto' src={imgLupuloCTADos} alt='lupulo'/>
        </div>
      <div>
        <div className='divInfoContacto'>
          <img src={lupuloContacto}  className="lupuloContacto" alt="lupulo"/>
          <div>
            <h2>ELIOT NESS</h2>
            <p><br></br>Somos una microcerveceria ubicada en Ciudadela, Zona Oeste de Gran Buenos Aires.<br/>
            Creemos en ayudarnos entre pequeñas empresas, por lo que tenemos ofertas especiales en venta de barriles de cerveza artesanal para bares, restaurantes.<br/> <br/>
            No dejes de consultarnos.<br/><br/>
            Delivery <strong>SIN CARGO</strong>  en: Ramos Mejía, Haedo, Ciudadela, Palomar, Caseros, Villa Luzuriaga.</p>
          </div>
          <img src={lupuloContacto}  className="lupuloContacto" alt="lupulo"/>

          <table>
            <caption>Horarios Fábrica</caption>
            <tr>
              <th>Lunes </th>
              <td>de 9:00hs a 19:00hs</td>
            </tr>
            <tr>
              <th>Martes</th>
              <td>de 9:00hs a 19:00hs</td>
            </tr>
            <tr>
              <th>Miercoles</th>
              <td>de 9:00hs a 19:00hs</td>
            </tr>
            <tr>
              <th>Jueves</th>
              <td>de 9:00hs a 19:00hs</td>
            </tr>
            <tr>
              <th>Viernes</th>
              <td>de 9:00hs a 19:00hs</td>
            </tr>
            <tr>
              <th>Sabados</th>
              <td>de 9:00hs a 16:00hs</td>
            </tr>
            <tr>
              <th>Domingos</th>
              <td>Cerrado</td>
            </tr>
          </table>

          <img src={lupuloContacto}  className="lupuloContacto" alt="lupulo"/>

        </div>
      </div>


      <div className="divContacto">

        <div className="divImgContacto">

          <img className='imgContacto'  src={fotoContacto} alt='foto contacto'/>

        </div>

        <div className="">
          <p className="textCompl">Complete el Formulario y nos comunicaremos a la brevedad.<br/> Muchas Gracias</p>

          <form className='form'>

            <input className="form-nombre" id="name" type="text" placeholder="Nombre" />

            <input className="form-email" id="emailAddress" type="email" placeholder="Direccion de Email" />                                                                   
            <textarea className="form-textarea" id="message" type="text" placeholder="Escriba su Consulta" ></textarea>

            <button className="btnForm" id="submitButton" type="submit">Enviar
            </button>

          </form>
        </div>

      </div>
      
      <div className='divMap'>
        
      </div>

    </div>
  )
}

export default Contacto