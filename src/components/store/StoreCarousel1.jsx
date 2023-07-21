import React, { useRef } from 'react';
import '../styles/storeCarousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import carouselData from './data/carousel1Data';

export default function Swiper1() {

   const width = document.body.offsetWidth;

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

  return (

   <div className="carousel__container">
      <div className="title">
        <h2 className='carousel__1'>As novidades. <span>Veja o que acabou de chegar.</span></h2>
      </div>
      <Slider ref={slider} {...settings} className="carousel">
         {carouselData.map((slide) => (
         <div key={slide.id}>
            <div className={slide.dark ? 'carousel__item item__dark' : 'carousel__item'}
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
      </Slider>
      <PrevArrow />
      <NextArrow />

      {/* <button className='scroll__btn btn_1' onClick={handleLeftClick}>
         <FaChevronCircleLeft size={52} className='chevron chevron__left'/>
      </button>

      <button className='scroll__btn btn_2' onClick={handleRightClick}>
         <FaChevronCircleRight size={52} className='chevron chevron__right'/>
      </button> */}

   </div>
  )
}
