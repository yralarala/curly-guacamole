import React from 'react';
import myPic from '../resources/yeyethu.png';
import '../css/StylingStandard.css';
import {NavLink} from 'react-router-dom';
import StandardLayout from './StandardLayout.js';


function Achievements(){
    return(
        <>
        <StandardLayout
        title = "Achievements"
        body = "My biggest achievement thus far is being the first person in my family 
        to go to University and being one of the three out of a class of over 
        80 students that graduated with a Cum Laude. My other achievement, which 
        is still a work in progress is i making into the WeThinkCode_ programme 
        as people applied in large numbers."
        img = {myPic}
        path = '/careerexpectation'
        readMore = "Read more"
        />
        </>   
    );    
}

export default Achievements;