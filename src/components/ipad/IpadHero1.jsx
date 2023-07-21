import React from 'react';
import { GoPlay } from 'react-icons/go';

export default function IpadHero1() {
  return (

    <section className='ipad__hero__1'>

      <div className="ipad__hero__img1">

      </div>

      <div className="ipad__hero__title">

        <p>Apresentamos</p>
        <h1>Final Cut Pro<br/> e Logic Pro<br/> para iPad.</h1>
        <div className="know__more">
          <a href="#">Saiba mais sobre o Final Cut Pro para iPad &gt;</a>
          <a href="#">Saiba mais sobre o Logic Pro para iPad &gt;</a>
        </div>
        <div className="play__svg">
          <a href="#">
            Assistir vídeo (em inglês)
          </a>
          <GoPlay size={20} color='06c' />
        </div>

      </div>

      <div className="ipad__hero__img2">

      </div>
      
    </section>
  )
}
