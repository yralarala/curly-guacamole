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
        body = "Born and Bred in a small town called Aliwal North which is on the boarders of the Eastern Cape and Free State "
        img = {myPic}
        path = '/experience'
        readMore = "Read more"
        />
        </>  
    );    
}

export default About;