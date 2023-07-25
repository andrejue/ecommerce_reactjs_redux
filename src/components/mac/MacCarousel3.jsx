import React from 'react';
import carouselData from './data/carouselMacData3';

export default function Swiper3() {

  return (

   <div className="carousel__container carousel__mac__hero__3">
      <div className="title">
        <h2>É melhor com o Mac. <span>Feito para se conectar com tudo o que é Apple.</span></h2>
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
