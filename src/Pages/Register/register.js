import React, { Component } from 'react'
import './css/style.css'
import bg from '../Register/images/wave.png'
import al from '../Register/images/bg.svg'
import {Link} from 'react-router-dom'

 class Register extends Component {
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
                <img className="wavex" alt="" src={bg}/>
			<div className="containerx">
				<div className="img">
					<img src={al} alt=""/>
				</div>
				<div className="login-content">
					<form action={Register}>
						<div className="input-div one">
						<div className="i">
								<i className="fas fa-user"></i>
						</div>
						<div className="div">
								<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="first_name" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
                        <div className="input-div one">
						<div className="i">
								<i className="fas fa-user"></i>
						</div>
						<div className="div">
								<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="last_name" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
                        <div className="input-div one">
						<div className="i">
								<i className="fas fa-phone"></i>
						</div>
						<div className="div">
								<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="phone_no" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
                        <div className="input-div one">
						<div className="i">
								<i className="fas fa-envelope"></i>
						</div>
						<div className="div">
								<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="email" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
						<div className="input-div pass">
						<div className="i"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="div">
								<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="password" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
                        <div className="input-div pass">
						<div className="i"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="div">
								<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="password_confirmation" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
        
						<Link to="/login"><button style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white">SUBMIT</button></Link>  
                        
					</form>
				</div>
			</div>
            </div>
        )
    }
}

export default Register
