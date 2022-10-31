import React from 'react';
import myPic from '../resources/yeyethu.png';
import '../css/StylingStandard.css';
import {NavLink} from 'react-router-dom';
import StandardLayout from './StandardLayout.js';


function Experience(){
    return(
        <>
        <StandardLayout
        title = "Experience"
        body = ""
        img = {myPic}
        readMore = "Read more"
        />
        </>   
    );    
}

export default Experience;