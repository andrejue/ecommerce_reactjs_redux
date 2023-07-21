import React from 'react';
import M2Logo from '../ipad/images/hero2/m2_chip__buj2soxeo91e_large.png';
import { Link } from 'react-router-dom';

export default function IpadHero2() {
  return (
    <section className='ipad__hero__2'>

         <div className="ipad__pro__title title__2">

            <span>Novo</span>
            <h1>iPad Pro</h1>

            <div className="m2__logo">
               <h4>Com a potência do</h4>
               <img src={M2Logo} alt="m2 logo" />
            </div>

            <p>
               A partir de R$ 816,58/mês<br/> ou R$ 9.799*
            </p>

            <div className="ipad__buy__btn">
               <Link to='/products/8'>
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
