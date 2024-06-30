import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import kid_banner from './Assets/banner_kids.png'
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import Navbar from './components/Navbar';
import ShopCategory from './components/ShopCategory';
import './App.css'
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

const App = () => {
   return (
      <div className='font-poppins'>
      <Navbar/>
      <div>
         <Routes>
            <Route path='/' element={<ShopPage/>}/>
            <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
            <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/signup' element={<LoginPage/>}/>
         </Routes>
      </div>
      <Footer/>
      </div>
   );
}

export default App;
