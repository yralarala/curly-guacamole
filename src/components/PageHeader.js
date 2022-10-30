import React from 'react';
import {NavLink} from 'react-router-dom'
import '../css/StylingHeader.css';


function PageHeader(){
    return(
        <>
    <header>    
        <div className="pageHeader page-header">
            
                <div className="homeAboutContainer">
                    <p><NavLink exact to='/home' className="container" 
                    activeClassName="activeContainer">Home</NavLink></p> 
                    <p> <NavLink exact to='/about' className="container" 
                    activeClassName="activeContainer">About</NavLink></p>
                </div>                   
            
        </div>
    </header>
        </>
    )
}

export default PageHeader;