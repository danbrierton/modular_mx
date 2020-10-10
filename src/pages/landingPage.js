import React, { Component }   from 'react';
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import NavBar from '../components/global/navBar'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPages: [1],
            settingsContentCounter: 0,
            newPageName: null,
            newPageFields: []
        }
    }

    handleUserPageAdd = (newObject) => {
        this.setState(
            {userPages: [...this.state.userPages, newObject]}
        )
    }

    handleSettingsContentAdd = () => {
        this.setState(
            {settingsContentCounter: this.state.settingsContentCounter+1}
        )
    }

    handleNewPageNameChange = (string) => {
        this.setState(
            {newPageName: string}
        )
    }

    handleNewPageFieldsChange = (index, string) => {
        //copy the array
        let newPageFieldsCopy = [...this.state.newPageFields];
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
            handleSettingsContentAdd, 
            handleNewPageNameChange,
            handleNewPageFieldsChange
        } = this

        return(
            <React.Fragment>
                <div id="returnFragment">
                    <Header
                        state = {state}
                        handleUserPageAdd = {handleUserPageAdd}
                        handleSettingsContentAdd = {handleSettingsContentAdd}
                        handleNewPageNameChange = {handleNewPageNameChange}
                        handleNewPageFieldsChange = {handleNewPageFieldsChange}
                    />
                    <NavBar/>
                    <div id="content">
                        <p>userPages Value: {this.state.userPages}</p>
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
