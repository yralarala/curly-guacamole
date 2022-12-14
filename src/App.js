import React, {Component} from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Achievements from './components/Achievements.js';
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
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/achievements' element={<Achievements />} />
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

    