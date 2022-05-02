import React from 'react';
import imgloading from '../../assets/img/icon/brandMenuAbierto.png'

const Loader = () => {
  return <div className='loader'>
      <img src={imgloading} alt="loading"/>
  </div>;
};

export default Loader;
