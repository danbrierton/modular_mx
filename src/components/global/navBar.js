import React from 'react';
import './navBar.css'

const NavBar = (props) => {
    const {
        handleCurrentlySelectedPageChange
    } = props

    const renderButtons = () => {
        return props.state.userPages.map(
            (element,index, array) => {
                return <button 
                    key={index}
                    className="navButton"
                    onClick={()=>handleCurrentlySelectedPageChange(index)}
                    >
                        {element[0]}
                </button>
            }
        );
    }

    return(
        <nav>
            {renderButtons()}
        </nav>
    )
}

export default NavBar
