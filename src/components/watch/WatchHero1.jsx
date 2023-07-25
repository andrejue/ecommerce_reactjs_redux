import React from 'react';
import Logo from './images/hero1/svgexport-3.svg';
import { Link } from 'react-router-dom';


export default function WatchHero1() {
  return (

   <section className='watch__hero__1'>

      <div className="watch__hero__title">

         <div className="watch__logo">
            <div>
               <img src={Logo} alt="" />
               <h4>WATCH</h4>
            </div>
            <span className='ultra'>ULTRA</span>
         </div>

         <h1>A aventura te espera.</h1>
         <p>A partir de R$ 858,25/mês ou R$ 10.299*.</p>

         <div className="buy__btn__div">
            <Link to='/products/12'>
               <button>
                  Comprar
               </button>
            </Link>
            <a href="#">Saiba mais &gt;</a>
         </div>

      </div>

   </section>

  )
}
