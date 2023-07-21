import React from 'react';
import carouselData from './data/carouselMacData2';

export default function Swiper2() {

  return (

   <div className="carousel__container">
      <div className="title">
        <h2>Configuração e suporte. <span>Nossos especialistas podem ajudar.</span></h2>
      </div>
      <div className="carousel">
         {carouselData.map((slide) => (
         <div key={slide.id}>
            <div className='carousel__item carousel__item__2'
               style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'}}>
               <p className='item__name'>{slide.name}</p>
               <h3>{slide.title}</h3>
            </div>
         </div>
         ))}
      </div>
   </div>

  )
}
