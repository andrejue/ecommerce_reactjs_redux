import React from 'react';
import Logo4k from './images/hero2/apple_tv_4k_logo__vyjj7uki3tui_large.png';
import LogoApp from './images/hero2/home_icon__9u57pp0qahea_large.png';
import { Link } from 'react-router-dom';

export default function TvHero2() {
  return (
    <section className='tv__hero__2__container'>
      <div className="tv__hero__2__box1">
         <div className="tittle__box1">
            <img src={Logo4k} alt="" />
            <h3>Sua experiência Apple<br/> é coisa de cinema.</h3>
            <p>A partir de R$ 124,92/mês ou R$ 1.499*.</p>
            <div className="tv__buy__btn__hero2">
               <Link to='/products/17' ><button>Comprar</button></Link>
               <a href="#">Saiba mais &gt;</a>
            </div>
         </div>
      </div>

      <div className="tv__hero__2__box2">
         <div className="tittle__box2">
            <img src={LogoApp} alt="" />
            <h4>App Casa</h4>
            <h3>Onde a inteligência se sente em casa.</h3>
            <a href="#">Saiba mais &gt;</a>
         </div>
      </div>
   </section>
  )
}
