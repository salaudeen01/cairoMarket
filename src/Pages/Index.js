import React, { Component } from 'react'
import './Login/css/style.css'
import Login from './Login/Login'
import bg from './Login/images/wave.png'
import av from './Login/images/avatar.png'
import al from './Login/images/bg.svg'
import {Link} from 'react-router-dom'

export class Index extends Component {
	render() {
		const inputs = document.querySelectorAll('.input');


		function focusFunc(){
			let parent = this.parentNode.parentNode;
			parent.classList.add('focus');
		}

		function blurFunc(){
			let parent = this.parentNode.parentNode;
			if(this.value == ""){
				parent.classList.remove('focus');
			}
		}


		inputs.forEach(input => {
			input.addEventListener('focus', focusFunc);
			input.addEventListener('blur', blurFunc);
		});
		return (
		<div>	
			<img className="wave" src={bg}/>
			<div className="container">
				<div className="img">
					<img src={al}/>
				</div>
				<div className="login-content">
					<form action="index.js">
						<img className="avatar" src={av}/>
						<h2>Welcome</h2>
						<div className="input-div one">
						<div className="i">
								<i className="fas fa-user"></i>
						</div>
						<div className="div">
								<h5>Username</h5>
								<input type="text" className="input"/>
						</div>
						</div>
						<div className="input-div pass">
						<div className="i"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="div">
								<h5>Password</h5>
								<input type="password" className="input"/>
						</div>
						</div>
						<a href="#">Forgot Password?</a>
						<Link type="submit" className="btn" to="/login">Login</Link>
					</form>
				</div>
			</div>
		</div>
		)
	}
}

export default Index

	