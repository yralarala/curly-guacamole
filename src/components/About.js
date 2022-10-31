import React from 'react';
import myPic from '../resources/yeyethu.png';
import '../css/StylingStandard.css';
import {NavLink} from 'react-router-dom';
import StandardLayout from './StandardLayout.js';


function About(){
    return(
        <>
        <StandardLayout
        title = "About"
        body = ""
        img = {myPic}
        readMore = "Read more"
        />
        </>   
    );    
}

export default About;