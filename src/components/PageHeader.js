import React from 'react';
import {NavLink} from 'react-router-dom'
import '../css/StylingHeader.css';


function PageHeader(){
    return(
        <>
    <header>    
        <div className="pageHeader page-header">
            
                <div className="homeAboutContainer">
                    <NavLink exact to='/home' className="container" 
                    activeClassName="activeContainer">Home</NavLink>

                    <NavLink exact to='/about' className="container" 
                    activeClassName="activeContainer">About</NavLink>

                    <NavLink exact to='/experience' className="container" 
                    activeClassName="activeContainer">Experience</NavLink>

                    <NavLink exact to='/careerexpectation' className="container" 
                    activeClassName="activeContainer">Career Expectation</NavLink>
                    
                    <NavLink exact to='/hobbies' className="container" 
                    activeClassName="activeContainer">Hobbies</NavLink>
                </div>                   
            
        </div>
    </header>
        </>
    )
}

export default PageHeader;