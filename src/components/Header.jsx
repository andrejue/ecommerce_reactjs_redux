import React, { useState } from 'react';
import "./styles/header.css";
import "./styles/dropdown.css";
import { Link } from 'react-router-dom';
import { SiApple } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import ShoppingBag from './svg/header/svgexport-25.svg'
import DropdownMenu from './DropdownMenu';
import SearchMenu from './SearchMenu';
import Blur from './Blur';
import Cart from './CartComponent';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductsCount } from '../redux/cart/cart.selectors';
import { addBlur, removeBlur } from '../redux/blur/actions';
import { menuOpen } from '../redux/mobilemenu/actions';
import { mobileCartOpen } from '../redux/mobilecart/actions';
import Loja from './svg/header/svgexport-4.svg';
import Mac from './svg/header/svgexport-8.svg';
import Ipad from './svg/header/svgexport-9.svg';
import Iphone from './svg/header/svgexport-10.svg';
import Watch from './svg/header/svgexport-11.svg';
import Airpods from './svg/header/svgexport-12.svg';
import TV from './svg/header/svgexport-13.svg';
import Entretenimento from './svg/header/svgexport-14.svg';
import Acessorios from './svg/header/svgexport-15.svg';
import Suporte from './svg/header/svgexport-16.svg';
import MobileMenu from './MobileMenu';
import MobileCart from './MobileCart';

export default function Header() {

   const [activeDropdown, setActiveDropdown] = useState(null);
   const [dropdownWrapper, setDropdownWrapper] = useState(false);

   const productsCount = useSelector(selectProductsCount)
   const activeMobileMenu = useSelector(rootReducer =>
      rootReducer.menuReducer);
   const activeMobileCart = useSelector(rootReducer =>
      rootReducer.mobileCartReducer);

   if (activeMobileMenu || activeMobileCart) {
      document.body.classList.add('no__scroll')
   } else {
      document.body.classList.remove('no__scroll')
   }

   const dispatch = useDispatch();
   if (dropdownWrapper) {
      dispatch(addBlur(true))
   } else {
      dispatch(removeBlur(false))
   }

   const openMobileMenu = () => {
      dispatch(menuOpen(true))
   }

   const openMobileCart = () => {
      dispatch(mobileCartOpen(true))
   }

   const handleMouseEnter = (itemId) => {
      setActiveDropdown(itemId);
      setDropdownWrapper(true);
   };

   const handleMouseLeave = () => {
      setActiveDropdown(null);
      setDropdownWrapper(false);
   };

   return (
      <>
         <header className={activeDropdown === null ? 'header' : 'header header__open'}>
            <div className='header__container'>
               <div className='logo'>
                  <Link to='/'><SiApple /></Link>
               </div>
               <nav className='nav'>
                  <ul className='nav__ul'>

                     <li
                        onMouseEnter={() => handleMouseEnter('item1')}
                     >
                        <Link to='/store'><img src={Loja} alt="Loja" id='svg'/></Link>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item2')}
                     >
                        <Link to='/mac'><img src={Mac} alt="Mac" className='svg'/></Link>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item3')}
                     >
                        <Link to='/ipad'><img src={Ipad} alt="Ipad" className='svg'/></Link>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item4')}
                     >
                        <Link to='/iphone'><img src={Iphone} alt="Iphone" className='svg'/></Link>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item5')}
                     >
                        <Link to='/watch'><img src={Watch} alt="Watch" className='svg'/></Link>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item6')}
                     >
                        <Link to='/airpods'><img src={Airpods} alt="Airpods" className='svg'/></Link>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item7')}
                     >
                        <a href="/tv"><img src={TV} alt="TV e casa" className='svg'/></a>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item8')}
                     >
                        <a href="/"><img src={Entretenimento} alt="Entretenimento" className='svg'/></a>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item9')}
                     >
                        <a href="/"><img src={Acessorios} alt="Acessórios" className='svg'/></a>
                     </li>
                     <li
                        onMouseEnter={() => handleMouseEnter('item10')}
                     >
                        <a href="/"><img src={Suporte} alt="Suporte" className='svg'/></a>
                     </li>

                  </ul>
               </nav>
               <div className="search">
                  <Link onClick={() => handleMouseEnter('search')}>
                     <AiOutlineSearch />
                  </Link>
               </div>
               <div className={activeMobileMenu || activeMobileCart ? 'hamburguer__btn__off' : 'hamburguer__btn'}>
                  <Link onClick={openMobileMenu}>
                     <RxHamburgerMenu size={28}/>
                  </Link>
               </div>
               <div className={activeMobileCart || activeMobileMenu ? 'hamburguer__btn__off' : 'hamburguer__btn'}>
                  <Link onClick={openMobileCart}>
                     <img src={ShoppingBag} alt="Sacola de compras" />
                     <div className={productsCount < 1
                        ? 'cart__quantity__none'
                        : 'cart__quantity'}>
                        {productsCount}
                     </div>
                  </Link>
               </div>

               <div className='cart'>
                  <Link onClick={() => handleMouseEnter('cart')}>
                     <img src={ShoppingBag} alt="Sacola de compras" />
                     <div className={productsCount < 1
                        ? 'cart__quantity__none'
                        : 'cart__quantity'}>
                        {productsCount}
                     </div>
                  </Link>
               </div>
            </div>

         </header>

         <div className={dropdownWrapper ? 'dropdown__wrapper dropdown__wrapper__open' : 'dropdown__wrapper'}
            onMouseLeave={handleMouseLeave}
         >
               <div className={activeDropdown === 'item1' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item2' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item3' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item4' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item5' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item6' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item7' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item8' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item9' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'item10' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <DropdownMenu item={activeDropdown}/>
               </div>
               <div className={activeDropdown === 'search' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <SearchMenu />
               </div>
               <div className={activeDropdown === 'cart' ? 'dropdown__content__on' : 'dropdown__content__off'} >
                     <Cart />
               </div>
         </div>
         <Blur />
         <MobileMenu />
         <MobileCart />
      </>

  )
}
