import React, { useState } from 'react'
import './css/style.css'
import bg from '../../Assets/wave.png'
import av from '../../Assets/avatar.svg'
import al from '../../Assets/bg.svg'
import {Link} from 'react-router-dom'
import { history } from '../../history'
// import { Loader } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import {Api} from './Api'

const baseurl = "http://142.93.152.229/cairo/api/"
const loginUrl ="auth/login";
const load = document.getElementById('spinner');


const login =(userData) =>
  {    
    const requestOptions={
        method:"POST",
         body:JSON.stringify(userData),
        headers:{
          "Content-Type":"application/json",
        }
      }
    fetch(baseurl+loginUrl, requestOptions)
    .then(async res=>{
	  const data = await res.json()
	  const status = data.status
	  const message = data.message
	  const msg = document.getElementById("msg")

      if(data.status){
		  localStorage.setItem('data',JSON.stringify(data))
		  msg.innerHTML="Welcome user"+" "+ data.name
		history.push("/dashboard")
		console.log(status)
		// alert(data.status)

      }else{
		// alert(data.message)
		console.log(message)
		msg.innerHTML=message+" "+"wrong email or password"
		// alert(data.message)

      }
    })
    .catch(err=>{
        alert(err = "connection error, please check your connection and try again.")
    })
  }
//   const message = data.message;



const Index =()=> {

	const [data, setData] = useState({
		email:"",
		password:""
	  })

	  const handleChange=(e)=>{
		// e.preventDefault()
		const {name, value} = e.target
	   setData(data=>({...data, [name]:value}))
	//    document.getElementById("msg").style="display:none"
	  }
	
	  const handleSubmit =(e)=>{
		e.preventDefault()
		login(data)
		const style={
			display: "block"
		}

			const spin = document.getElementById("spinner")
			spin.style=style;
			const click = document.getElementById("click")
			click.innerHTML="Please wait.."
			setTimeout(function() { click.innerHTML="Login";spin.style="display:none"; }, 6000);

	
		// document.getElementById("click").className="spinner-border";

		

		
	  }

	
		
		return (
		<div>

				
			


			<img className="wave" src={bg} alt=".."/>
			<div className="container">

				<div className="img">
					<img src={al} alt=".."/>
				</div>
				
				<div className="login-content">
					<form >
						<h5 class="alert-warning " id="msg" role="alert"></h5>
						<img className="avatar" src={av} alt=".."/>
						<h2>Welcome</h2>
						<div className="input-div one">
						<div className="i">
								<i className="fas fa-envelope"></i>
						</div>
						<div className="div">
						<input className="form-control" type="email" placeholder="Email" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} value={data.email} name="email" onChange={handleChange} required/>
						</div>
						</div>
						<div className="input-div pass">
						<div className="i"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="div">
						<input className="form-control" type="password" placeholder="password" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} value={data.password} name="password" onChange={handleChange} required/>
						</div>
						</div>
						<Link to="/forgotPassword" type="submit" name="submit"> <h5>Forgot Password?</h5></Link>
						<Link><button onClick={handleSubmit} id="click" style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white">LOGIN</button></Link> <br/>
						<h5>Don't have an account yet?</h5>
						<Link to="/register"><button style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white ">Click to register</button></Link> 
						<div className="spinner-border" id="spinner" style={{display:"none",width: "70px", height: "70px",textAlign:"center",alignItems:"center"}} role="status">
							<span className="sr-only">Loading...</span>
						</div>

					</form>
					
				</div>
			</div>
		</div>
		)
	}


export default Index

	