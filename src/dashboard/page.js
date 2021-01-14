import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class page extends Component {
    render() {
        return (
            <div className="container-fluid">
              <div className="row ">
                <div className="col-sm-4">
                  <div className='logo'>
                            <h2 className="my-2 mx-4" style={{color:'gray'}}><span style={{color:'red'}} className="fa fa-map-marker"> C</span>airo-market</h2>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="nav-bar">
                    <ul>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/dashboard2'>Profile</Link></li>
                      <li><Link to='/' className="btn btn-outline-info">product img</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
                <Link to="/dashboard" className="btn btn-outline-info float-left">Dashboard 01</Link>
                <Link to="/dashboard2" className="btn btn-outline-info float-right">Dashboard 02</Link>

                
            </div>
        )
    }
}

export default page
