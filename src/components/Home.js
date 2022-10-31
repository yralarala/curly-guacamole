import React from 'react'
import myPic from '../resources/yeyethu.png';
import '../css/StylingHome.css';
import {NavLink} from 'react-router-dom'

// import '../css/StylingHeader.css';


function Home(){
    return(
        <>
        <div className="home">
            <div className="introBox">
                <h1>Yeyethu Ralarala</h1>
                <p>Lorem ipsum dolor sit amet, consectetur jjfjfjajlalalallaadip kdkjhdh
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

        {/* <div className="myPictureContainer">
            <img src={myPic} alt="Yeyethu's image" className="picture"/>
        </div>         */}
        </>   
    );    
}

export default Home;