import axios from 'axios';
import { useState, useEffect } from 'react';
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
const URL = 'http://localhost:3001/drivers'

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrayDrivers = useSelector((state) => state.arrayDrivers);
  const arrayTeams = useSelector((state) => state.arrayTeams);
  const [foundDrivers, setFoundDrivers] = useState([]);
  
  useEffect(() => {
    if (pathname === '/home' && !arrayDrivers.length > 0) {
      dispatch(getAllDrivers());
      setFoundDrivers([])
    }
    if ((pathname === '/form' || pathname === '/home') && !arrayTeams.length > 0) {
      dispatch(getAllTeams());
    }

  }, [pathname, arrayDrivers, arrayTeams]);

  const onSearch = async (name) => {
    try {
      const { data } = await axios (`${URL}?name=${name}`)
  
      if (data.length > 0) {
        let auxArray = [];
        
        data.map((obj) => {auxArray = auxArray.concat(obj)});
        
        setFoundDrivers(auxArray);
        navigate(`/home?name=${name}`)
      }
    } catch (error) {
      window.alert("Sorry, but there are no matches for your input.");   
      return ({ error: error.message });
    }
  }

  const enterHome = () => {
    navigate('/home');
  }

  return (
    <div>
      { pathname !== '/' && <Navbar onSearch={onSearch} arrayTeams={arrayTeams}/> }

      <Routes>
        <Route path='/' element={ <LandingPage enterHome={enterHome}/> }/>

        <Route path='/home' element={ <HomePage arrayDrivers={arrayDrivers} arrayTeams={arrayTeams} foundDrivers={foundDrivers}/> }/>

        <Route path='/form' element={ <Form arrayTeams={arrayTeams}/> }/>

        <Route path='/detail/:id' element={ <Detail /> }/>

        <Route path='/about' element={ <About/> }/>
        
        <Route path='*' element={ <Error /> }/> 
      </Routes>
      
    </div>
  )
}

export default App;