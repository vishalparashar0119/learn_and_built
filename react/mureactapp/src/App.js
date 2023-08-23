import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Navigation/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
  
  );
}

export default App;
