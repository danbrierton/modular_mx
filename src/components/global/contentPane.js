import React from 'react';

const ContentPane = (props) => {

    const renderContent = () => {
        let returnArray=[];
        props.state.userPages[props.state.currentlySelectedPage].forEach(
            (element, index, array)=>{
                if (index>0){returnArray = returnArray.concat(element) }
            }
        )
        return returnArray
    }

    return(
        renderContent()
    )
}

export default ContentPane
