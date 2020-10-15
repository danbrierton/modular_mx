import React from 'react';
import './settingsModal.css'

const SettingsModal = (props) => {

    const {
        handleUserPageAdd, 
        handleSettingsContentChange,
        handleNewPageNameChange,
        handleNewPageFieldsChange,
        handleNewPageFieldsZero
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
                    <option value="afOrderForm">AF Order Form (2005)</option>
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
                                if (index2===0){return `Name: ${element2}, Content:`}
                                else {return <li>{element2}</li>}
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

                <input 
                    id="newPageName"
                    placeholder="Page Name"
                    onChange={event=>handleNewPageNameChange(event.target.value)}>
                </input>
                <button onClick={()=>{handleSettingsContentChange()}}>
                    Add Content Field
                </button>
                <br/> 
                <br/>
                {renderContentOptions()}
                <br/> <br/>
                <button 
                    onClick={
                        ()=>{
                            handleUserPageAdd([props.state.newPageName,...props.state.newPageFields]);
                            document.getElementById('newPageName').value = '';
                            handleNewPageNameChange(null);
                            handleSettingsContentChange("zero");
                            handleNewPageFieldsZero()
                        }
                    }
                >
                    Save
                </button>
            </div>
        </React.Fragment>
    )
}

export default SettingsModal
