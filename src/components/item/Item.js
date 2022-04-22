import React from 'react'
import { Link } from 'react-router-dom'


const Item = (item) => {

  const {name, image } = item
  console.log(image);

  return (
    <div className='card'>
      <Link to={(`${item.id}`)}className='div_imgCard'>  
        <div className='divImgCard'>
            <img src={image} alt={name} className='imgCard'/>
        </div>
      </Link> 

      <div className='divProPreBot'>
        <h3 className="tituloCard">{item.name}</h3>
        <p className="precioCard">$ <span>{item.price}</span></p>
        <Link to={(`${item.id}`)}className='div_imgCard'>  
            <button className="btnComprarCard">
                - Ver Artículo -
            </button>
        </Link>
      </div>
    </div>

  )
}

export default Item