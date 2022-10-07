import React, { useState } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from './Components/Header';
import NavIconBar from './Components/NavIconBar';
import Home from './Components/Home/Home';

function App() {
  const [shownav, setShowNav] = useState(false);

  const handleShowNav = () => {
      shownav? setShowNav(false) : setShowNav(true);
  }

  return (
      <div className='App'>
        <div className='appHeader'>
          <Header handleShowNav={handleShowNav}/>
        </div>
        <div className='appBody'>
          <div>
            {
              <NavIconBar shownav={shownav} />
            }
          </div>
          <div className='mainbody'>
            <Router>
              <Routes>
                <Route  path="/" element={<Home/>} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
  );
}

export default App;
