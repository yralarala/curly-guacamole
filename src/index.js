import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import {BrowserRouter as Router, Route, Routes, Switch, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { BrowserRouter, useLocation, useNavigation, useParams } from "react-router-dom"

import {Link} from 'react-router-dom'


 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    {/* <Routes></Routes>     */}
  </React.StrictMode>
  
);

   
            // <Route exact path='/home' component={Home}/>         
            // <Route exact path='/about' component={About}/>
            // <Route exact path='/whySovTech' component={WhySovTech}/>
            {/* <Redirect to='/home'/> */}
        

