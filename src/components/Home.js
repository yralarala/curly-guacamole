import React from 'react'
import myPic from '../resources/yeyethu.png';
import '../css/StylingHome.css';
import {NavLink} from 'react-router-dom'


function Home(){
    return(
        <>
        <div className="home">

            <div className="introBox">
                <h1>Yeyethu Ralarala</h1>
                <p> A 2nd year [final year] at WeThinkCode_ pursuing a higher certificate, 
                    NQF level 5 in Information Technology, Systems Development.
                </p>
                <div className="readMoreBox">
                    <div className="read">
                        <NavLink exact to='/about' className="readMore">Read More</NavLink>
                    </div>                    
                </div>
            </div> 

            <div className="myPictureContainer">
            <img src={myPic} alt="Yeyethu's image" className="picture"/>
            </div>  

        </div> 
        </>        
    );    
}

export default Home;