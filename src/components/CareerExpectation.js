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
        body = "
        I simply want to be part of an organisation with a good culture 
        that provides both career and personal growth. As a WeThinkCode_ 
        partner, of the many companies that I could have selected for my 
        placement, I chose SovTech for the work they do interests me, 
        and I feel its a place I can grow. The categories listed in the 
        SovTech website shows an organisation with a variety of interesting 
        opportunities, which is what I want.
        "
        img = {myPic}
        path = '/hobbies'
        readMore = "Read more"
        />
        </>   
    );    
}

export default CareerExpectation;