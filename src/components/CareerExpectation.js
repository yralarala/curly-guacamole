import React from 'react';
import myPic from '../resources/yeyethu.png';
import '../css/StylingStandard.css';
import {NavLink} from 'react-router-dom';
import StandardLayout from './StandardLayout.js';


function CareerExpectation(){
    return(
        <>
        <StandardLayout
        title = "Career Expectation"
        body = ""
        img = {myPic}
        path = '/hobbies'
        readMore = "Read more"
        />
        </>   
    );    
}

export default CareerExpectation;