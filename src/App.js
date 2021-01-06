import React, { Component } from 'react'
import { 
    Route,
    Router,
    Switch,
    useHistory
 } from 'react-router-dom'

export class App extends Component {
    render() {
        // const hello = alert('Hello');
        return (
            <div className="text-center">
                {/* { hello } */}
                <h1>Welcome to <span style={{color:'red'}} className="fa fa-map-marker"> CAIRO-MARKET</span> oshodi.</h1>
                <div className="row">
                    <div className="col-sm-6"><span className="btn btn-outline-danger">Search for a products</span></div>
                    <div className="col-sm-6"><span className="btn btn-outline-success">Marketer login</span></div>
                </div>
            </div>
        )
    }
}

export default App
