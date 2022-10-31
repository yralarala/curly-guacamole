import React from 'react';
import {NavLink} from 'react-router-dom';
import myPic from '../resources/yeyethu.png';



function StandardLayout(props){
    return(
        <div>
        <div className="standardSection">
            
            <div className="introBox">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                <div className="readMoreBox">
                    <div className="read">
                        <NavLink exact to={props.path} className="readMore">{props.readMore}</NavLink>
                    </div>                    
                </div>
            </div> 

            <div className="myPictureContainer">
            <img src={props.img} alt="Yeyethu's image" className="picture"/>
            </div>  

        </div> 
        </div>    
    );    
}

export default StandardLayout;