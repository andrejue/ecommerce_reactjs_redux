import React from 'react';
import AirpodsMax from '../airpods/images/hero4/airpods_max__f265q4g4ddym_large.png';

export default function AirpodsHero4() {
  return (

    <section className='airpods__hero__1 airpods__hero__2 airpods__hero__3 airpods__hero__4'>

      <div className="airpods__hero__1__content airpods__hero__2__content airpods__hero__3__content airpods__hero__4__content">
         <div>
            <div className="airpods__hero1__title airpods__hero2__title airpods__hero4__title">

               <p>
                  A partir de<br /> R$ 549,17/mês<br/> ou R$ 6.590*.
               </p>
            </div>
            <div className="airpods__buttons airpods__buttons__hero2">
               <button>Comprar</button>
               <a href="#">Saiba mais &gt;</a>
            </div>
         </div>
      </div>
      <div className="airpods__max__img">
         <img src={AirpodsMax} alt="air pods max" />
      </div>

    </section>

  )
}
