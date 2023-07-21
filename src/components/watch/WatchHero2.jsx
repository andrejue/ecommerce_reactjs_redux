import React from 'react';
import { SiApple } from "react-icons/si";


export default function WatchHero2() {
  return (

   <section className='watch__hero__2'>

      <div className="watch__hero__title">

         <div className="watch__logo">
            <div>
               <SiApple size={24} />
               <h4>WATCH</h4>
            </div>
            <span className='series__8'>SERIES 8</span>
         </div>

         <h1>Um grande salto<br/> para sua saúde.</h1>
         <p>A partir de R$ 441,58/mês ou R$ 5.299*.</p>

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
