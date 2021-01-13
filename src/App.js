import React, { Component } from 'react'
import { 
    Route,
    Router,
    Switch,
    useHistory
 } from 'react-router-dom'
 import Header from './Component/Header';

export class App extends Component {
    render() {
        // const hello = alert('Hello');
        return (
            <div className="text-center">
                {/* { hello } */}
                <h1>Welcome to <span style={{color:'red'}} className="fa fa-map-marker"> CAIRO-MARKET</span> oshodi.</h1>
                <Header />
            </div>
        )
    }
}

export default App
