import React, { Component }   from 'react';
import Header from '../components/header'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                 <Header/>
                <p>Landing Page Test</p>
            </React.Fragment>
        )
    }
}

export default LandingPage
