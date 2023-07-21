import React from 'react';
import M2Logo from '../ipad/images/hero2/m2_chip__buj2soxeo91e_large.png';

export default function IpadHero2() {
  return (
    <section className='ipad__hero__2'>

         <div className="ipad__pro__title">

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
               <button>
                  Comprar
               </button>
               <a href="#">Saiba mais &gt;</a>
            </div>


         </div>

    </section>
  )
}
