import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getAllDrivers, getAllTeams } from './redux/actions'
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Error from './components/Error/Error';
import './App.css'



const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrayDrivers = useSelector((state) => state.arrayDrivers);
  const arrayTeams = useSelector((state) => state.arrayTeams);
  
  useEffect(() => {
    if (pathname === '/home' && !arrayDrivers.length > 0) {
      dispatch(getAllDrivers());
    }
    if (pathname === '/form' && !arrayTeams.length > 0) {
      dispatch(getAllTeams());
    }
  }, [dispatch, pathname, arrayDrivers, arrayTeams]);

  const enterHome = () => {
    navigate('/home');
  }

  return (
    <div>
      { pathname !== '/' && <Navbar /> }

      <Routes>
        <Route path='/' element={ <LandingPage enterHome={enterHome}/> }/>
        <Route path='/home' element={ <HomePage arrayDrivers={arrayDrivers}/> }/>
        <Route path='/form' element={ <Form arrayTeams={arrayTeams}/> }/>
        <Route path='/detail/:id' element={ <Detail /> }/>

        {/* Si llego 😁 */}
        <Route path='/about' element={ <About/> }/>
        <Route path='*' element={ <Error /> }/> 
      </Routes>
      
    </div>
  )
}

export default App;
