import React, {Component} from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import CareerExpectation from './components/CareerExpectation.js';
import Hobbies from './components/Hobbies.js';
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'
import NotFound from './components/NotFound.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PageHeader/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/careerexpectation' element={<CareerExpectation />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route element={<NotFound />} />
        </Routes>
      <PageFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;

    