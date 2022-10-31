import React from 'react';
import '../css/StylingHeader.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../css/StylingFooter.css';

function PageFooter(){
    return(
        <footer>
            <div className="pageFooter page-footer">

                <div className="icons">
                    <a href="https://www.linkedin.com/in/yeyethu-ralarala" className="icons">
                    <LinkedInIcon className="icon"/>
                    </a>
                    <a href="https://www.instagram.com/shiya_elihle" className="icons">
                    <InstagramIcon className="icon"/>
                    </a>
                </div>

                <div className="copyright">
                    <p>All rights reserverd &copy;</p>
                </div>

            </div>
        </footer>
    );
}

export default PageFooter;