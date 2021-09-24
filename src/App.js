import './App.css';
import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Countries from './components/Countries'
import Country from "./components/Country";

function App() {

    return (
        <Router>
            <Switch>
                <Route path='/country/:name'>
                    <Country/>
                </Route>
                <Route path='/'>
                    <Countries/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
