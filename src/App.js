import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Error from './Component/Error';
import Body from './Component/Body';
import About from './Component/About';
import RestaurantMenu from './Component/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './Component/utills/appStore';
import Cart from './Component/Cart';
import First from './Component/First';
import Login from './Component/Login';
import Contact from './Component/Contact';
import Crausel from './Component/Crausel';

function App() {
  return (
    <Provider store={appStore}>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/home" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
           
            <Route path="/crausel" element={<Crausel/>} />
         
            <Route path="/about" element={<About />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
     
      </>
   
    </Provider>
  );
}


export default App;
