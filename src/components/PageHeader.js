import React from 'react';
import {NavLink} from 'react-router-dom'
import '../css/StylingHeader.css';


function PageHeader(){  
    return(
        <>
    <header>    
        <div className="pageHeader page-header">

            <nav>
                <div className="homeAboutContainer">
                    <NavLink exact to='/home' className={"container"} 
                    activeClassName="activeContainer">Home</NavLink>

                    <NavLink to='/about' className={"container"} 
                    activeClassName="activeContainer">About</NavLink>

                    <NavLink to='/experience' className={"container"} 
                    activeClassName="activeContainer">Experience</NavLink>

                    <NavLink to='/careerexpectation' className={"container"} 
                    activeClassName="activeContainer">Career Expectation</NavLink>

                    <NavLink to='/hobbies' className={"container"} 
                    activeClassName="activeContainer">Hobbies</NavLink>
                </div> 
            </nav>           
            
        </div>
    </header>
        </>
    )
}

export default PageHeader;