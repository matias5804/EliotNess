// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import iconScumm from'../../assets/img/icon/iconScumm.png'
import iconClubDetroit from '../../assets/img/icon/iconDetroit.png'
import iconWhoBar from '../../assets/img/icon/whoBar.png'
import iconEliotNessFood from '../../assets/img/icon/iconEliotFoodCirculo.png'
import iconLaUltima from '../../assets/img/icon/iconLaUltima.png'
import iconLikeCoffee from '../../assets/img/icon/iconLikeCoffee.png'
import iconDonato from '../../assets/img/icon/iconDonatto.png'
import iconBarDeFondo from '../../assets/img/icon/iconBarDeFondoCirculo.png'
import iconCJCity from '../../assets/img/icon/iconCJCity.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./carouselDos.css";
// import required modules
import { Grid, Navigation } from "swiper";

const CarouselDos = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                grid={{
                rows: 2,
                }}
                navigation
                spaceBetween={30}
                breakpoints={{
                    768: {
                        width: 768,
                        slidesPerView: 2,
                        grid:{
                            rows: 2,
                        }
                    },
                    // when window width is >= 768px
                }}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                modules={[Grid, Navigation]}
                className="SwiperDosDos"
            >
                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconScumm} alt='Scumm'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Scumm bar</h3>
                            <h4>Av.Pres. Perón 1598 <br/>
                                Haedo, Buenos Aires<br/>
                                +54 11 5290-5292
                            </h4> 
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconClubDetroit} alt='Detroit'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Club Detroit</h3>
                            <h4>Av. Rivadavia 17558<br/>
                                Morón, Buenos Aires
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>

                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconWhoBar} alt='WhorBar'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Who Bar</h3>
                            <h4>Av. Elcano 3055 <br/>
                                CABA<br/>
                                +54 11 3476-3806
                            </h4> 
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconEliotNessFood} alt='eliot'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Eliot Ness Food</h3>
                            <h4>Av. Dr. Ignacio Arieta 777 <br/>
                                Villa Luzuriaga, Buenos Aires<br/>
                                +54 11 4027-4919
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>

                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconLaUltima} alt='laUltima'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Cerveceria La Ultima </h3>
                            <h4>Av. Boulevar San Martin 3127<br/> 
                                Ciudad Jardin, Buenos Aires
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>
            
                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconLikeCoffee} alt='like'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Like Coffee And Beer</h3>
                            <h4>Av. Independencia 295  <br/>
                                Morón, Buenos Aires
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>

                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconDonato} alt='Donato'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Donatto's Resto Bar</h3>
                            <h4>Av. Donato Álvarez 587 <br/>
                                CABA<br/>
                                +54 11 5634-2507
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>

                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconBarDeFondo} alt='Bar de Fondo'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>Bar de Fondo</h3>
                            <h4>Av. Julian Álvarez 1200 <br/>
                                CABA<br/>
                                +54 11 3009-5795
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>
            
                <SwiperSlide>
                    <div className='divCardSliderDos'>
                        <div className='divImgInfo'>
                            <img src={iconCJCity} alt='City'/> 
                        </div>
                        <div className='divPSliderDos'>
                            <h3>CJ City</h3>
                            <h4>Av. De las Rosas 6390<br/>
                                Ciudad Jardin, Buenos Aires
                            </h4> 
                        </div>
                    </div>    
                </SwiperSlide>
            </Swiper>
        </>
      );
    }

export default CarouselDos