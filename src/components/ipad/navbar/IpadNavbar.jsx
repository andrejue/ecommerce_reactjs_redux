import React from 'react';
import ipadpro from '../images/nav/ipadpro_large_.svg';
import ipadair from '../images/nav/ipadair_light_large.svg';
import ipad from '../images/nav/svgexport-29.svg';
import ipadmini from '../images/nav/svgexport-30.svg';
import comparar from '../images/nav/svgexport-31.svg';
import pencil from '../images/nav/ipad_pencil_large_.svg';
import teclados from '../images/nav/keyboard.fill_elevated_large_.svg';
import acessorios from '../images/nav/ipad_accessories_large_.svg';
import ipados from '../images/nav/ipad_ios_large_.svg';
import comprar from '../images/nav/svgexport-32.svg';


export default function IpadNavbar() {
  return (
   <nav className="ipad__navbar">
      <ul>
         <li>
            <img src={ipadpro} alt="" />
            iPad Pro
            <span>Novo</span>
         </li>
         <li>
            <img src={ipadair} alt="" />
            iPad Air
         </li>
         <li>
            <img src={ipad} alt="" />
            iPad
            <span>Novo</span>
         </li>
         <li>
            <img src={ipadmini} alt="" />
            iPad mini
         </li>
         <li>
            <img src={comparar} alt="" />
            Comparar
         </li>
         <li>
            <img src={pencil} alt="" />
            Apple Pencil
         </li>
         <li>
            <img src={teclados} alt="" />
            Teclados
            <span>Novo</span>
         </li>
         <li>
            <img src={acessorios} alt="" />
            Acessórios
         </li>
         <li>
            <img src={ipados} alt="" />
            iPadOS 17
            <span>Novo</span>
         </li>
         <li>
            <img src={comprar} alt="" />
            Comprar iPad
         </li>
      </ul>
 </nav>
  )
}
