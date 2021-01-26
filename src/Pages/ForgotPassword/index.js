
import React, { useState } from 'react'
import './css/style.css'
import bg from '../../Assets/wave.png'
import forgotPassword from '../../Assets/forgotPassword.svg'
import {Link} from 'react-router-dom'

const baseUrl = "http://142.93.152.229/cairo/api/auth/forgot_password"
// const apiType = "auth/forgot_password";

const forgot =(data)=> {

	const activity={ 
	method:"POST",
	body: JSON.stringify(data),
	headers:{
		"content-type":"application/json",
	}
}


 fetch(baseUrl, activity).then(async res=>{
	const data = await res.json()
	if(data.status){
		console.log(data.status)
		alert(data.status)
	}else{
		console.log(data.message)
		alert(data.message)
	}
}).catch(err=>{
	alert(err)
})
}


const ForgotPassword =()=>{

	const [data , setData] = useState({
		email:''
	})

	const handleChange =(e)=>{
		e.preventDefault()
		const {name , value} = e.target
		setData(data=>({...data, [name]:value}))
	}

	const handleForgot =(e)=>{
		e.preventDefault()
		forgot(data)
	}
	

		 
		return (
		<div>	
			<img className="wave" src={bg} alt=".."/>
			<div className="container">
				<div className="img">
					<img src={forgotPassword} alt=".." />
				</div>
				<div className="login-content">
				<form className="fx" action="index.js">
                         <h2 class="card-title">Forgot Your Password? <span className="fa fa-comment-o"/></h2>
                         <p  className="text-dark px-2">Input your email or phone number below to regain your lost password!</p>
						 <div className="input-div one">
						<div className="i">
								<i className="fas fa-envelope"></i>
						</div>
						<div className="div">
						<input className="form-control" name="email"  type="email" onChange={handleChange} value={data.email} placeholder="Email/Phone number" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
						
                             <Link to="#"><button style={{background:"#32be8f"}} onClick={handleForgot} type="button" className="btn btn-lg btn-block rounded-pill text-white">SUBMIT</button></Link>  
                    
        
		</form>
				</div>
			</div>
		</div>
		)
	}


export default ForgotPassword

	