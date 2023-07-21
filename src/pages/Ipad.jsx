import React from 'react';
import './styles/ipad.css';
import IpadNavbar from '../components/ipad/navbar/IpadNavbar';
import IpadHero1 from '../components/ipad/IpadHero1';
import IpadHero2 from '../components/ipad/IpadHero2';
import IpadHero3 from '../components/ipad/IpadHero3';
import IpadHero4 from '../components/ipad/IpadHero4';
import { Helmet } from 'react-helmet';


export default function Ipad() {
  return (
    <div className='ipad main__ipad__container'>
      <Helmet>
        <title>iPad - Apple (Chernobyl)</title>
      </Helmet>

      <IpadNavbar />

      <div className="ipad__ribbon">
        <p>
        Pague seu novo iPad em até 12 parcelas ou economize 10% nos pagamentos à vista.</p>
        <a href="#">
          Saiba mais &gt;
        </a>
      </div>

      <IpadHero1 />

      <IpadHero2 />

      <IpadHero3 />

      <IpadHero4 />

    </div>
  )
}
