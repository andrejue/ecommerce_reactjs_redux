import React from 'react'
import { Link } from 'react-router-dom';

export default function IphoneHero2() {
  return (

   <section className='iphone__hero__2'>

      <div className="iphone__hero__title">

         <h4>iPhone 14 Pro</h4>
         <h1>Pro. E além.</h1>
         <p>A partir de R$ 791,58/mês ou R$ 9.499*</p>

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
