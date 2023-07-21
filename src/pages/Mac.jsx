import React from 'react';
import "./styles/pages_all.css";
import './styles/store.css';
import './styles/mac.css';

import MacHero1 from '../components/mac/MacHero1';
import MacHero2 from '../components/mac/MacHero2';
import MacCarousel1 from '../components/mac/MacCarousel1';
import MacCarousel2 from '../components/mac/MacCarousel2';
import MacCarousel3 from '../components/mac/MacCarousel3';
import { Helmet } from 'react-helmet';

export default function Mac() {
  return (
    <main className='mac main__container main__store__container'>
      <Helmet>
        <title>Mac - Apple (Chernobyl)</title>
      </Helmet>
      <MacHero1 />
      <MacCarousel1 />
      <MacCarousel2 />
      <MacHero2 />
      <MacCarousel3 />
    </main>
  )
}
