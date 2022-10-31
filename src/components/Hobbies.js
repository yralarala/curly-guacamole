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
        body = 
        "When I am not sitting in from of my laptop, I love being in nature. 
        I enjoy listening to music, the Genre is all dependant on how I feel 
        at the time. I have a Doggo named Izuzu and oooh boy does he keep 
        everyone around the house busy as he loves his walks. A good, 
        relaxing day includes going to the beach (it's free after all :-)). 
        If I am looking for a crowd and a vibe, then the Market is my go to place."
        img = {myPic}
        path = '/home'
        readMore = "Return Home"
        />
        </>   
    );    
}

export default Hobbies;