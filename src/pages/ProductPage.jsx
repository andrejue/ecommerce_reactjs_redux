import React, { useState } from 'react';
import productsData from '../data/productsData';
import { useParams } from 'react-router-dom';
import './styles/products.css';
import ShipLogo from './images/products/svgexport-29.svg';
import TruckLogo from './images/products/svgexport-31.svg';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/cart/actions';
import { Helmet } from 'react-helmet';

export default function ProductPage() {

   let {id} = useParams();
   console.log(id)
   const filteredProduct = productsData.filter(product => product.id === parseInt(id))

   const [totalprice, setTotalPrice] = useState(filteredProduct[0].op1.price);

   const [selectedOption, setSelectedOption] = useState(true);

   const handleTotalPrice = (price) => {
      setTotalPrice(prevPrice => prevPrice = price)

      if (price === filteredProduct[0].op1.price) {
         setSelectedOption(prev => true)
      } else if (price === filteredProduct[0].op2.price) {
         setSelectedOption(prev => false)
      }
   }

   const dispatch = useDispatch();

   const handleProductClick = () => {
      if (selectedOption === false) {
         dispatch(addProductToCart(filteredProduct[0].op2))
      } else {
         dispatch(addProductToCart(filteredProduct[0].op1))
      }
   }

   return (

      <main className='product__page'>
            <Helmet>
               <title>{filteredProduct[0].name} - Apple (Chernobyl)</title>
            </Helmet>

            <section className="product">
               <div className="product__title">
                  <h1>Comprar {filteredProduct[0].name}</h1>
                  <p>A partir de R${filteredProduct[0].op1.price}</p>
               </div>
               <div className="product__info">
                  <div className="product__image">
                     <img src={filteredProduct[0].img} alt="imagem do produto"/>
                  </div>
                  <div className="product__options">
                     <h2>Modelo. <span>Qual o melhor para você?</span></h2>

                     <div className={selectedOption ? 'option__1 selected__option' : 'option__1'}>
                        <p className='product__name'>{filteredProduct[0].op1.name}</p>
                        <p className='description'>{filteredProduct[0].op1.description}</p>
                        <div className="price__btn">
                           <p>R$ {filteredProduct[0].op1.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}</p>
                           <button onClick={() => handleTotalPrice(filteredProduct[0].op1.price)}>Selecionar</button>
                        </div>
                     </div>

                     <div className={!selectedOption ? 'option__2 selected__option' : 'option__2'}>
                        <p className='product__name'>{filteredProduct[0].op2.name}</p>
                        <p className='description'>{filteredProduct[0].op2.description}</p>
                        <div className="price__btn">
                           <p>R$ {filteredProduct[0].op2.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}</p>
                           <button onClick={() => handleTotalPrice(filteredProduct[0].op2.price)}>Selecionar</button>
                        </div>
                     </div>

                  </div>
               </div>
               <div className="shipping">
                  <div className="logo">
                     <img src={ShipLogo} alt="" className='box__svg'/>
                     <p>Frete grátis</p>
                  </div>
                  <div className="specialist">
                     <p>Tem alguma dúvida sobre a compra do {filteredProduct[0].name}?</p>
                     <a href="#">Converse com um especialista Apple.</a>
                  </div>
               </div>
            </section>

            <div className="bottom__bar">
               <div className="bottom__bar__content">
                  <div className="shipping__bottom">
                     <img src={TruckLogo} alt="" />
                     <div>
                        <p>Em estoque</p>
                        <p>Frete grátis</p>
                        <a href="#">Ver datas de entrega</a>
                     </div>
                  </div>
                  <div className="total_price__add_to_cart">
                     <div className="price">
                        <h3>R$ {totalprice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}</h3>
                        <p className='blue'>Em até 12x de R$ {(totalprice/12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )}</p>
                        <p>R$ {parseInt(totalprice - (totalprice * 0.1)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )} (10% de desconto)</p>
                     </div>
                     <div className="add_to_cart">
                        <button onClick={handleProductClick}>Colocar na sacola</button>
                     </div>
                  </div>
               </div>
            </div>

      </main>
   )
}
