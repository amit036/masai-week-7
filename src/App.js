import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Products from './components/products.js'
import Centre from './components/newCentre'
import Customers from './components/customer';
import Bhive from './components/bhive';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Products/>
    <Centre/>
    <Customers/>
    <Bhive/>
    <Footer/>
    </>
  );
}

export default App;
