import React, { Component } from 'react'
import { Link,Router,Switch,Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Dashboard from './dashboard/Dashboard'
import Dashboard2 from './dashboard/Dashboard2'
import page from './dashboard/page'



export class App extends Component {
    render() {
        return (
            <div className="">
            <Router history={ createBrowserHistory() }>
                <Switch>
                    <Route exact path="/" component={page}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path='/dashboard2' component={Dashboard2}/>
                </Switch>
            </Router>

            </div>
        )
    }
}

export default App
