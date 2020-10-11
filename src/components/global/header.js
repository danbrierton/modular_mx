import React from 'react';
import SettingsModal from './settingsModal'
import reactLogo from '../../media/reactLogo.png'
import settingsIcon from '../../media/settingsIcon.webp'
import profileIcon from '../../media/profileIcon.png'
import './header.css'

const Header = (props) => {

    // When the user clicks on the button, open the modal
    const settingsModal = () => {
        // Get the modal
        var modal = document.getElementById("myModal");

        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    const settingsModalClose = () => {
        // Get the modal
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        // Get the modal
        var modal = document.getElementById("myModal");

        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    const {
        state,
        handleUserPageAdd, 
        handleSettingsContentChange, 
        handleNewPageNameChange,
        handleNewPageFieldsChange,
    } = props

    return(
        <header>
            <div id="leftHeader">
                <img className="headerIcons" alt="react logo" src={reactLogo}/>
                Awesome Company Name
            </div>

            <div id="rightHeader">
                <img 
                    className="headerIcons" 
                    id="myBtn" 
                    alt="settings icon" 
                    src={settingsIcon}
                    onClick={()=>{settingsModal()}}
                />
                <img className="headerIcons" alt="profile icon" src={profileIcon}/>
            </div>

            {/* Modal */}
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span 
                        className="close"
                        onClick={()=>{settingsModalClose()}}>
                        &times;
                    </span>
                    <SettingsModal 
                        state = {state}
                        handleUserPageAdd = {handleUserPageAdd}
                        handleSettingsContentChange = {handleSettingsContentChange}
                        handleNewPageNameChange = {handleNewPageNameChange}
                        handleNewPageFieldsChange = {handleNewPageFieldsChange}
                    />
                </div>
            </div>

        </header>
    )
}

export default Header
