import React, { Component } from 'react'

 class Project extends Component {
    render() {
        return (
            <div style={{backgroundImage:`url(${"/Images/goo.jpg"})`,
                backgroundPosition:'center',
                height:700,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                alignItems:'center',
                alignContent:'center'}}
                >
            <div className="container" style={{padding:200, marginLeft:50}}> 
                <div class="card text-center " style={{width:1000,height:300 }}>
                    <div class="card-body">
                        <h1 class="card-title">Forgot Your Password <span className="fa fa-comment-o"/></h1>
                        <hr/>
                        <h3  className="text-dark px-2">To gain access to your account,enter your email
                            or phone number below <br/>
                            so we can send you the password reset link.
                        </h3>
                        <br/>
                        <form className="form-group row g-3" style={{width:'80%' ,height:'auto',margin:'0px auto'}}>
                            <input style={{width:500,height:50, fontSize:15}} type="email,number" class=" form-control" 
                            placeholder="Your email address or phone number"/> 
                            <a href="#" style={{width:200, fontSize:20}} class="btn btn-primary ">Submit</a>
                        </form>
                    </div>
                </div>
            </div>
              
            </div>
            
            
        )
    }
}
export default Project