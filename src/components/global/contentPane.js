import React from 'react';
import AfOrderForm from '../content/afOrderForm.js'

const ContentPane = (props) => {

    const renderContent = () => {
        let returnArray=[];
        props.state.userPages[props.state.currentlySelectedPage].forEach(
            (element, index, array)=>{
                if (index===0){returnArray = returnArray.concat(element) }
                else if (index > 0){
                    if (element==="afOrderForm"){returnArray = returnArray.concat(<AfOrderForm/>)}
                    else {returnArray = returnArray.concat(element) }
                }
            }
        )
        return returnArray
    }

    return(
        renderContent()
    )
}

export default ContentPane
