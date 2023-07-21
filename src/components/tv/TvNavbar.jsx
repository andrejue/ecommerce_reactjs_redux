import React from 'react';
import appletv4k from './images/navbar/svgexport-29.svg';
import app from './images/navbar/apple_tv_app_large_.svg';
import appletv from './images/navbar/apple_tv_plus_large_.svg';
import casa from './images/navbar/svgexport-30.svg';
import acessorios from './images/navbar/svgexport-31.svg';


export default function TvNavbar() {
  return (

   <nav className="tv__navbar">

      <ul className='navbar__ul' id='navbar__ul'>

         <li>
            <img src={appletv4k} alt="" />
            Apple TV 4K
         </li>
         <li>
            <img src={app} alt="" />
            Apple TV app
         </li>
         <li>
            <img src={appletv} alt="" />
            Apple TV+
         </li>
         <li>
            <img src={casa} alt="" />
            App Casa
         </li>
         <li>
            <img src={acessorios} alt="" />
            Acessórios
         </li>

      </ul>

   </nav>

  )
}
