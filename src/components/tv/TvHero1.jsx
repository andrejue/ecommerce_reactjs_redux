import React from 'react';
import Banner from './images/hero1/hero_tv__d8nngabrofue_large.png';
import Tv from './images/hero1/hero_appletv_lockup__ecxlvf764zu6_large.jpg';

export default function TvHero1() {
  return (
    <section className='tv__hero__1__container'>
      <div className="tv__banner">
        
      </div>
      <div className="tv__hero__img">
        <img src={Tv} alt="Apple TV+" />
      </div>
      <div className="tv__title">
        <h2>Convide o futuro para <br />entrar na sua casa.</h2>
        <p>Conecte seus aparelhos favoritos e transforme sua casa em um lar inteligente, prático e cheio de entretenimento. Controle as luzes com o iPhone, ouça música na TV e veja filmes com som e imagem de cinema. Tudo isso com a segurança e a privacidade que só a Apple oferece.</p>
      </div>
    </section>
  )
}
