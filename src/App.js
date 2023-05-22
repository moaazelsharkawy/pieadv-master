import {Routes, Route, link} from "react-router-dom";
import React from 'react';
import Home from './pages/home';
import Erorr404 from './pages/404';
import Product from './pages/product';
import Online from './pages/online';
import Price from './pages/price';
import Service from './pages/service';
import Tec from './pages/tec';
import { Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Routes>
      <Route path "/" element={< Home/>} />
      <Route path "/404" element={< Erorr404/>} />
      <Route path "/product" element={< Product/>} />
      <Route path "/online" element={< Online/>} />
      <Route path "/price" element={< Price/>} />
      <Route path "/service" element={< Service/>} />
      <Route path "/tec" element={< Tec/>} />








      </Routes>
    </div>
  )
}
