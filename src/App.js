import React, {Component} from 'react';
import './App.css';
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
          <Route path='/Experience' element={<Experience />} />
          <Route path='/about' element={<CareerExpectation />} />
          <Route path='/about' element={<Hobbies />} />
          <Route element={<NotFound />} />
        </Routes>
      <PageFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;






// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
