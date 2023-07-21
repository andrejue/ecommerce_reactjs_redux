import React from 'react';
import './styles/airpods.css';
import AirpodsNavbar from '../components/airpods/navbar/AirpodsNavbar';
import AirpodsHero1 from '../components/airpods/AirpodsHero1';
import AirpodsHero2 from '../components/airpods/AirpodsHero2';
import AirpodsHero3 from '../components/airpods/AirpodsHero3';
import AirpodsHero4 from '../components/airpods/AirpodsHero4';
import { Helmet } from 'react-helmet';

export default function Airpods() {
  return (
    <div className='airpods'>
      <Helmet>
        <title>Airpods - Apple (Chernobyl)</title>
      </Helmet>
      <AirpodsNavbar />

      <div className="watch__ribbon">
        <p>
         Seis meses de Apple Music na compra dos seus AirPods*.
        </p>

        <a href="#">
          Saiba mais &gt;
        </a>
      </div>

      <AirpodsHero1 />

      <AirpodsHero2 />

      <AirpodsHero3 />

      <AirpodsHero4 />

   </div>
  )
}
