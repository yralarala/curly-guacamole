import React, {Component} from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import CareerExpectation from './components/CareerExpectation.js';
import Hobbies from './components/Hobbies.js';
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'
import NotFound from './components/NotFound.js';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageHeader/>
      <Home/>
        <Routes>  
          <Route exact path='/' element={<Navigate replace to='/home' />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/careerexpectation' element={<CareerExpectation />} />
          <Route exact path='/hobbies' element={<Hobbies />} />
          <Route exact element={<NotFound />} />
        </Routes>
      <PageFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;

    