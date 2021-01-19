// import React from 'react'
// import { Link } from 'react-router-dom'
// import Header from '../../Components/Header'

// const ForgotPassword = () => {
//     return (
//         <div>
//             <Header  color="black"/>
//             <div style={{backgroundImage:`url(${"/Images/goo.jpg"})`,
//                 backgroundPosition:'center',
//                 height:700,
//                 backgroundSize:'cover',
//                 backgroundRepeat:'no-repeat',
//                 alignItems:'center',
//                 alignContent:'center'}}
//                 >
//             <div className="container" style={{padding:200, marginLeft:50}}> 
//                 <div class="card text-center " style={{width:1000,height:300 }}>
//                     <div class="card-body">
//                         <h1 class="card-title">Forgot Your Password? <span className="fa fa-comment-o"/></h1>
//                         <hr/>
//                         <h3  className="text-dark px-2">To gain access to your account,enter your email
//                             or phone number below <br/>
//                             so we can send you the password reset link.
//                         </h3>
//                         <br/>
//                         <form className="form-group row g-3" style={{width:'80%' ,height:'auto',margin:'0px auto'}}>
//                             <input style={{width:500,height:50, fontSize:15}} type="email,number" class=" form-control" 
//                             placeholder="Your email address or phone number"/> 
//                             <Link to="#" style={{width:200, fontSize:20}} class="btn btn-primary ">Submit</Link>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//               </div>
//         </div>
//     )
// }
// export default ForgotPassword
import React, { Component } from 'react'
import './css/style.css'
import bg from '../../Assets/wave.png'
import forgotPassword from '../../Assets/forgotPassword.svg'
import {Link} from 'react-router-dom'

export class ForgotPassword extends Component {
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
						<input className="form-control border-top-0 border-left-0 border-right-0" type="email" placeholder="Email/Phone number" style={{ fontFamily:"san-serif", fontWeight:"bold", fontSize:"17px"}}/>
						</div>
						</div>
						
                             <Link to="#"><button style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white">SUBMIT</button></Link>  
                    
        
		</form>
				</div>
			</div>
		</div>
		)
	}
}

export default ForgotPassword

	