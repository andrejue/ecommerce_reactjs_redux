import React from 'react';
import "./styles/dropdown.css";
import '../pages/styles/cart.css';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import { selectProductsTotalPrice } from '../redux/cart/cart.selectors';

export default function Cart() {

  const { products } = useSelector(rootReducer => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
      <div className='cart__component'>

        <h1 className='cart__title'>Sacola de compras</h1>
        {products.map(product => <CartProduct product={product}/>)}
        <div className='totalprice'>
          <p>Total: R$ {productsTotalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}</p>
        </div>

        <Link to='/cart'>Acessar a sacola.</Link>

      </div>
  )
}
