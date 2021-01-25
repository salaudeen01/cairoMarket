import React, { Component } from 'react'
import './css/style.css'
import bg from './images/wave.png'
import al from './images/bg.svg'
import avatar from './images/avatar.svg'
import { history } from '../../history'
const baseurl = "http://142.93.152.229/cairo/api/auth/verify_email/"




 class Verify extends Component {
     constructor(props){
         super(props)
         this.state = {
             code:this.props.match.params.id
         }
     }
 
 handleSubmit =() =>
    {    
      const requestOptions={
          method:"GET",
          headers:{
            "Content-Type":"application/json",
          }
        }
      fetch(baseurl+this.state.code, requestOptions)
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
    render() {
        return (
            <div>
                <img className="wave" alt="" src={bg}/>
			    <div className="container">
                    <div className="img">
                        <img src={al} alt=""/>
                    </div>
                    <div className="login-content">
                        <form>
                            <img className="avatar" src={avatar} alt="" /> 
                            <h3>Welcome to cairo market,click the button below to verify your email.</h3>
                            <button style={{background:"#32be8f"}} type="button" className="btn btn-lg btn-block rounded-pill text-white" onClick={this.handleSubmit}> Verify Email</button>
                        </form>
                    </div>
			    </div>
            </div>
        )
    }
}

export default Verify
