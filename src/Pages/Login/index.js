import React, { Component } from 'react'
import './css/style.css'
import bg from '../../Assets/wave.png'
import av from '../../Assets/avatar.svg'
import al from '../../Assets/bg.svg'
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
		 	if(this.value === ""){
		 		parent.classList.remove('focus');
		 	}
		 }


		 inputs.forEach(input => {
		 	input.addEventListener('focus', focusFunc);
		 	input.addEventListener('blur', blurFunc);
		 });
		return (
		<div>	
			<img className="wavex" src={bg} alt=".."/>
			<div className="containerx">
				<div className="imgx">
					<img src={al} alt=".."/>
				</div>
				<div className="login-contentx">
					<form className="fx" action="index.js">
						<img className="avatar" src={av} alt=".."/>
						<h2>Welcome</h2>
						<div className="inputx-divx onex">
						<div className="ix">
								<i className="fas fa-envelope"></i>
						</div>
						<div className="divx">
						<input className="form-control border-top-0 border-left-0 border-right-0" type="email" placeholder="Email" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
						<div className="inputx-divx pass">
						<div className="ix"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="divx">
						<input className="form-control border-top-0 border-left-0 border-right-0" type="password" placeholder="password" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
						<Link to="/forgotPassword"> <h5>Forgot Password?</h5></Link>
						<Link to="/dashboard"><button style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white">LOGIN</button></Link> <br/>
						<h5>Dont have an account yet?</h5>
						<Link to="/register"><button style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white ">Click to register</button></Link> 
					</form>
				</div>
			</div>
		</div>
		)
	}
}

export default Index

	