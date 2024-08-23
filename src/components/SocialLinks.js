import React from 'react';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';

function SocialLinks() {
    return ( <
        div >
        <
        a href = "https://github.com/Ianssogothis"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        GitHubIcon style = {
            { width: '30px', height: '30px', fill: '#333' }
        }
        /> < /
        a > { /* Add more social links as needed */ } <
        /div>
    );
}

export default SocialLinks;