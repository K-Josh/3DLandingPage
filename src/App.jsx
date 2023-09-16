import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogoPage from './components/LogoPage';
import SignIn from './components/SignIn';
import Login from './components/Login'
import Banner from './components/Banner';
import WorkEmail from './components/WorkEmail';


const App = () => {
  return (
    <>
     <Router>
      <Routes>
            <Route path="/" element={<LogoPage/>} ></Route>
            <Route path="/SignIn" element={<SignIn/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path='/work_mail' element={<WorkEmail />}></Route>
            <Route path="/banner" element={<Banner/>} ></Route>
       </Routes>
     </Router>
    </>
  )
}

export default App