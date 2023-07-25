import React from 'react';
import { Link } from 'react-router-dom';

export default function IphoneHero1() {
  return (

   <section className='iphone__hero__1'>

      <div className="iphone__hero__title">

         <span>Novo</span>
         <h4>iPhone 14</h4>
         <h1>Maravilindo.</h1>
         <p>A partir de R$ 633,25/mês ou R$ 7.599*</p>

         <div className="buy__btn__div">
            <Link to='products/9'>
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
