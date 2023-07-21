import React from 'react';
import { useSelector } from 'react-redux';
import './styles/header.css';

export default function Blur() {
   const blur = useSelector(rootReducer =>
      rootReducer.blurReducer);

   return (
      <div className={blur ? 'blur__on' : 'blur__off'}>

      </div>
   )
}
