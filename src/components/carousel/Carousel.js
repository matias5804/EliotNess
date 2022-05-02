import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import  "./carouselUno.css"
import imgIpa from  '../../assets/img/products/ipa.png'
import imgDIpa from  '../../assets/img/products/dobleIpa.png'
import imgAmBlonde from  '../../assets/img/products/amBlonde.png'
import imgGolden from  '../../assets/img/products/golden.png'
import imgHoney from  '../../assets/img/products/honey.png'
import imgApa from  '../../assets/img/products/apa.png'
import imgirishRed from  '../../assets/img/products/irishRed.png'
import imgTntIpa from  '../../assets/img/products/tntIpa.png'
import 'swiper/css/navigation';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Navigation } from "swiper";


const Carousel = () => {
  return (
    <div className="divSwiper">
    <Swiper
      // install Swiper modules
      modules={[Navigation ]}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      breakpoints={{
          spaceBetween:10,
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween:10,
        },

        1024: {  
            slidesPerView: 3,
            spaceBetween:10,
        },
      }}
   
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiperUno"  
      id='swiperUno'  > 

        <SwiperSlide className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgIpa} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>IPA</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgDIpa} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>DOBLE IPA</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgTntIpa} alt='IpaTnt'/> 
                </div>
                <div className='divPSlider'>
                    <h3>IPA TNT</h3> 
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide  className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgGolden} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>GOLDEN</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgirishRed} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>IRISH RED</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgAmBlonde} alt='blonde'/> 
                </div>
                <div className='divPSlider'>
                    <h3>AMBAR BLONDE</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgHoney} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>HONEY</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='mySwiperCerveza'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgApa} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>APA</h3> 
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Carousel