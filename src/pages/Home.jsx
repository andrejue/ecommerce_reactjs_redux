import React from 'react';
import "./styles/home.css";
import { FiChevronRight } from "react-icons/fi";
import { SiApple } from "react-icons/si";
import iphone14 from "./images/hero_iphone14_yellow__eun20sn4imi6_largetall.jpg";
import M2Logo from "./images/promo_m2_chip__enw2kz91lsuq_large.png";
import { Link } from 'react-router-dom';

export default function Home() {

  return (

    <main className='home layout'>

      <div className="hero__1__container">
        <div className="hero__1__content">
          <h1>iPhone 14</h1>
          <p className='subhead'>Maravilindo.</p>
          <div className="hero__links">
            <div className="hero__link__div">
              <a href="#">Saiba mais</a>
              <FiChevronRight size={18} color='#06c'/>
            </div>
            <div className="hero__link__div">
              <Link to='/products/10'>Comprar</Link>
              <FiChevronRight size={18} color='#06c'/>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__2__container">
        <div className="hero__1__content">
          <h1><span className="fff">iPhone 14 Pro</span></h1>
          <p className='subhead'>Pro. E além.</p>
          <div className="hero__links">
            <div className="hero__link__div">
              <a href="#">Saiba mais</a>
              <FiChevronRight size={18} color='#06c'/>
            </div>
            <div className="hero__link__div">
            <Link to='/products/9'>Comprar</Link>
              <FiChevronRight size={18} color='#06c'/>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__3__container">
        <div className="hero__1__content">
          <h1>MacBook Air de 15 polegadas</h1>
          <p className='subhead'>Espaçoso sem perder a fineza.</p>
          <div className="hero__links">
            <div className="hero__link__div">
              <a href="#">Saiba mais</a>
              <FiChevronRight size={18} color='#06c'/>
            </div>
            <div className="hero__link__div">
            <Link to='/products/1'>Comprar</Link>
              <FiChevronRight size={18} color='#06c'/>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__4__container__grid">

        <div className="hero__4__watch">

          <div className="hero__4__content">
            <div className="h4__watch">
              <SiApple size={28} className='apple__logo'/>
              <h4>WATCH</h4>
            </div>
            <span className='series8'>SERIES 8</span>
            <p className='subhead_grid'>Um grande passo para sua saúde.</p>
            <div className="hero__links">
              <div className="hero__link__div">
                <a href="#">Saiba mais</a>
                <FiChevronRight size={18} color='#06c'/>
              </div>
              <div className="hero__link__div">
              <Link to='/products/13'>Comprar</Link>
                <FiChevronRight size={18} color='#06c'/>
              </div>
            </div>
          </div>

        </div>

        <div className="hero__4__ipadpro">

          <div className="hero__4__content">
            <h4>iPad Pro</h4>
            <div className="m2logo__div">
              <p className='subhead_grid'>Com a potência do</p>
              <img src={M2Logo} alt="M2 chip logo" />
            </div>
            <div className="hero__links">
              <div className="hero__link__div">
              <Link to='/ipad'>Saiba mais</Link>
                <FiChevronRight size={18} color='#06c'/>
              </div>
            </div>
          </div>

        </div>

        <div className="hero__4__macstudio">

          <div className="hero__4__content hero__4__content__light">
              <h4>Mac Studio</h4>
                <p className='subhead_grid'>Com a potência do M2 Max e M2 Ultra.</p>
              <div className="hero__links">
                <div className="hero__link__div">
                  <a href="#">Saiba mais</a>
                  <FiChevronRight size={18} color='#06c'/>
                </div>
                <div className="hero__link__div">
                  <a href="#">Comprar</a>
                  <FiChevronRight size={18} color='#06c'/>
                </div>
              </div>
          </div>

        </div>

        <div className="hero__4__macpro">

          <div className="hero__4__content hero__4__content__light">
              <h4>Mac Pro</h4>
                <p className='subhead_grid'>Com a revolução do chip da Apple.</p>
              <div className="hero__links">
                <div className="hero__link__div">
                  <a href="#">Saiba mais</a>
                  <FiChevronRight size={18} color='#06c'/>
                </div>
                <div className="hero__link__div">
                  <a href="#">Comprar</a>
                  <FiChevronRight size={18} color='#06c'/>
                </div>
              </div>
          </div>

        </div>

        <div className="hero__4__airpodspro">

          <div className="hero__4__content">
              <h4>AirPods Pro</h4>
                <p className='subhead_grid'>E refez-se o som.</p>
              <div className="hero__links">
                <div className="hero__link__div">
                  <a href="#">Saiba mais</a>
                  <FiChevronRight size={18} color='#06c'/>
                </div>
                <div className="hero__link__div">
                  <a href="#">Comprar</a>
                  <FiChevronRight size={18} color='#06c'/>
                </div>
              </div>
          </div>

        </div>

        <div className="hero__4__fitness">

          <div className="hero__4__content hero__4__content__light">
            <div className="h4__fitness">
              <SiApple size={34} className='apple__logo'/>
              <h4>Fitness+</h4>
            </div>
            <p className='subhead_grid'>De HIIT a yoga, treinos<br/> para todos os gostos.</p>
            <div className="hero__links">
              <div className="hero__link__div">
                <a href="#">Saiba mais</a>
                <FiChevronRight size={18} color='#06c'/>
              </div>
              <div className="hero__link__div">
                <a href="#">Comprar</a>
                <FiChevronRight size={18} color='#06c'/>
              </div>
            </div>
          </div>

        </div>

      </div>

    </main>

  )
}
