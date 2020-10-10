import React from 'react';
import LandingPage from './pages/landingPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
