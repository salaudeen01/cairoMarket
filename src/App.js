import React, { Component } from 'react'
import { 
    Route,
    Router,
    Switch,
    useHistory
 } from 'react-router-dom'
import {history} from './history'
import Nav from './Pages/nav'

 const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

export class App extends Component {
    render() {
        // const hello = alert('Hello');
        return (
            <Router history={history}>
                <React.Suspense fallback={loading}>
                    <Nav />
                </React.Suspense>
            </Router>
        )
    }
}

export default App
