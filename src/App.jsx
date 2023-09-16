import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogoPage from './components/LogoPage';
import Welcome from './components/Welcome';
import Login from './components/Login'
import Banner from './components/Banner';


const App = () => {
  return (
    <>
     <Router>
      <Routes>
            <Route path="/" element={<LogoPage/>} ></Route>
            <Route path="/welcome" element={<Welcome/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/banner" element={<Banner/>} ></Route>
       </Routes>
     </Router>
    </>
  )
}

export default App