import React from 'react';
import { SiApple } from "react-icons/si";


export default function WatchHero3() {
  return (

   <section className='watch__hero__3'>

      <div className="watch__hero__title">

         <div className="watch__logo">
            <div>
               <SiApple size={24} />
               <h4>WATCH</h4>
            </div>
            <span className='se'>SE</span>
         </div>

         <h1>Para amar<br/> cada segundo.</h1>
         <p>A partir de R$ 283,25/mês ou R$ 3.399*.</p>

         <div className="buy__btn__div">
            <button>
               Comprar
            </button>
            <a href="#">Saiba mais &gt;</a>
         </div>

      </div>

   </section>

  )
}
