import React from 'react';
import './settingsModal.css'

const SettingsModal = (props) => {

    const {
        handleUserPageAdd, 
        handleSettingsContentChange,
        handleNewPageNameChange,
        handleNewPageFieldsChange,
    } = props

    const renderContentOptions = () => {
        let returnArray = []
        for (let i=0; i<props.state.settingsContentCounter; i++){
            returnArray.push(
                <select 
                    key={i}
                    onChange={event=>handleNewPageFieldsChange(i, event.target.value)}
                >
                    <option value="null"></option>
                    <option value="test">Test</option>
                </select>)
        }
        return (returnArray)
    }

    const renderCurrentPages = () => {
        let returnArray = []
        props.state.userPages.forEach(
            (element, index, array)=>{
                returnArray.push(
                    <p key={index}>
                        {element.map(
                            (element2, index2, array2)=>{
                                if (index2==0){return `Name: ${element2}`}
                                else {return `, Content: ${element2}`}
                            }  
                        )}
                    </p>
                )
            }
        )
        return (returnArray)        
    }

    return(
        <React.Fragment>
            <div id="settingsCurrentPages">
                <h3>Current Pages:</h3>
                {renderCurrentPages()}
                {/* <p>user pages value: {props.state.userPages}</p> */}
            </div>
            <div id="settingsNewPage">
                <h3>Add a New Page:</h3>
                <button onClick={()=>{handleSettingsContentChange()}}>
                    Add Content Field
                </button>
                <br/> <br/>
                <input 
                    id="newPageName"
                    placeholder="Page Name"
                    onChange={event=>handleNewPageNameChange(event.target.value)}>
                </input>
                <br/>
                {renderContentOptions()}
                <br/> <br/>
                <button 
                    onClick={
                        ()=>{
                            handleUserPageAdd([props.state.newPageName,props.state.newPageFields]);
                            document.getElementById('newPageName').value = '';
                            handleNewPageNameChange(null);
                            handleSettingsContentChange("zero");
                        }
                    }
                >
                    Add New Page
                </button>
            </div>
        </React.Fragment>
    )
}

export default SettingsModal
