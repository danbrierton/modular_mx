import React from 'react';
import './settingsModal.css'

const SettingsModal = (props) => {

    const {
        handleUserPageAdd, 
        handleSettingsContentAdd,
        handleNewPageNameChange,
        handleNewPageFieldsChange
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


    return(
        <React.Fragment>
            <div id="settingsCurrentPages">
                <h3>Current Pages:</h3>
                <p>user pages value: {props.state.userPages}</p>
            </div>
            <div id="settingsNewPage">
                <h3>Add a New Page:</h3>
                <button onClick={()=>{handleSettingsContentAdd()}}>
                    Add Content Field
                </button>
                <br/> <br/>
                <input 
                    placeholder="Page Name"
                    onChange={event=>handleNewPageNameChange(event.target.value)}>
                </input>
                <br/>
                {renderContentOptions()}
                <br/> <br/>
                <button 
                    onClick={()=>handleUserPageAdd(2)}>
                    Add New Page
                </button>
            </div>
        </React.Fragment>
    )
}

export default SettingsModal
