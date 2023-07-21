import React, { useRef } from 'react';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import carouselData from './data/carouselMacData1';
import { Link } from 'react-router-dom';

export default function Swiper1() {

   const carousel = useRef(null)

   const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth * 0.24;
   }

   const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth * 0.24;
   }

  return (

   <div className="carousel__container">
      <div className="title">
        <h2>Todos os modelos. <span>Escolha o seu.</span></h2>
      </div>
      <div className="carousel" ref={carousel}>
         {carouselData.map((slide) => (
         <div key={slide.id}>

               <div className='carousel__item'>
                  <h3>{slide.title}</h3>
                  <img src={slide.img} alt="Product" />
                  <div className="price">
                     <p>{slide.p}</p>
                     <Link className='buy__btn' to={`/products/${slide.id}`}>
                        Comprar
                     </Link>
                  </div>
               </div>

         </div>
         ))}
      </div>

      <button className='scroll__btn btn_1' onClick={handleLeftClick}>
         <FaChevronCircleLeft size={52} className='chevron chevron__left'/>
      </button>

      <button className='scroll__btn btn_2' onClick={handleRightClick}>
         <FaChevronCircleRight size={52} className='chevron chevron__right'/>
      </button>


   </div>
  )
}
