import React from 'react';
import "./styles/pages_all.css";
import "./styles/iphone.css";
import IphoneNavbar from '../components/iphone/navbar/IphoneNavbar';
import IphoneHero1 from '../components/iphone/IphoneHero1';
import IphoneHero2 from '../components/iphone/IphoneHero2';
import IphoneHero3 from '../components/iphone/IphoneHero3';
import { Helmet } from 'react-helmet';

export default function Iphone() {
  return (
    <div className='iphone main__container'>

      <Helmet>
        <title>iPhone - Apple (Chernobyl)</title>
      </Helmet>

      <IphoneNavbar />

      <div className="iphone__ribbon">
        <p>
        Pague seu novo iPhone em até 12 parcelas ou economize 10% nos pagamentos à vista.</p>
        <a href="#">
          Saiba mais &gt;
        </a>
      </div>

      <IphoneHero1 />
      <IphoneHero2 />
      <IphoneHero3 />

    </div>
  )
}
