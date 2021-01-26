import React,{useState} from 'react'
import './css/style.css'
import bg from '../Register/images/wave.png'
import al from '../Register/images/bg.svg'
// import {Link} from 'react-router-dom'
import av from '../../Assets/avatar.svg'
import { history } from '../../history'
const baseurl = "http://142.93.152.229/cairo/api/"
const registerurl ="auth/register";

const register =(userData) =>
  {    
    const requestOptions={
        method:"POST",
         body:JSON.stringify(userData),
        headers:{
          "Content-Type":"application/json",
        }
      }
    fetch(baseurl+registerurl, requestOptions)
    .then(async res=>{
      const data = await res.json()
      if(data.status){
        history.push("/login")
      }else{
        alert(data.message)
      }
    })
    .catch(err=>{
        alert(err)
    })
  }

  const Register = () => {
	const [data, setData] = useState({
		first_name:"",
		last_name:"",
		phone_no:"",
		email:"",
		password:"",
		password_confirmation:""
	  })
	  const handleChange=(e)=>{
		// e.preventDefault()
		const {name, value} = e.target
	   setData(data=>({...data, [name]:value}))
	  }
	
	  const handleSubmit =(e)=>{
		e.preventDefault()
		register(data)
	  }
        return (
            <div>
                <img className="wave" alt="" src={bg}/>
			<div className="container">
				<div className="img">
					<img src={al} alt=""/>
				</div>
				<div className="login-content">
					<form onSubmit={handleSubmit}>
				<img className="avatar" src={av} alt=".."/>
						<h2>Welcome</h2>
						<div className="input-div one">
						<div className="i">
								<i className="fas fa-user"></i>
						</div>
						<div className="div">
								<input onChange={handleChange} value={data.first_name} className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="First-Name" name="first_name" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} required/>
						</div>
						</div>
                        <div className="input-div one">
						<div className="i">
								<i className="fas fa-user"></i>
						</div>
						<div className="div">
								<input onChange={handleChange} value={data.last_name} className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="Last-Name" name="last_name" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} required/>
						</div>
						</div>
                        <div className="input-div one">
						<div className="i">
								<i className="fas fa-phone"></i>
						</div>
						<div className="div">
								<input onChange={handleChange} value={data.phone_no} className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="Phone-Number" name="phone_no" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} required/>
						</div>
						</div>
                        <div className="input-div one">
						<div className="i">
								<i className="fas fa-envelope"></i>
						</div>
						<div className="div">
								<input onChange={handleChange} value={data.email} className="form-control border-top-0 border-left-0 border-right-0" type="email" placeholder="Email" name="email" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} required/>
						</div>
						</div>
						<div className="input-div pass">
						<div className="i"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="div">
								<input onChange={handleChange} value={data.password} className="form-control border-top-0 border-left-0 border-right-0" type="password" placeholder="Password" name="password" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} required/>
						</div>
						</div>
                        <div className="input-div pass">
						<div className="i"> 
								<i className="fas fa-lock"></i>
						</div>
						<div className="div">
								<input onChange={handleChange} value={data.password_confirmation} className="form-control border-top-0 border-left-0 border-right-0" type="password" placeholder="Confirm Password" name="password_confirmation" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}} required/>
						</div>
						</div>
        
					<button style={{background:"#32be8f"}} type="submit" className="btn btn-lg btn-block rounded-pill text-white" >SUBMIT
						{/* <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true"></span> */}
  						{/* <span class="visually-hidden">Loading...</span> */}
						  <span className="spinner-border spinner-border-lg" id="spinner" role="status" aria-hidden="true"></span>
  Loading..
					</button>  
                        
					</form>
				</div>
			</div>
            </div>
        )
    
}

export default Register
