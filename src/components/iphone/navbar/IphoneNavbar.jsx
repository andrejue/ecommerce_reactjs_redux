import React from 'react';
import iphone14pro from '../images/navbar/svgexport-29.svg';
import iphone14 from '../images/navbar/svgexport-30.svg';
import iphone13 from '../images/navbar/svgexport-31.svg';
import iphonese from '../images/navbar/iphone_se_large_.svg';
import iphone12 from '../images/navbar/svgexport-32.svg';
import comparar from '../images/navbar/svgexport-33.svg';
import airpods from '../images/navbar/svgexport-34.svg';
import airtag from '../images/navbar/svgexport-35.svg';
import acessorios from '../images/navbar/svgexport-36.svg';
import ios17 from '../images/navbar/svgexport-37.svg';
import comprar from '../images/navbar/svgexport-38.svg';

export default function IphoneNavbar() {
  return (
   <nav className="iphone__navbar">
      <ul>
         <li>
            <img src={iphone14pro} alt="" />
            iPhone 14 Pro
            <span>Novo</span>
         </li>
         <li>
            <img src={iphone14} alt="" />
            iPhone 14
            <span>Novo</span>
         </li>
         <li>
            <img src={iphone13} alt="" />
            iPhone 13
         </li>
         <li>
            <img src={iphonese} alt="" />
            iPhone SE
         </li>
         <li>
            <img src={iphone12} alt="" />
            iPhone 12
         </li>
         <li>
            <img src={comparar} alt="" />
            Comparar
         </li>
         <li>
            <img src={airpods} alt="" />
            AirPods
         </li>
         <li>
            <img src={airtag} alt="" />
            AirTag
         </li>
         <li>
            <img src={acessorios} alt="" />
            Acessórios
         </li>
         <li>
            <img src={ios17} alt="" />
            iOS 17
            <span>Prévia</span>
         </li>
         <li>
            <img src={comprar} alt="" />
            Comprar iPhone
         </li>
      </ul>
 </nav>
  )
}
