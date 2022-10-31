import React from 'react'
import myPic from '../resources/yeyethu.png';
import '../css/StylingStandard.css';
import {NavLink} from 'react-router-dom'


function Hobbies(){
    return(
        <>
        <div className="standardSection">
            
            <div className="introBox">
                <h1>Yeyethu Ralarala</h1>
                <p>HOBBIES PAGE Lorem ipsum dolor sit amet, consectetur jjfjfjajlalalallaadip kdkjhdh
                    jsjhghala jfjjjfjjaj kkfjajajja kkaklrefeajroieij testing lkksjdjdjdjd 
                    jdjdjjdjdjdjdjd kjdjjdjdjdj oiehhsjahah akjjdjjsdjdsjsj.

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

export default Hobbies;