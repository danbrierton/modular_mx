import React from 'react';
import './navBar.css'

const NavBar = (props) => {
    const {
        handleCurrentlySelectedPageChange
    } = props

    const renderButtons = () => {
        return props.state.userPages.map(
            (element,index, array) => {
                if(index!==0 && index!==props.state.currentlySelectedPage)
                {
                    return <button 
                        key={index}
                        className="navButton"
                        onClick={()=>handleCurrentlySelectedPageChange(index)}
                        >
                            {element[0]}
                    </button>
                }
                else if(index!==0 && index===props.state.currentlySelectedPage)
                {
                    return <button 
                        key={index}
                        className="navButton activeButton"
                        onClick={()=>handleCurrentlySelectedPageChange(index)}
                        >
                            {element[0]}
                    </button>
                }
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
