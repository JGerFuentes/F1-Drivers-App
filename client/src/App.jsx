import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/landingPage';
import Drivers from './components/Drivers/Drivers';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Error from './components/Error/Error';
import './App.css'



const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const enterHome = () => {
    navigate('/home');
  }


  return (
    <div>
      {pathname !== '/' && <Navbar/>}

      <Routes>
        <Route path='/' element={ <LandingPage enterHome={enterHome}/> }/>
        <Route path='/home' element={ <Drivers /> }/>
        <Route path='/form' element={ <Form /> }/>
        <Route path='/detail/:id' element={ <Detail /> }/>

        {/* Si llego 😁 */}
        <Route path='/about' element={ <About/> }/>
        <Route path='*' element={ <Error /> }/> 
      </Routes>
      
    </div>
  )
}

export default App;
