import React, { Component }   from 'react';
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import NavBar from '../components/global/navBar'
import ContentPane from '../components/global/contentPane'
import './landingPage.css'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPages: [[]],
            settingsContentCounter: null,
            newPageName: null,
            newPageFields: [],
            currentlySelectedPage: 0
        }
    }

    handleUserPageAdd = (newArray) => {
        this.setState(
            {userPages: [...this.state.userPages, newArray]}
        )
    }

    handleSettingsContentChange = (value) => {
        if (value==="zero"){this.setState({settingsContentCounter: null})}
        else {
            this.setState(
                {settingsContentCounter: this.state.settingsContentCounter+1}
            )
        }
    }

    handleNewPageNameChange = (string) => {
        this.setState(
            {newPageName: string}
        )
    }

    handleNewPageFieldsChange = (index, string) => {
        //copy the array
        var newPageFieldsCopy = [...this.state.newPageFields];
        //change the array copy
        newPageFieldsCopy[index] = string; 
        //change the original aray
        this.setState(
            {newPageFields: newPageFieldsCopy}
        )
    }

    handleNewPageFieldsZero = () => {
        this.setState(
            {newPageFields: []}
        )
    }

    handleCurrentlySelectedPageChange = (value) => {
        this.setState(
            {currentlySelectedPage: value}
        )
    }

    render(){
        const {
            state,
            handleUserPageAdd, 
            handleSettingsContentChange, 
            handleNewPageNameChange,
            handleNewPageFieldsChange,
            handleCurrentlySelectedPageChange,
            handleNewPageFieldsZero
        } = this

        console.log(state)

        return(
            <React.Fragment>
                <div id="returnFragment">
                    <Header
                        state = {state}
                        handleUserPageAdd = {handleUserPageAdd}
                        handleSettingsContentChange = {handleSettingsContentChange}
                        handleNewPageNameChange = {handleNewPageNameChange}
                        handleNewPageFieldsChange = {handleNewPageFieldsChange}
                        handleNewPageFieldsZero = {handleNewPageFieldsZero}
                    />
                    <NavBar
                        state = {state}
                        handleCurrentlySelectedPageChange = {handleCurrentlySelectedPageChange}
                    />
                    <div id="contentPaneDiv">
                    <ContentPane
                        state = {state}
                    />
                    </div>
                    <Footer/>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage
