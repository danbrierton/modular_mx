import React, { Component }   from 'react';
import reactLogo from '../media/reactLogo.png'
import settingsIcon from '../media/settingsIcon.webp'
import profileIcon from '../media/profileIcon.png'
import './header.css'

const Header = (props) => {

    return(
        <header>
            <div id="leftHeader">
                <img class="headerIcons" alt="react logo" src={reactLogo}/>
                Awesome Company Name
            </div>

            <div id="rightHeader">
                <img class="headerIcons" alt="settings icon" src={settingsIcon}/>
                <img class="headerIcons" alt="profile icon" src={profileIcon}/>
            </div>
        </header>
    )
}

export default Header
