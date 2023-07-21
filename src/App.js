import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import Mac from './pages/Mac';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Watch from './pages/Watch';
import Airpods from './pages/Airpods';
import ProductPage from './pages/ProductPage';
import CartProduct from './components/CartProduct';
import Cart from './pages/Cart';
import Tvhome from './pages/Tvhome';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path='mac' element={<Mac />} />
            <Route path='ipad' element={<Ipad />} />
            <Route path='iphone' element={<Iphone />} />
            <Route path='watch' element={<Watch />} />
            <Route path='airpods' element={<Airpods />} />
            <Route path='tv' element={<Tvhome />} />
            <Route path='products/:id' element={<ProductPage />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
