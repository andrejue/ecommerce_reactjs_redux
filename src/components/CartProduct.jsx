import React from 'react';
import '../pages/styles/cart.css';
import {AiOutlineClose} from 'react-icons/ai';
import {AiFillPlusCircle} from 'react-icons/ai';
import {AiFillMinusCircle} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, increaseProduct, decreaseProduct } from '../redux/cart/actions';

export default function CartProduct(product) {

   const dispatch = useDispatch();

   const handleRemoveClick = () => {
      dispatch(removeProductFromCart(product.product.name))
   }

   const handleIncreaseClick = () => {
      dispatch(increaseProduct(product.product.name))
   }

   const handleDecreaseClick = () => {
      dispatch(decreaseProduct(product.product.name))
   }

  return (
    <div className='cart__product'>
      <div className="cart__item">
         <div className="product__cart">
            <div className="item__image">
               <img src={product.product.img} alt="" />
            </div>
            <div className="item__info">
               <h3>{product.product.name}</h3>
               <p className='product__desc'>{product.product.description}</p>
               <p className='product__quant'>
                  Quantidade: <button onClick={handleDecreaseClick}><AiFillMinusCircle size={14} /></button>
                  {product.product.quantity}
                  <button onClick={handleIncreaseClick}><AiFillPlusCircle size={14} /></button>
               </p>
            </div>
         </div>
         <div className="quantity" onClick={handleRemoveClick}>

               <AiOutlineClose size={20} />
               Remover

         </div>
      </div>
    </div>
  )
}
