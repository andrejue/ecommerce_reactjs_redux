import React from 'react';
import airpods2gen from '../images/navbar/svgexport-29.svg';
import airpods3gen from '../images/navbar/svgexport-30.svg';
import pro2gen from '../images/navbar/svgexport-31.svg';
import airpodsmax from '../images/navbar/svgexport-32.svg';
import compare from '../images/navbar/svgexport-33.svg';
import applemusic from '../images/navbar/svgexport-34.svg';

export default function AirpodsNavbar() {
  return (

   <nav className="watch__navbar">
      <ul className='navbar__ul airpods__navbar' id='navbar__ul'>

         <li>
            <img src={airpods2gen} alt="" />
            AirPods<br/> 2ª geração
         </li>
         <li>
            <img src={airpods3gen} alt="" />
            AirPods<br/> 3ª geração
         </li>
         <li>
            <img src={pro2gen} alt="" />
            AirPods Pro<br/> 2ª geração
         </li>
         <li>
            <img src={airpodsmax} alt="" />
            AirPods Max
         </li>
         <li>
            <img src={compare} alt="" />
            Comparar
         </li>
         <li>
            <img src={applemusic} alt="" />
            Apple Music
         </li>

      </ul>
 </nav>

  )
}
