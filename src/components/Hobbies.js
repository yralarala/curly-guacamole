import React from 'react';
import myPic from '../resources/yeyethu.png';
import '../css/StylingStandard.css';
import {NavLink} from 'react-router-dom';
import StandardLayout from './StandardLayout.js';


function Hobbies(){
    return(
        <>
        <StandardLayout
        title = "Hobbies"
        body = ""
        img = {myPic}
        readMore = "Return Home"
        />
        </>   
    );    
}

export default Hobbies;