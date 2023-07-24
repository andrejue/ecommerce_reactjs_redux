import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import carouselData from './data/carouselMacData1';
import { Link } from 'react-router-dom';

export default function Swiper1() {

   const slider = useRef(null);

   const PrevArrow = (props) => (
      <div className="slide__btn">
         <button onClick={() => slider?.current?.slickPrev()}className="custom-prev-arrow">
            <FaChevronCircleLeft />
         </button>
      </div>
      );

      const NextArrow = (props) => (
      <div className="slide__btn">
         <button onClick={() => slider?.current?.slickNext()}className="custom-next-arrow">
            <FaChevronCircleRight />
         </button>
      </div>
      );

   const settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
   };

   const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
      };

   const shuffledItems = shuffleArray([...carouselData]);


  return (

   <div className='allproducts__carousel__container carousel__container'>
      <Slider ref={slider} {...settings} className="carousel">
         {shuffledItems.map((slide) => (
         <div key={slide.id}>
            <div className={slide.dark ? 'carousel__item item__dark' : 'carousel__item'}
               >
               <div className="item__title">
                  <h2>{slide.title}</h2>
               </div>
               <img src={slide.img} alt="Product" />
               <div className="item__buy__btn">
                  <p>A partir de R$ {slide.p}</p>
                  <Link to={`/products/${slide.id}`}>
                     <button className='buy__btn'>
                        Comprar
                     </button>
                  </Link>
               </div>
            </div>
         </div>
         ))}
      </Slider>
      <PrevArrow />
      <NextArrow />

    </div>
  )
}
