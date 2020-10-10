import React, { Component }   from 'react';
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import NavBar from '../components/global/navBar'

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
