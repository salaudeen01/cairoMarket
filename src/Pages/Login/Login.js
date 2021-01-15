import React, { Component } from 'react'
import '../Login/css/login.css'
// import Index from './Index'

export class Login extends Component {
    render() {
        return (
            <div>
                <div id="login-box">
                    <div className="right-box">
                        <span className="signinwith">Continue With <br/> Social Network
                        </span>

                        <button className="social facebook">Continue with Facebook</button>
                        <button className="social twitter">Continue with Twitter</button>
                        <button className="social google">Continue with Google</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login

    
