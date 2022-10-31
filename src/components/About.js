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
        body = "I was born and bred in a small town of Aliwal North in the Eastern Cape. 
        Being raised by a single mother meant I had to start working straight 
        after metric, lending my first job as a receptioninst. Despite this, 
        I never stopped to seek ways to improve myself, later lending a job 
        first as a Sales Consultant then later promoted to Assitant Branch 
        Manager at Capitec Bank.

        Before joining WeThinkCode_ I complete a Bachelor of Social Work at 
        Nelson Mandela University, and had a short stint working as a Social 
        Work at Christelike Maatskaplike Raad (CMR) and Nicro. During my time 
        at Nelson Madela University I got exposed to Software Engineering, 
        which I surprisingly found interesting. So when the opportunity to 
        take the WeThinkCode assessment came along, I gave it my best, and 
        I am loving learning and growing each day."
        img = {myPic}
        path = '/achievements'
        readMore = "Read more"
        />
        </>  
    );    
}

export default About;