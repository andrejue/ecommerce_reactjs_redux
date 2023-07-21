import React from 'react';
import "./styles/dropdown.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

export default function SearchMenu() {
  return (
    <div className='search__menu__container'>
      <div className="content__1__search">
         <AiOutlineSearch className='search__logo'/>
         <input type="text" placeholder='Buscar em apple.com'/>
      </div>
      
      <div className="content__2__search">
            <p>Links Rápidos</p>
            <div className="content__2__search__links">
               <BsArrowRight /><h5>Encontre uma loja</h5>
            </div>
            <div className="content__2__search__links">
               <BsArrowRight /><h5>Comprar na Apple Store online</h5>
            </div>
            <div className="content__2__search__links">
               <BsArrowRight /><h5>Acessórios</h5>
            </div>
            <div className="content__2__search__links">
               <BsArrowRight /><h5>AirPods</h5>
            </div>
            <div className="content__2__search__links">
               <BsArrowRight /><h5>AirTag</h5>
            </div>
      </div>
    </div>
  )
}
