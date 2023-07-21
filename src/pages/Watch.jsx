import React from 'react';
import './styles/watch.css';
import Navbar from '../components/watch/navbar/WatchNavbar';
import WatchHero1 from '../components/watch/WatchHero1';
import WatchHero2 from '../components/watch/WatchHero2';
import WatchHero3 from '../components/watch/WatchHero3';
import { Helmet } from 'react-helmet';

export default function Watch() {

  return (
    <div className='watch main__watch__container'>
      <Helmet>
        <title>Watch - Apple (Chernobyl)</title>
      </Helmet>

      <Navbar />

      <div className="watch__ribbon">
        <p>
         Pague seu novo Apple Watch em até 12 parcelas ou economize 10% nos pagamentos à vista.
        </p>

        <a href="#">
          Saiba mais &gt;
        </a>
      </div>

      <WatchHero1 />

      <WatchHero2 />

      <WatchHero3 />

    </div>

  )
}
