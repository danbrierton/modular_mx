import React, { Component }   from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navBar'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <div id="returnFragment">
                    <Header/>
                    <NavBar/>
                    <p>Landing Page Test</p>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage
