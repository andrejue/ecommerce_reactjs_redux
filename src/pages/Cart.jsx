import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';
import './styles/cart.css';
import { Helmet } from 'react-helmet';

export default function Cart() {

  const { products } = useSelector(rootReducer => rootReducer.cartReducer);

  return (
    <main className="cart__container">
      <Helmet>
        <title>Sacola de compras - Apple (Chernobyl)</title>
      </Helmet>
      <div className='cart__page'>
        <h1 className='cart__title'>Sacola de compras</h1>
        {products.map(product => <CartProduct product={product}/>)}
      </div>
    </main>
  )
}
