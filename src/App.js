import React, { Component,Suspense } from 'react'
import { 
    Router,
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
        return (
            <Router history={history}>
                <Suspense fallback={loading}>
                    <Nav />
                </Suspense>
            </Router>
        )
    }
}
export default App