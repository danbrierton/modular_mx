import React, { Component }   from 'react';
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import NavBar from '../components/global/navBar'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPages: [],
            settingsContentCounter: null,
            newPageName: null,
            newPageFields: []
        }
    }

    handleUserPageAdd = (newArray) => {
        this.setState(
            {userPages: [...this.state.userPages, newArray]}
        )
    }

    handleSettingsContentChange = (value) => {
        if (value=="zero"){this.setState({settingsContentCounter: null})}
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

    render(){
        const {
            state,
            handleUserPageAdd, 
            handleSettingsContentChange, 
            handleNewPageNameChange,
            handleNewPageFieldsChange,
        } = this

        return(
            <React.Fragment>
                <div id="returnFragment">
                    <Header
                        state = {state}
                        handleUserPageAdd = {handleUserPageAdd}
                        handleSettingsContentChange = {handleSettingsContentChange}
                        handleNewPageNameChange = {handleNewPageNameChange}
                        handleNewPageFieldsChange = {handleNewPageFieldsChange}
                    />
                    <NavBar
                        state = {state}
                    />
                    <div id="content">
                        {/* <p>userPages Value: {this.state.userPages}</p> */}
                        <p>settingsContent Value: {this.state.settingsContentCounter}</p>
                        <p>newPageName Value: {this.state.newPageName}</p>
                        <p>newPageFields Value: {this.state.newPageFields}</p>
                    </div>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage
