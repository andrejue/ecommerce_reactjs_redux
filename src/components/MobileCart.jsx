import React, {useState} from 'react';
import CartProduct from './CartProduct';
import {useDispatch, useSelector} from 'react-redux';
import { mobileCartClose } from '../redux/mobilecart/actions';
import { BsChevronCompactUp } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { selectProductsTotalPrice } from '../redux/cart/cart.selectors';
import './styles/mobilecart.css';


export default function MobileCart() {

   const activeMobileCart = useSelector(rootReducer => rootReducer.mobileCartReducer);

   const dispatch = useDispatch();

   const closeMobileCart = () => {
      dispatch(mobileCartClose(false))
   }

   const [displacedY, setDisplacedY] = useState(0);

   const handleTouchStart = (e) => {
      e.target.dataset.startY = e.touches[0].clientY;
   };

   const handleTouchMove = (e) => {
      const startY = parseFloat(e.target.dataset.startY);
      const deltaY = startY - e.touches[0].clientY;

      setDisplacedY(deltaY);
   };

   const handleTouchEnd = () => {

      const xPixelsThreshold = 40;

      if (displacedY > xPixelsThreshold) {
         closeMobileCart();
      }

      setDisplacedY(0);
   };


   const { products } = useSelector(rootReducer => rootReducer.cartReducer);

   const productsTotalPrice = useSelector(selectProductsTotalPrice)


   return (
      <div
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
         style={{position:'relative'}}
         >
         <div className={activeMobileCart ? 'mobile__cart__on mobile__cart' : 'mobile__cart__off mobile__cart'}
         >
            <div className='cart__component'>

               <h1 className='cart__title'>Sacola de compras</h1>
               {products.map(product => <CartProduct product={product}/>)}

               <div className='totalprice'>
                  <p>
                     Total: R$ {productsTotalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}
                  </p>
               </div>

               <Link to='/cart'>Acessar a sacola.</Link>

            </div>

            <div className="close__btn">
               <button onClick={closeMobileCart}>
                  <BsChevronCompactUp size={80}/>
               </button>
            </div>

         </div>
      </div>
   )
}
