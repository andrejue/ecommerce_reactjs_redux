import React from 'react';
import { Link } from 'react-router-dom';

export default function IpadHero2() {
  return (
    <section className='ipad__hero__2 ipad__hero__3'>

         <div className="ipad__pro__title">

            <span>Novo</span>
            <h1>iPad</h1>

            <div className="m2__logo">
               <h4>Inspira. Desenha.<br/> Diverte.</h4>
            </div>

            <p>
               A partir de R$ 816,58/mês<br/> ou R$ 9.799*
            </p>

            <div className="ipad__buy__btn">
               <Link to='/products/7'>
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
