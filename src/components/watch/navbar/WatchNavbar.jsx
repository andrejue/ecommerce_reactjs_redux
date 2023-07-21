import React from 'react';
import watchultra from '../images/navbar/svgexport-29.svg';
import series8 from '../images/navbar/svgexport-30.svg';
import watchse from '../images/navbar/svgexport-31.svg';
import nike from '../images/navbar/svgexport-32.svg';
import compare from '../images/navbar/svgexport-33.svg';
import pulseiras from '../images/navbar/watch_nav_bands_large_.svg';
import airpods from '../images/navbar/svgexport-34.svg';
import acessorios from '../images/navbar/svgexport-35.svg';
import fitness from '../images/navbar/svgexport-33.svg';
import watchos from '../images/navbar/svgexport-33.svg';
import comprar from '../images/navbar/svgexport-33.svg';


export default function IpadNavbar() {
  return (

   <nav className="watch__navbar">
      <ul className='navbar__ul' id='navbar__ul'>
         <li>
            <img src={watchultra} alt="" />
            Apple Watch<br/> Ultra
         </li>
         <li>
            <img src={series8} alt="" />
            Apple Watch<br/> Series 8
         </li>
         <li>
            <img src={watchse} alt="" />
            Apple Watch<br/> SE
         </li>
         <li>
            <img src={nike} alt="" />
            Apple Watch<br/> Nike
         </li>
         <li>
            <img src={compare} alt="" />
            Comparar
         </li>
         <li>
            <img src={pulseiras} alt="" />
            Pulseiras
         </li>
         <li>
            <img src={airpods} alt="" />
            AirPods
         </li>
         <li>
            <img src={acessorios} alt="" />
            Acessórios
         </li>
         <li>
            <img src={fitness} alt="" />
            Fitness+
         </li>
         <li>
            <img src={watchos} alt="" />
            watchOS 10
            <span>Prévia</span>
         </li>
         <li>
            <img src={comprar} alt="" />
            Comprar<br/> Apple Watch
         </li>
      </ul>
 </nav>

  )
}
