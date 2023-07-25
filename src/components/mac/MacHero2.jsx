import React from 'react';
import carouselData from './data/heroMacData2';

export default function Hero2() {

  return (

   <div className="carousel__container carousel__mac__hero__2">
      <div className="title">
        <h2>Lojas especiais. <span>Preços exclusivos para estudantes, educadores e empresas.</span></h2>
      </div>
      <div className="carousel">
         {carouselData.map((slide) => (
         <div key={slide.id}>
            <div className={slide.dark ? 'carousel__item item__dark' : 'carousel__item'}
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
