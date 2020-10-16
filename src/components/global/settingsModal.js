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
                <div>
                    <select 
                        key={i}
                        onChange={event=>handleNewPageFieldsChange(i, event.target.value)}
                    >
                        <option value="null"></option>
                        <option value="AF Order Form (2005)">               AF Order Form (2005)                </option>
                        <option value="AF Acft Delayed Discrepancies">      AF Acft Delayed Discrepancies       </option>
                        <option value="AF Acft Engine Data">                AF Acft Engine Data                 </option>
                        <option value="AF Acft Exceptional Release">        AF Acft Exceptional Release         </option>
                        <option value="AF Acft Inspection Certification">   AF Acft Inspection Certification    </option>
                        <option value="AF Acft Lifing">                     AF Acft Lifing                      </option>
                        <option value="AF Acft Reccuring Maintenance">      AF Acft Reccuring Maintenance       </option>
                        <option value="AF Acft Servicing Update">           AF Acft Servicing Update            </option>
                        <option value="AF Acft Upcoming Major Inspections"> AF Acft Upcomign Major Inspections  </option>
                        <option value="AF Acft New Work Order">             AF Acft New Work Order              </option>
                    </select>
                    <br/>
                </div>
            )
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
                <br/>
                <br/>
                <button onClick={()=>{handleSettingsContentChange()}}>
                    Add Content Field
                </button>
                <br/>
                {renderContentOptions()}
                <br/>
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
