import React, { Component } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history'
// import { 
//     Route,
//     Router,
//     Switch,
//     useHistory
//  } from 'react-router-dom'
 import Index from './Pages/Login/Index'
import Login from './Pages/Login/Login'

export class App extends Component {
    render() {
        // const hello = alert('Hello');
        console.log("Hello")
        return (
            <div className="text-center">
                <Router history={createBrowserHistory()}>
                    <Switch>
                        <Route path="/home" component={Index} name="home" />
                        <Route path="/login" component={Login} name="login" />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </Router>
                
            </div>
        )
    }
}

export default App
