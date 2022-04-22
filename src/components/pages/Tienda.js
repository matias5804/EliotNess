import React from 'react'
import { ItemListContainer } from '../itemListContainer/ItemListContainer.js'


const Tienda = () => {
  console.log(ItemListContainer);
  return (
    <div>
      <div className='fondoTienda'></div>
      <ItemListContainer/>
    </div>
  )
}

export default Tienda