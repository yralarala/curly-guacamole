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
        body = "I started working as a waitress shortly after matriculating. A few weeks into the role, the company offered me the role of a Receptionist. Because the Hospitality industry is fast-paced, and, mostly about service delivery and client satisfaction; it taught me not only customer service skills, but the ability to communicate not only with customers but with other members of the staff and the people I come to contact with."
        img = {myPic}
        path = '/careerexpectation'
        readMore = "Read more"
        />
        </>   
    );    
}

export default Experience;