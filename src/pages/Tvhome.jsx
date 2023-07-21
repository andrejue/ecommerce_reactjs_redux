import React from 'react';
import TvNavbar from '../components/tv/TvNavbar';
import '../pages/styles/tv.css';
import TvHero1 from '../components/tv/TvHero1';
import TvHero2 from '../components/tv/TvHero2';
import { Helmet } from 'react-helmet';

export default function Tvhome() {
  return (
    <main className='tv'>
      <Helmet>
        <title>TV e casa - Apple (Chenobyl)</title>
      </Helmet>
      <TvNavbar />
      <TvHero1 />
      <TvHero2 />
   </main>
  )
}
