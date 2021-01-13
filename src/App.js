import React, { Component } from 'react'
import { 
    Route,
    Router,
    Switch,
    useHistory
 } from 'react-router-dom'
import Project  from './myProject/myProject'
 
export class App extends Component {
    
    render() {
        // const hello = alert('Hello');
        return (
            <div>
                <Project />
            </div>
        )
    }
}
export default App