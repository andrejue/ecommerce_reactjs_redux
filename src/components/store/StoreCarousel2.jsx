import React from 'react';
import '../styles/storeCarousel.css';
import '../styles/storeCarousel2.css';
import carouselData from './data/carousel2Data';

export default function Swiper2() {

  return (

   <div className="carousel__container carousel__container__2">
      <div className="title">
        <h2>É melhor com a Apple. <span>Faça ainda mais com os produtos e serviços Apple.</span></h2>
      </div>
      <div className="carousel">
         {carouselData.map((slide) => (
         <div key={slide.id}>
            <div className={slide.dark ? 'carousel__item__2 carousel__item item__dark' : 'carousel__item'}
               style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'}}>
               <p className='item__name'>{slide.name}</p>
               <h3>{slide.h3}</h3>
               <p>{slide.p}</p>
            </div>
         </div>
         ))}
      </div>
   </div>

  )
}
