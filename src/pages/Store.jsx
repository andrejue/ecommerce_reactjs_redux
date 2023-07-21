import './styles/store.css';
import Hero1 from '../components/store/StoreHero1';
import Hero2 from '../components/store/StoreHero2';
import Carousel1 from '../components/store/StoreCarousel1';
import Carousel2 from '../components/store/StoreCarousel2';
import { Helmet } from 'react-helmet';



export default function Store() {
  return (

    <main className='main__store__container'>
      <Helmet>
        <title>Apple Store Online - Apple (Chernobyl)</title>
      </Helmet>
      <Hero1 />
      <Carousel1 />
      <Hero2 />
      <Carousel2 />

    </main>

  )
}
